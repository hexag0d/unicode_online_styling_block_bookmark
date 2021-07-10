
javascript: var _i = false; var _b = false; var _u = false; var t = document.getElementsByClassName('textarea')[0]; (function () {

    var p = 0;
    var el = document.getElementsByClassName("textarea")[0];
    var range = document.createRange();
    var _getFocusedNode = function () {
        return window.getSelection().focusNode;
    }

    var _toggleItalics = function () {
        _i = !_i;
        if (_i) {
            for (i = 0; i < document.getElementsByClassName('enable-italics-comment').length; i++) {
                document.getElementsByClassName('enable-italics-comment')[i].style.outlineStyle = 'inset';
            }
        } else {
            for (i = 0; i < document.getElementsByClassName('enable-italics-comment').length; i++) {
                document.getElementsByClassName('enable-italics-comment')[i].style.outlineStyle = 'none';
            }
        }
    }
    var _addStyleClickListeners = function (no) {
        document.getElementsByClassName('enable-italics-comment')[no].addEventListener('click', _toggleItalics);

    }


    var o = function (po) {
        //window.getSelection().getRangeAt(0).startOffset = po + 1;

        var sel = window.getSelection()

        //range.setStart(el.childNodes[0], po + 1)
        range.setStart(sel.getRangeAt(0).commonAncestorContainer, po + 1);
        range.collapse(true)

        sel.removeAllRanges()
        sel.addRange(range)
    }
    var r = function (c, pos) {
        if (!t.nodeValue) {
            t = _getFocusedNode();
        }
        t.nodeValue = t.nodeValue.substring(0, pos - 1) + c + t.nodeValue.substring(pos, t.nodeValue.length);
        setTimeout(o(pos), 0);
    }

    var _makeAllTextAreasFullWidth = function () {
        for (i = 0; i < document.getElementsByClassName('textarea').length; i++) {
            document.getElementsByClassName('textarea')[i].style.width = '100%';

        }
    }

    var __convertTextAreaToInput = function (element) {
        //element.outerHTML = element.outerHTML.replaceAll('div', 'textarea');
        //element.style.width = '100%';
    }

    var __createCommentStyleButtons = function () {
        for (i = 0; i < document.getElementsByClassName('send').length; i++) {
            document.getElementsByClassName('send')[i].outerHTML = document.getElementsByClassName('send')[i].outerHTML +
                "<span class='highlight-background enabled enable-bold-comment'>B</span>" +
                "<span class='highlight-background enabled enable-italics-comment'>I</span>" +
                "<span class='highlight-background enabled enable-underline-comment'>U</span>";
            _addStyleClickListeners(i);
            //document.getElementsByClassName('send')[i].classList.add('enabled');
        }
        for (i = 0; i < document.getElementsByClassName('textarea').length; i++) {
            __convertTextAreaToInput(document.getElementsByClassName('textarea')[i]);
        }
    }
    __createCommentStyleButtons();


    var _addStylingOptionsToAllSend = function () {
        for (i = 0; i < document.getElementsByClassName('send').length; i++) {
            if (!document.getElementsByClassName('control-row')[i].outerHTML.includes('-bold-')) {
                document.getElementsByClassName('send')[i].outerHTML = document.getElementsByClassName('send')[i].outerHTML +
                    "<span class='highlight-background enabled enable-bold-comment' >B</span>" +
                    "<span class='highlight-background enabled enable-italics-comment' >I</span>" +
                    "<span class='highlight-background enabled enable-underline-comment' >U</span>";
                //document.getElementsByClassName('send')[i].classList.add('enabled');
                document.getElementsByClassName('enable-italics-comment')[i].addEventListener('click', _toggleItalics);
            }
        }
    }

    document.addEventListener('click', function () {
        t = _getFocusedNode();
        if (t.parentElement != undefined) {
            if (t.className == 'textarea' || t.parentElement.className == 'textarea') {
                _addStylingOptionsToAllSend();


                //__convertTextAreaToInput(t);
                //_addStylingOptionsToAllSend();
            }
        }
    })

    document.addEventListener('keyup', event => {
        var n = undefined;
        const k = event.key;
        if (_i) {
            switch (k) {
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

        }
        //} else if (_b) {
        //    switch (k) {
        //        case "0": n = '𝟬'; break;
        //        case "1": n = '𝟭'; break;
        //        case "2": n = '𝟮'; break;
        //        case "3": n = '𝟯'; break;
        //        case "4": n = '𝟰'; break;
        //        case "5": n = '𝟱'; break;
        //        case "6": n = '𝟲'; break;
        //        case "7": n = '𝟳'; break;
        //        case "8": n = '𝟴'; break;
        //        case "9": n = '𝟵'; break;
        //    }
        //} else if (u) {

        //}
        p = window.getSelection().getRangeAt(0).startOffset;
        var pos = p;
        if (n) {
            r(n, pos);
        }
    });

})();