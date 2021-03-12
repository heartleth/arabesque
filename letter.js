const getLetter = (st, letter, mode, noPath = false) => {
    let y = st.y;
    let ret = new Path2D();
    let nextMode = 'medial';
    let dots = [];
    let m = 200;

    ret.lineTo(st.x + 3, y);

    if (letter == 'b' || letter == 't' || letter == 'th' || letter == 'n') {
        if (mode == 'isolated' || mode == 'final') {
            m = 210;
            ret.moveTo(st.x - 20, y - 25);
            ret.bezierCurveTo(st.x + 83, y + 70, st.x - 278, y + 70, st.x - 185, y - 25);
            if (letter == 'b') {
                dots.push([st.x - 92.5, st.y + 70]);
            }
            if (letter == 'n') {
                dots.push([st.x - 97, st.y - 30]);
            }
            if (letter[0] == 't') {
                dots.push([st.x - 92.5 + 12, st.y - 30]);
                dots.push([st.x - 92.5 - 12, st.y - 30]);
                if (letter == 'th') {
                    dots.push([st.x - 92.5, st.y - 44]);
                }
            }
        }
        if (mode == 'initial' || mode == 'medial') {
            m = 100;
            ret.moveTo(st.x - 3, y - 25);
            ret.bezierCurveTo(st.x + 23, y + 60, st.x - 70, y + 25, st.x - 100, y);
            if (letter == 'b') {
                dots.push([st.x - 25, st.y + 50]);
            }
            if (letter == 'n') {
                dots.push([st.x - 25, st.y - 30]);
            }
            if (letter[0] == 't') {
                dots.push([st.x - 25 + 12, st.y - 35]);
                dots.push([st.x - 25 - 12, st.y - 35]);
                if (letter == 'th') {
                    dots.push([st.x - 25, st.y - 49]);
                }
            }
        }
    }
    if (letter == 'y') {
        if (mode == 'final' || mode == 'isolated') {
            m = 210;
            ret.moveTo(st.x + 2, y);
            ret.bezierCurveTo(st.x - 120, y - 15, st.x - 120, y + 50, st.x - 15, y + 40);
            ret.bezierCurveTo(st.x + 30, y + 60, st.x - 250, y + 160, st.x - 195, y - 10);
            ret.moveTo(st.x - 200, y);
            dots.push([st.x - 38, st.y + 88]);
            dots.push([st.x - 70, st.y + 98]);
        }
        if (mode == 'initial' || mode == 'medial') {
            m = 100;
            ret.moveTo(st.x - 3, y - 25);
            ret.bezierCurveTo(st.x + 23, y + 60, st.x - 70, y + 25, st.x - 100, y);
            dots.push([st.x - 18, st.y + 50]);
            dots.push([st.x - 40, st.y + 52]);
        }
    }
    if (letter == 'l') {
        if (mode == 'final' || mode == 'isolated') {
            m = 210;
            ret.moveTo(st.x - 3, y - 200);
            ret.lineTo(st.x - 3, y);
            ret.bezierCurveTo(st.x - 3, y + 60, st.x - 240, y + 75, st.x - 190, y - 10);
        }
        if (mode == 'initial' || mode == 'medial') {
            m = 100;
            ret.moveTo(st.x - 3, y - 200);
            ret.lineTo(st.x - 3, y);
            ret.moveTo(st.x - 3, y);
            ret.bezierCurveTo(st.x - 3, y + 60, st.x - 70, y + 25, st.x - 100, y);
        }
    }
    if (letter == 'm') {
        if (mode == 'final' || mode == 'isolated') {
            m = 150;
            ret.moveTo(st.x - 75, y - 35);
            if (mode == 'final') {
                ret.moveTo(st.x + 3, y);
                ret.bezierCurveTo(st.x - 20, y, st.x - 50, y - 35, st.x - 75, y - 35);
            }
            ret.bezierCurveTo(st.x - 100, y - 35, st.x - 130, y - 30, st.x - 120, y + 100);
            ret.moveTo(st.x - 90, y - 34);
            ret.bezierCurveTo(st.x - 120, y + 30, st.x, y + 40, st.x - 80, y - 35);
        }
        if (mode == 'initial' || mode == 'medial') {
            m = 150;
            ret.moveTo(st.x - 75, y - 35);
            if (mode == 'medial') {
                ret.moveTo(st.x + 3, y);
                ret.bezierCurveTo(st.x - 20, y, st.x - 50, y - 35, st.x - 75, y - 35);
            }
            ret.bezierCurveTo(st.x - 100, y - 35, st.x - 130, y, st.x - 150, y);
            ret.moveTo(st.x - 120, y - 15);
            ret.bezierCurveTo(st.x - 100, y + 30, st.x, y + 40, st.x - 80, y - 35);
        }
    }
    if (letter == 'sh' || letter == 'ss') {
        if (mode == 'final' || mode == 'isolated') {
            ret.moveTo(st.x - 3, y - 50);
            ret.bezierCurveTo(st.x + 38, y + 35, st.x - 70, y, st.x - 90, y);
            ret.moveTo(st.x - 78, y - 50);
            ret.bezierCurveTo(st.x - 50, y + 35, st.x - 200, y + 20, st.x - 150, y - 50);
            if (letter == 'sh') {
                dots.push([st.x - 75 + 12, st.y - 70]);
                dots.push([st.x - 75 - 12, st.y - 70]);
                dots.push([st.x - 75, st.y - 84]);
            }
            ret.moveTo(st.x - 150, y - 2);
            ret.bezierCurveTo(st.x - 110, y + 135, st.x - 340, y + 135, st.x - 300, y + 40);
        }
        if (mode == 'initial' || mode == 'medial') {
            ret.moveTo(st.x - 3, y - 50);
            ret.bezierCurveTo(st.x + 38, y + 35, st.x - 70, y, st.x - 90, y);
            ret.moveTo(st.x - 78, y - 50);
            ret.bezierCurveTo(st.x - 50, y + 35, st.x - 200, y + 20, st.x - 150, y - 50);
            if (letter == 'sh') {
                dots.push([st.x - 75 + 12, st.y - 70]);
                dots.push([st.x - 75 - 12, st.y - 70]);
                dots.push([st.x - 75, st.y - 84]);
            }
            ret.moveTo(st.x - 150, y);
            ret.lineTo(st.x - 200, y);
        }
    }
    if (letter == 'a') {
        m = 50;
        ret.moveTo(st.x - 30, y - 200);
        ret.lineTo(st.x - 30, y - 30);
        ret.bezierCurveTo(st.x - 30, y, st.x, y, st.x, y);
        nextMode = 'initial';
    }
    if (letter == 'q' || letter == 'p' || letter == 'w') {
        if (mode == 'final' || mode == 'isolated' || letter == 'w') {
            m = 200;
            if (mode == 'isolated') {
                ret.moveTo(st.x, y);
                ret.bezierCurveTo(st.x - 100, y + 25, st.x - 100, y - 70, st.x - 50, y - 70);
            } else {
                ret.bezierCurveTo(st.x - 100, y + 25, st.x - 100, y - 70, st.x - 50, y - 70);
            }

            if (letter == 'p') {
                ret.bezierCurveTo(st.x, y - 70, st.x + 25, y + 14, st.x - 50, y + 40);
                ret.bezierCurveTo(st.x - 53, y + 40, st.x - 180, y + 100, st.x - 160, y + 20);
            }
            if (letter == 'q' || letter == 'w') {
                ret.bezierCurveTo(st.x, y - 70, st.x + 25, y + 14, st.x - 20, y + 60);
                ret.bezierCurveTo(st.x - 53, y + 105, st.x - 200, y + 100, st.x - 160, y + 20);
            }
        }
        if (mode == 'initial' && letter != 'w') {
            m = 100;
            ret.moveTo(st.x - 50, y);
            ret.bezierCurveTo(st.x - 100, y, st.x - 100, y - 70, st.x - 50, y - 70);
            ret.bezierCurveTo(st.x, y - 70, st.x + 25, y + 14, st.x - 100, y);
        }
        if (mode == 'medial' && letter != 'w') {
            m = 100;
            ret.bezierCurveTo(st.x - 100, y, st.x - 100, y - 70, st.x - 50, y - 70);
            ret.bezierCurveTo(st.x, y - 70, st.x, y, st.x - 100, y);
        }
        if (letter == 'p') {
            dots.push([st.x - 50, st.y - 95]);
        }
        if (letter == 'q') {
            dots.push([st.x - 38, y - 95]);
            dots.push([st.x - 62, y - 95]);
        }
        if (letter == 'w') {
            nextMode = 'initial';
        }
    }
    if (letter == 'dd' || letter == 'zh') {
        m = 140;
        if (mode == 'medial' || mode == 'final') {
            ret.lineTo(st.x - 100, y);
        }
        ret.moveTo(st.x - 100, y - 200);
        ret.lineTo(st.x - 100, y - 13);
        ret.bezierCurveTo(st.x, y - 120, st.x + 40, y, st.x - 100, y);
        ret.lineTo(st.x - 140, y);
        if (letter == 'zh') {
            dots.push([st.x - 50, st.y - 80]);
        }
    }
    if (letter == 'sw' || letter == 'dw') {
        m = 140;
        if (mode == 'medial' || mode == 'final') {
            ret.lineTo(st.x - 100, y);
        }
        ret.moveTo(st.x - 100, y - 60);
        ret.lineTo(st.x - 100, y - 13);
        ret.bezierCurveTo(st.x, y - 120, st.x + 40, y, st.x - 100, y);
        if (mode == 'medial' || mode == 'initial') {
            ret.lineTo(st.x - 140, y);
        } else {
            ret.bezierCurveTo(st.x - 100, y + 80, st.x - 250, y + 80, st.x - 200, y + 20);
        }
        if (letter == 'dw') {
            dots.push([st.x - 50, st.y - 80]);
        }
    }
    if (letter == 'r' || letter == 'z') {
        m = 80;
        nextMode = 'initial';
        ret.moveTo(st.x - 10, y - 80);
        ret.bezierCurveTo(st.x + 10, y, st.x + 20, y + 20, st.x - 60, y + 30);
        if (letter == 'z') {
            dots.push([st.x - 15, y - 100]);
        }
    }
    if (letter == 'd' || letter == 'dh') {
        m = 100;
        nextMode = 'initial';
        ret.moveTo(st.x - 60, y - 80);
        ret.bezierCurveTo(st.x + 20, y, st.x + 30, y + 20, st.x - 100, y + 30);
        if (letter == 'dh') {
            dots.push([st.x - 60, y - 100]);
        }
    }
    if (letter == 'k') {
        if (mode == 'final' || mode == 'isolated') {
            if (mode == 'final') {
                ret.lineTo(st.x - 100, y);
            }
            ret.moveTo(st.x - 3, y - 200);
            ret.lineTo(st.x - 3, y - 30);
            ret.bezierCurveTo(st.x - 3, y, st.x, y, st.x - 100, y);
            ret.bezierCurveTo(st.x - 190, y, st.x - 190, y, st.x - 180, y - 30);
            ret.moveTo(st.x - 90, y - 30);
            ret.lineTo(st.x - 40, y - 40);
            ret.lineTo(st.x - 80, y - 60);
            ret.lineTo(st.x - 50, y - 80);
        }
        if (mode == 'initial' || mode == 'medial') {
            m = 100;
            ret.moveTo(st.x - 10, y - 120);
            ret.lineTo(st.x - 80, y - 40);
            ret.lineTo(st.x, y);
            ret.lineTo(st.x - 100, y);
        }
    }
    if (letter == 'kh' || letter == 'h-' || letter == 'j') {
        if (mode == 'final' || mode == 'isolated') {
            m = 200;
            ret.moveTo(st.x - 180, y - 80);
            ret.bezierCurveTo(st.x - 100, y - 80, st.x - 100, y, st.x, y);
            ret.bezierCurveTo(st.x - 220, y - 20, st.x - 220, y + 250, st.x + 10, y + 135);
            if (letter == 'j') {
                dots.push([st.x - 75, y + 80]);
            }
            else if (letter == 'kh') {
                dots.push([st.x - 70, y - 56]);
            }
        }
        if (mode == 'medial' || mode == 'initial') {
            m = 190;
            ret.moveTo(st.x - 180, y - 80);
            ret.bezierCurveTo(st.x - 100, y - 80, st.x - 100, y, st.x, y);
            ret.moveTo(st.x, y);
            ret.lineTo(st.x - 190, y);
            if (letter == 'j') {
                dots.push([st.x - 100, y + 30]);
            }
            else if (letter == 'kh') {
                dots.push([st.x - 90, y - 70]);
            }
        }
    }
    if (letter == 'h' || letter == 'tm') {
        m = 120;
        if (mode == 'isolated' || (mode=='initial' && letter == 'tm')) {
            ret.moveTo(st.x - 60, y - 50);
            ret.bezierCurveTo(st.x - 240, y + 90, st.x + 120, y + 90, st.x - 60, y - 50);
            ret.moveTo(st.x - 63, y - 50);
            ret.lineTo(st.x - 57, y - 50);
            if (letter == 'tm') {
                dots.push([st.x - 40, y - 70]);
                dots.push([st.x - 80, y - 70]);
                m = 150;
            }
        }
        else if (mode == 'final' || letter == 'tm') {
            m = 100;
            ret.moveTo(st.x, y + 5);
            ret.lineTo(st.x, y - 100);
            ret.moveTo(st.x, y - 90);
            ret.bezierCurveTo(st.x - 150, y - 80, st.x - 80, y + 60, st.x, y - 30);
            if (letter == 'tm') {
                dots.push([st.x - 10, y - 120]);
                dots.push([st.x - 35, y - 116]);
            }
        }
        if (mode == 'initial' && letter != 'tm') {
            m = 200;
            ret.moveTo(st.x - 180, y - 70);
            ret.bezierCurveTo(st.x - 100, y - 110, st.x + 70, y - 10, st.x - 40, y);
            ret.moveTo(st.x - 40, y);
            ret.lineTo(st.x - 100, y);
            ret.bezierCurveTo(st.x - 150, y, st.x - 150, y - 70, st.x - 120, y - 70);
            ret.bezierCurveTo(st.x - 50, y - 70, st.x - 50, y, st.x - 200, y);
        }
        if (mode == 'medial' && letter != 'tm') {
            m = 150;
            ret.lineTo(st.x - 70, y);
            ret.bezierCurveTo(st.x, y + 110, st.x - 150, y + 110, st.x - 90, y - 80);
            ret.bezierCurveTo(st.x - 50, y - 200, st.x + 30, y, st.x - 150, y);
        }
        if (letter == 'tm') {
            nextMode = 'initial';
        }
    }
    if (letter == ' ') {
        m = 40;
        nextMode = 'initial';
    }
    
    if (!noPath) {
        return {
            path: ret,
            dots,
            mode: nextMode,
            move: m
        };
    } else {
        return {
            mode: nextMode,
            move: m
        };
    }
}