function getAlphabet(mouseBeginAt, sentence, offsetX, offsetY) {
    if (Math.abs(offsetX) < 30 && offsetY < -20) {
        if (mouseBeginAt == -1) {
            return 'b';
        }
        else if (sentence[mouseBeginAt] == 'b') {
            return 'y';
        }
        else if (sentence[mouseBeginAt] == 'h-') {
            return 'j';
        }
    }
    if (offsetX < -30 && offsetY < 150 && offsetY > 0) {
        if (mouseBeginAt == -1) {
            
        }
        else if (sentence[mouseBeginAt] == 'l') {
            return 'w';
        }
    }
    if (offsetX > 30 && offsetY < 450 && offsetY > 0) {
        if (mouseBeginAt == -1) {
        
        }
        else if (sentence[mouseBeginAt] == 'a') {
            return 'dd';
        }
        else if (sentence[mouseBeginAt] == 'w') {
            return 'h';
        }
    }
    if (Math.abs(offsetX) < 30 && offsetY > 150) {
        if (mouseBeginAt == -1) {
            return 'a';
        }
        else if (sentence[mouseBeginAt] == 'b') {
            return 't';
        }
        else if (sentence[mouseBeginAt] == 'n') {
            return 'th';
        }
    }
    else if (Math.abs(offsetX) < 30 && offsetY > 40) {
        if (mouseBeginAt == -1) {
            return 'm';
        }
        else if (sentence[mouseBeginAt] == 'b') {
            return 'n';
        }
        else if (sentence[mouseBeginAt] == 'n') {
            return 't';
        }
        else if (sentence[mouseBeginAt] == 't') {
            return 'th';
        }
    }
    if (Math.abs(offsetX) < 40 && offsetY > 80) {
        if (sentence[mouseBeginAt] == 'ss') {
            return 'sh';
        }
        else if (sentence[mouseBeginAt] == 'w') {
            return 'p';
        }
        else if (sentence[mouseBeginAt] == 'p') {
            return 'q';
        }
        else if (sentence[mouseBeginAt] == 'dd') {
            return 'zh';
        }
        else if (sentence[mouseBeginAt] == 'm') {
            return 'sw';
        }
        else if (sentence[mouseBeginAt] == 'l') {
            return 'k';
        }
        else if (sentence[mouseBeginAt] == 'r') {
            return 'z';
        }
        else if (sentence[mouseBeginAt] == 'd') {
            return 'dh';
        }
        else if (sentence[mouseBeginAt] == 'h-') {
            return 'kh';
        }
        else if (sentence[mouseBeginAt] == 'h') {
            return 'tm';
        }
    }
    if (offsetX > 60 && offsetY < -20) {
        if (mouseBeginAt == -1) {
            return 'r';
        }
        else if (sentence[mouseBeginAt] == 'r') {
            return 'd';
        }
        else if (sentence[mouseBeginAt] == 'z') {
            return 'dh';
        }
    }
    if (offsetX < -60 && offsetY < -20) {
        if (mouseBeginAt == -1) {
            if (offsetY > -100) {
                return 'l';
            }
            else {
                return 'h-';
            }
        }
        else if (sentence[mouseBeginAt] == 'th') {
            return 'sh';
        }
        else if (sentence[mouseBeginAt] == 'b') {
            return 'ss';
        }
    }
}