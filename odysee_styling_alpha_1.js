
javascript: var _g = false;var _i = false; var _b = false; var _u = false; var t = document.getElementsByClassName('textarea')[0]; (function () {

    var p = 0;
    t = document.getElementById("content_description");
    var range = document.createRange();
    //var _getFocusedNode = function () {
    //    return window.getSelection().focusNode;
    //}
    
    //$('#content_description').onfocus = function () {
    //    t = $(this);
    //}
    //$('#content_description').onblur = function () {
    //    t = $(this);
    //}

    var _resetCommentValues = function () {
        _i = false; _b = false; _u = false; _g = false;

    }
    var _toggleGothic = function () {
        _g = !_g;
        if (_g) {
            for (i = 0; i < document.getElementsByClassName('enable-gothic-comment').length; i++) {
                document.getElementsByClassName('enable-gothic-comment')[i].style.borderBlockStyle = 'inset';
            }
        } else {
            for (i = 0; i < document.getElementsByClassName('enable-gothic-comment').length; i++) {
                document.getElementsByClassName('enable-gothic-comment')[i].style.borderBlockStyle = 'none';
            }
        }
    }

    var _toggleItalics = function () {
        _i = !_i;
        if (_i) {
            for (i = 0; i < document.getElementsByClassName('enable-italics-comment').length; i++) {
                document.getElementsByClassName('enable-italics-comment')[i].style.borderBlockStyle = 'inset';
            }
        } else {
            for (i = 0; i < document.getElementsByClassName('enable-italics-comment').length; i++) {
                document.getElementsByClassName('enable-italics-comment')[i].style.borderBlockStyle = 'none';
            }
        }
    }
    var _toggleBold = function () {
        _b = !_b;
        if (_b) {
            for (i = 0; i < document.getElementsByClassName('enable-bold-comment').length; i++) {
                document.getElementsByClassName('enable-bold-comment')[i].style.borderBlockStyle = 'inset';
            }
        } else {
            for (i = 0; i < document.getElementsByClassName('enable-bold-comment').length; i++) {
                document.getElementsByClassName('enable-bold-comment')[i].style.borderBlockStyle = 'none';
            }
        }
    }
    var _toggleUnderline = function () {
        _u = !_u;
        if (_u) {
            for (i = 0; i < document.getElementsByClassName('enable-underline-comment').length; i++) {
                document.getElementsByClassName('enable-underline-comment')[i].style.borderBlockStyle = 'inset';
            }
        } else {
            for (i = 0; i < document.getElementsByClassName('enable-underline-comment').length; i++) {
                document.getElementsByClassName('enable-underline-comment')[i].style.borderBlockStyle = 'none';
            }
        }
    }

    var _addStyleClickListeners = function (no) {
        document.getElementsByClassName('enable-italics-comment')[no].addEventListener('click', _toggleItalics);
        document.getElementsByClassName('enable-bold-comment')[no].addEventListener('click', _toggleBold);
        document.getElementsByClassName('enable-underline-comment')[no].addEventListener('click', _toggleUnderline);
        document.getElementsByClassName('enable-gothic-comment')[no].addEventListener('click', _toggleGothic);

    }


    var o = function (po) {
        //var sel = window.getSelection();
        //range.setStart(sel.getRangeAt(0).commonAncestorContainer, po + 1);
        //range.collapse(true);
        //sel.removeAllRanges();
        //sel.addRange(range);
    }
    var r = function (c, pos) {
        //if (!t.nodeValue) {
        //    t = _getFocusedNode();
        //}
        t.value = t.value.substring(0, pos - 1) + c + t.value.substring(pos, t.value.length);
        setTimeout(o(pos), 0);
    }

    var __createCommentStyleButtons = function () {
        for (i = 0; i < document.getElementsByClassName('form-field__quick-emojis').length; i++) {
            if (document.getElementsByClassName('form-field__quick-emojis')[i].parentElement) {
                if (!document.getElementsByClassName('form-field__quick-emojis')[i].parentElement.outerHTML.includes('-bold-')) {
                    document.getElementsByClassName('form-field__quick-emojis')[i].outerHTML = document.getElementsByClassName('form-field__quick-emojis')[i].outerHTML +
                        "<span class='button button--no-style button--emoji enable-bold-comment'>𝗕</span>" +
                        "<span class='button button--no-style button--emoji enable-italics-comment'>𝘐</span>" +
                        "<span class='button button--no-style button--emoji enable-underline-comment'>U̲</span>" +
                        "<span class='button button--no-style button--emoji enable-gothic-comment'>𝕲</span>";
                    _addStyleClickListeners(i);
                }
            }
        }
    }
    __createCommentStyleButtons();


    var _addStylingOptionsToAllSend = function () {
        for (i = 0; i < document.getElementsByClassName('form-field__quick-emojis').length; i++) {
            if (!document.getElementsByClassName('form-field__quick-emojis')[i].outerHTML.includes('-bold-')) {
                document.getElementsByClassName('form-field__quick-emojis')[i].outerHTML = document.getElementsByClassName('form-field__quick-emojis')[i].outerHTML +
                    "<span class='button button--no-style button--emoji enable-bold-comment' >𝗕</span>" +
                    "<span class='button button--no-style button--emoji enable-italics-comment' >𝘐</span>" +
                    "<span class='button button--no-style button--emoji enable-underline-comment' >U̲</span>" +
                    "<span class='button button--no-style button--emoji enable-gothic-comment'>𝕲</span>";
                document.getElementsByClassName('enable-italics-comment')[i].addEventListener('click', _toggleItalics);
                document.getElementsByClassName('enable-bold-comment')[i].addEventListener('click', _toggleBold);
                document.getElementsByClassName('enable-underline-comment')[i].addEventListener('click', _toggleUnderline);
                document.getElementsByClassName('enable-gothic-comment')[i].addEventListener('click', _toggleGothic);
            }
        }
    }

    document.addEventListener('click', function () {
        //t = _getFocusedNode();
        if (t.parentElement != undefined) {
            if (t.id == 'content_description') {
                //_addStylingOptionsToAllSend();
            }
        }
    })

    document.addEventListener('keyup', event => {
        var n;
        if (_i) {
            if (!_b) {
                switch (event.key) {
                    case "a": n = '𝘢'; break;
                    case "b": n = '𝘣'; break;
                    case "c": n = '𝘤'; break;
                    case "d": n = '𝘥'; break;
                    case "e": n = '𝘦'; break;
                    case "f": n = '𝘧'; break;
                    case "g": n = '𝘨'; break;
                    case "h": n = '𝘩'; break;
                    case "i": n = '𝘪'; break;
                    case "j": n = '𝘫'; break;
                    case "k": n = '𝘬'; break;
                    case "l": n = '𝘭'; break;
                    case "m": n = '𝘮'; break;
                    case "n": n = '𝘯'; break;
                    case "o": n = '𝘰'; break;
                    case "p": n = '𝘱'; break;
                    case "q": n = '𝘲'; break;
                    case "r": n = '𝘳'; break;
                    case "s": n = '𝘴'; break;
                    case "t": n = '𝘵'; break;
                    case "u": n = '𝘶'; break;
                    case "v": n = '𝘷'; break;
                    case "w": n = '𝘸'; break;
                    case "x": n = '𝘹'; break;
                    case "y": n = '𝘺'; break;
                    case "z": n = '𝘻'; break;
                    case "A": n = '𝘈'; break;
                    case "B": n = '𝘉'; break;
                    case "C": n = '𝘊'; break;
                    case "D": n = '𝘋'; break;
                    case "E": n = '𝘌'; break;
                    case "F": n = '𝘍'; break;
                    case "G": n = '𝘎'; break;
                    case "H": n = '𝘏'; break;
                    case "I": n = '𝘐'; break;
                    case "J": n = '𝘑'; break;
                    case "K": n = '𝘒'; break;
                    case "L": n = '𝘓'; break;
                    case "M": n = '𝘔'; break;
                    case "N": n = '𝘕'; break;
                    case "O": n = '𝘖'; break;
                    case "P": n = '𝘗'; break;
                    case "Q": n = '𝘘'; break;
                    case "R": n = '𝘙'; break;
                    case "S": n = '𝘚'; break;
                    case "T": n = '𝘛'; break;
                    case "U": n = '𝘜'; break;
                    case "V": n = '𝘝'; break;
                    case "W": n = '𝘞'; break;
                    case "X": n = '𝘟'; break;
                    case "Y": n = '𝘠'; break;
                    case "Z": n = '𝘡'; break;

                }

            } else if (_b) {
                switch (event.key) {
                    case "a": n = '𝙖'; break;
                    case "b": n = '𝙗'; break;
                    case "c": n = '𝙘'; break;
                    case "d": n = '𝙙'; break;
                    case "e": n = '𝙚'; break;
                    case "f": n = '𝙛'; break;
                    case "g": n = '𝙜'; break;
                    case "h": n = '𝙝'; break;
                    case "i": n = '𝙞'; break;
                    case "j": n = '𝙟'; break;
                    case "k": n = '𝙠'; break;
                    case "l": n = '𝙡'; break;
                    case "m": n = '𝙢'; break;
                    case "n": n = '𝙣'; break;
                    case "o": n = '𝙤'; break;
                    case "p": n = '𝙥'; break;
                    case "q": n = '𝙦'; break;
                    case "r": n = '𝙧'; break;
                    case "s": n = '𝙨'; break;
                    case "t": n = '𝙩'; break;
                    case "u": n = '𝙪'; break;
                    case "v": n = '𝙫'; break;
                    case "w": n = '𝙬'; break;
                    case "x": n = '𝙭'; break;
                    case "y": n = '𝙮'; break;
                    case "z": n = '𝙯'; break;
                    case "A": n = '𝘼'; break;
                    case "B": n = '𝘽'; break;
                    case "C": n = '𝘾'; break;
                    case "D": n = '𝘿'; break;
                    case "E": n = '𝙀'; break;
                    case "F": n = '𝙁'; break;
                    case "G": n = '𝙂'; break;
                    case "H": n = '𝙃'; break;
                    case "I": n = '𝙄'; break;
                    case "J": n = '𝙅'; break;
                    case "K": n = '𝙆'; break;
                    case "L": n = '𝙇'; break;
                    case "M": n = '𝙈'; break;
                    case "N": n = '𝙉'; break;
                    case "O": n = '𝙊'; break;
                    case "P": n = '𝙋'; break;
                    case "Q": n = '𝙌'; break;
                    case "R": n = '𝙍'; break;
                    case "S": n = '𝙎'; break;
                    case "T": n = '𝙏'; break;
                    case "U": n = '𝙐'; break;
                    case "V": n = '𝙑'; break;
                    case "W": n = '𝙒'; break;
                    case "X": n = '𝙓'; break;
                    case "Y": n = '𝙔'; break;
                    case "Z": n = '𝙕'; break;

                }

            }
        }
        else if (_b) {
            switch (event.key) {
                case "a": n = '𝗮'; break;
                case "b": n = '𝗯'; break;
                case "c": n = '𝗰'; break;
                case "d": n = '𝗱'; break;
                case "e": n = '𝗲'; break;
                case "f": n = '𝗳'; break;
                case "g": n = '𝗴'; break;
                case "h": n = '𝗵'; break;
                case "i": n = '𝗶'; break;
                case "j": n = '𝗷'; break;
                case "k": n = '𝗸'; break;
                case "l": n = '𝗹'; break;
                case "m": n = '𝗺'; break;
                case "n": n = '𝗻'; break;
                case "o": n = '𝗼'; break;
                case "p": n = '𝗽'; break;
                case "q": n = '𝗾'; break;
                case "r": n = '𝗿'; break;
                case "s": n = '𝘀'; break;
                case "t": n = '𝘁'; break;
                case "u": n = '𝘂'; break;
                case "v": n = '𝘃'; break;
                case "w": n = '𝘄'; break;
                case "x": n = '𝘅'; break;
                case "y": n = '𝘆'; break;
                case "z": n = '𝘇'; break;
                case "A": n = '𝗔'; break;
                case "B": n = '𝗕'; break;
                case "C": n = '𝗖'; break;
                case "D": n = '𝗗'; break;
                case "E": n = '𝗘'; break;
                case "F": n = '𝗙'; break;
                case "G": n = '𝗚'; break;
                case "H": n = '𝗛'; break;
                case "I": n = '𝗜'; break;
                case "J": n = '𝗝'; break;
                case "K": n = '𝗞'; break;
                case "L": n = '𝗟'; break;
                case "M": n = '𝗠'; break;
                case "N": n = '𝗡'; break;
                case "O": n = '𝗢'; break;
                case "P": n = '𝗣'; break;
                case "Q": n = '𝗤'; break;
                case "R": n = '𝗥'; break;
                case "S": n = '𝗦'; break;
                case "T": n = '𝗧'; break;
                case "U": n = '𝗨'; break;
                case "V": n = '𝗩'; break;
                case "W": n = '𝗪'; break;
                case "X": n = '𝗫'; break;
                case "Y": n = '𝗬'; break;
                case "Z": n = '𝗭'; break;
                case "0": n = '𝟬'; break;
                case "1": n = '𝟭'; break;
                case "2": n = '𝟮'; break;
                case "3": n = '𝟯'; break;
                case "4": n = '𝟰'; break;
                case "5": n = '𝟱'; break;
                case "6": n = '𝟲'; break;
                case "7": n = '𝟳'; break;
                case "8": n = '𝟴'; break;
                case "9": n = '𝟵'; break;
            }
        } else if (_u) {
            switch (event.key) {
                case "a": n = 'a͟'; break;
                case "b": n = 'b͟'; break;
                case "c": n = 'c͟'; break;
                case "d": n = 'd͟'; break;
                case "e": n = 'e͟'; break;
                case "f": n = 'f͟'; break;
                case "g": n = 'g͟'; break;
                case "h": n = 'h͟'; break;
                case "i": n = 'i͟'; break;
                case "j": n = 'j͟'; break;
                case "k": n = 'k͟'; break;
                case "l": n = 'l͟'; break;
                case "m": n = 'm͟'; break;
                case "n": n = 'n͟'; break;
                case "o": n = 'o͟'; break;
                case "p": n = 'p͟'; break;
                case "q": n = 'q͟'; break;
                case "r": n = 'r͟'; break;
                case "s": n = 's͟'; break;
                case "t": n = 't͟'; break;
                case "u": n = 'u͟'; break;
                case "v": n = 'v͟'; break;
                case "w": n = 'w͟'; break;
                case "x": n = 'x͟'; break;
                case "y": n = 'y͟'; break;
                case "z": n = 'z͟'; break;
                case "A": n = 'A̲'; break;
                case "B": n = 'B̲'; break;
                case "C": n = 'C̲'; break;
                case "D": n = 'D̲'; break;
                case "E": n = 'E̲'; break;
                case "F": n = 'F̲'; break;
                case "G": n = 'G̲'; break;
                case "H": n = 'H̲'; break;
                case "I": n = 'I̲'; break;
                case "J": n = 'J̲'; break;
                case "K": n = 'K̲'; break;
                case "L": n = 'L̲'; break;
                case "M": n = 'M̲'; break;
                case "N": n = 'N̲'; break;
                case "O": n = 'O̲'; break;
                case "P": n = 'P̲'; break;
                case "Q": n = 'Q̲'; break;
                case "R": n = 'R̲'; break;
                case "S": n = 'S̲'; break;
                case "T": n = 'T̲'; break;
                case "U": n = 'U̲'; break;
                case "V": n = 'V̲'; break;
                case "W": n = 'W̲'; break;
                case "X": n = 'X̲'; break;
                case "Y": n = 'Y̲'; break;
                case "Z": n = 'Z̲'; break;
                case "0": n = '0̲'; break;
                case "1": n = '1̲'; break;
                case "2": n = '2̲'; break;
                case "3": n = '3̲'; break;
                case "4": n = '4̲'; break;
                case "5": n = '5̲'; break;
                case "6": n = '6̲'; break;
                case "7": n = '7̲'; break;
                case "8": n = '8̲'; break;
                case "9": n = '9̲'; break;
                case " ": n = ' ̲'; break;
            }

        } else if (_g) {
            switch (event.key) {
                case "a": n = '𝖆'; break;
                case "b": n = '𝖇'; break;
                case "c": n = '𝖈'; break;
                case "d": n = '𝖉'; break;
                case "e": n = '𝖊'; break;
                case "f": n = '𝖋'; break;
                case "g": n = '𝖌'; break;
                case "h": n = '𝖍'; break;
                case "i": n = '𝖎'; break;
                case "j": n = '𝖏'; break;
                case "k": n = '𝖐'; break;
                case "l": n = '𝖑'; break;
                case "m": n = '𝖒'; break;
                case "n": n = '𝖓'; break;
                case "o": n = '𝖔'; break;
                case "p": n = '𝖕'; break;
                case "q": n = '𝖖'; break;
                case "r": n = '𝖗'; break;
                case "s": n = '𝖘'; break;
                case "t": n = '𝖙'; break;
                case "u": n = '𝖚'; break;
                case "v": n = '𝖛'; break;
                case "w": n = '𝖜'; break;
                case "x": n = '𝖝'; break;
                case "y": n = '𝖞'; break;
                case "z": n = '𝖟'; break;
                case "A": n = '𝕬'; break;
                case "B": n = '𝕭'; break;
                case "C": n = '𝕮'; break;
                case "D": n = '𝕯'; break;
                case "E": n = '𝕰'; break;
                case "F": n = '𝕱'; break;
                case "G": n = '𝕲'; break;
                case "H": n = '𝕳'; break;
                case "I": n = '𝕴'; break;
                case "J": n = '𝕵'; break;
                case "K": n = '𝕶'; break;
                case "L": n = '𝕷'; break;
                case "M": n = '𝕸'; break;
                case "N": n = '𝕹'; break;
                case "O": n = '𝕺'; break;
                case "P": n = '𝕻'; break;
                case "Q": n = '𝕼'; break;
                case "R": n = '𝕽'; break;
                case "S": n = '𝕾'; break;
                case "T": n = '𝕿'; break;
                case "U": n = '𝖀'; break;
                case "V": n = '𝖁'; break;
                case "W": n = '𝖂'; break;
                case "X": n = '𝖃'; break;
                case "Y": n = '𝖄'; break;
                case "Z": n = '𝖅'; break;
            }

        }
        p = t.selectionEnd;
        var pos = p;
        if (n) {
            r(n, pos);
        }
    });
    //document.getElementsByClassName('long-btn')[0].addEventListener('click', _resetCommentValues);

})();