/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'home': '&#xe92f;',
            'house': '&#xe92f;',
            'home3': '&#xe930;',
            'house3': '&#xe930;',
            'play': '&#xe931;',
            'video': '&#xe931;',
            'phone': '&#xe942;',
            'telephone': '&#xe942;',
            'bubbles2': '&#xe96d;',
            'comments2': '&#xe96d;',
            'bubble2': '&#xe96e;',
            'comment2': '&#xe96e;',
            'bubbles4': '&#xe970;',
            'comments4': '&#xe970;',
            'spinner7': '&#xe980;',
            'loading8': '&#xe980;',
            'spinner8': '&#xe981;',
            'loading9': '&#xe981;',
            'menu': '&#xe9bd;',
            'list3': '&#xe9bd;',
            'cancel-circle': '&#xea0d;',
            'close': '&#xea0d;',
            'cross': '&#xea0f;',
            'cancel': '&#xea0f;',
            'play3': '&#xea1c;',
            'player8': '&#xea1c;',
            'circle-right': '&#xea42;',
            'right5': '&#xea42;',
            'radio-unchecked': '&#xea56;',
            'radio-button3': '&#xea56;',
            'mail2': '&#xea83;',
            'contact2': '&#xea83;',
            'mail3': '&#xea84;',
            'contact3': '&#xea84;',
            'instagram': '&#xea92;',
            'brand12': '&#xea92;',
            'youtube': '&#xea9d;',
            'brand21': '&#xea9d;',
            'tumblr2': '&#xeaba;',
            'brand50': '&#xeaba;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/_icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
