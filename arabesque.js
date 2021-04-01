function draw(x, y, points, len, dist, width, lcol) {
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');
    
    const sin = d=>Math.sin(d*(Math.PI/180));
    const cos = d=>Math.cos(d*(Math.PI/180));
    const tan = d=>Math.tan(d*(Math.PI/180));

    const v2dadd = (a,b)=>[a[0]+b[0],a[1]+b[1]];
    const absolute = (a, offsetX=0, offsetY=0)=>[x+a[0]+offsetX,y-a[1]-offsetY];
    const toward = (ang, len)=>[len*sin(ang),len*cos(ang)];
    const fixWidth = (ang)=>Math.abs((width*cos(angleFix(ang)/2)/sin(angleFix(ang))));
    const angleFix = (ang)=>(ang+360)%360;
    const theta = 360/points;

    const renderOne = (ctx, from) => {
        const edge = len / cos(theta);
        const pit = len / cos(theta/2);
        
        ctx.beginPath();
        ctx.lineWidth=width;
        ctx.strokeStyle=lcol;
        for (let i=0;i<points;i++) {
            const angle = theta*i;
            const origin = toward(angle, len);
            
            if (width>0) {
                ctx.moveTo(...absolute(v2dadd(origin, toward(angle-90, 5000)), ...from));
                ctx.lineTo(...absolute(v2dadd(origin, toward(angle+90, 5000)), ...from));
            }
        }
        ctx.stroke();
        
        const widthfixEdge=Math.abs(width/2*(cos(theta/2)/sin(theta)));
        const widthfixPit=Math.abs(width*(sin(theta/2)/sin(theta)));
        const triangles = (pt, a, p, e, st, theta1, theta2, cols)=>{
            if (cols.length) {
                const theta3 = theta1+theta2-90;
                const l = 2*a*((cos(theta3)*tan(theta1+theta3)-tan(theta3))/tan(theta1));
                for (let i=0;i<pt;i++) {
                    const base = st+360/pt*i;
                    ctx.beginPath();
                    ctx.moveTo(...absolute(toward(base+180/pt,p+l-fixWidth(180-2*(theta1+theta3))), ...from));
                    ctx.lineTo(...absolute(v2dadd(toward(base,e), toward(base+2*theta1, fixWidth(2*theta1))), ...from));
                    ctx.lineTo(...absolute(toward(base+180/pt,p+fixWidth(2*theta2)), ...from));
                    ctx.lineTo(...absolute(v2dadd(toward(base+360/pt,e), toward(base+360/pt-2*theta1, fixWidth(2*theta1))), ...from));
                    ctx.fillStyle=cols[0];
                    ctx.fill();
                }
                triangles(pt, l-(a/sin(theta1)*cos(theta2)), e, p+l, st+180/pt, theta1+theta3, 90-theta1, cols.slice(1));
            }
        };
        return {
            star: (color = 'white')=>{
                ctx.beginPath();
                ctx.moveTo(...absolute([from[0], edge+from[1]-widthfixEdge]));
                for (let i=0;i<points;i++) {
                    ctx.lineTo(...absolute(toward(theta*i+theta/2, pit-widthfixPit), ...from));
                    ctx.lineTo(...absolute(toward(theta*(i+1), edge-widthfixEdge), ...from));
                }
                ctx.fillStyle=color;
                ctx.fill();
            },
            decoration: (colors)=>{
                if (points>6) {
                    triangles(points, edge-len, pit, edge, 0, theta, 90-theta/2, colors);
                }
            }
        };
    };
    
    let visit = [];
    const pattern = (ctx, coord, from, depth)=>{
        if (!visit.includes(coord)) {
            visit.push(coord);
            if (depth > 0) {
                let ret = [renderOne(ctx, coord)];
                for (let i=0;i<points;i++) {
                    if (points%6==0) {
                        if (theta*i%60==0) {
                            ret = ret.concat(pattern(ctx, v2dadd(coord, toward(theta*i, dist)), theta*i, depth-1));
                        }
                    }
                    else if (points%4==0) {
                        if (theta*i%90==0) {
                            ret = ret.concat(pattern(ctx, v2dadd(coord, toward(theta*i, dist)), theta*i, depth-1));
                        }
                    }
                    else {
                        if (from==-1||theta*i==from) {
                            ret = ret.concat(pattern(ctx, v2dadd(coord, toward(theta*i, dist)), theta*i, depth-1));
                        }
                    }
                }
                return ret;
            }
        }
        return [];
    };

    return pattern(ctx, [0, 0], -1, 4);
}