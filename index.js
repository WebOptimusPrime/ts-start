(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('util')) :
    typeof define === 'function' && define.amd ? define(['exports', 'util'], factory) :
    (global = global || self, factory(global.unex = {}, global.util));
}(this, function (exports, util) { 'use strict';

    console.log(util.types.isPromise(Promise.resolve(0)));
    function someFn(x) {
        if (x)
            return 0;
        return 1;
    }

    exports.someFn = someFn;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
