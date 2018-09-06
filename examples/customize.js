webpackJsonp([2],{

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(138);


/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src___ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_index_less__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_index_less__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__assets_index_less__);



// use jsx to render html, do not modify simple.html





var text = '平台拥有丰富的各类首页模板';

var Demo = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Demo, _React$Component);

    function Demo() {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Demo);

        var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.apply(this, arguments));

        _this.getEnter = function (e) {
            switch (e.index) {
                case 0:
                    return {
                        rotate: 90,
                        opacity: 0,
                        y: -60
                    };
                case 10:
                case 1:
                    return {
                        y: -60,
                        x: -10,
                        opacity: 0
                    };
                case 9:
                case 2:
                    return {
                        y: -60,
                        x: 20,
                        opacity: 0
                    };
                case 3:
                    return {
                        y: 60,
                        opacity: 0
                    };
                case 8:
                case 4:
                    return {
                        x: 30,
                        opacity: 0
                    };
                case 5:
                    return {
                        enter: [{
                            scale: 2,
                            opacity: 0,
                            type: 'set'
                        }, { scale: 1.2, opacity: 1, duration: 300 }, { scale: 0.9, duration: 200 }, { scale: 1.05, duration: 150 }, { scale: 1, duration: 100 }],
                        leave: {
                            opacity: 0, scale: 0
                        }
                    };
                case 11:
                case 6:
                    return {
                        scale: 0.8,
                        x: 30,
                        y: -10,
                        opacity: 0
                    };
                case 12:
                case 7:
                    return {
                        scale: 0.8,
                        x: 30,
                        y: 10,
                        opacity: 0
                    };
                default:
                    return {
                        opacity: 0
                    };
            }
        };
        return _this;
    }

    Demo.prototype.render = function render() {
        return __WEBPACK_IMPORTED_MODULE_4_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__src___["a" /* default */], { enter: this.getEnter, leave: this.getEnter }, text);
    };

    return Demo;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_5_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_4_react__["createElement"](Demo, null), document.getElementById('__react-content'));

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[137]);
//# sourceMappingURL=customize.js.map