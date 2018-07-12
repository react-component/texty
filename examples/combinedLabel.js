webpackJsonp([3],{

/***/ 134:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(73);


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rc_tween_one__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src___ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_index_less__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assets_combined_less__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__assets_combined_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__assets_combined_less__);




// use jsx to render html, do not modify simple.html






var text = 'Ant Motion';

var Demo = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Demo, _React$Component);

    function Demo() {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Demo);

        var _this = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.apply(this, arguments));

        _this.geInterval = function (e) {
            switch (e.index) {
                case 0:
                    return 0;
                case 1:
                    return 150;
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    return 150 + 450 + (e.index - 2) * 10;
                default:
                    return 150 + 450 + (e.index - 6) * 150;
            }
        };
        _this.getEnter = function (e) {
            var t = {
                opacity: 0,
                scale: 0.8,
                y: '-100%'
            };
            if (e.index >= 2 && e.index <= 6) {
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, t, { y: '-30%', duration: 150 });
            }
            return t;
        };
        _this.getSplit = function (e) {
            var t = e.split(' ');
            var c = [];
            t.forEach(function (str, i) {
                c.push(__WEBPACK_IMPORTED_MODULE_4_react__["createElement"]("span", { key: str + '-' + i }, str));
                if (i < t.length - 1) {
                    c.push(' ');
                }
            });
            return c;
        };
        return _this;
    }

    Demo.prototype.render = function render() {
        return __WEBPACK_IMPORTED_MODULE_4_react__["createElement"]("div", { className: "combined" }, __WEBPACK_IMPORTED_MODULE_4_react__["createElement"]("div", { className: "combined-shape" }, __WEBPACK_IMPORTED_MODULE_4_react__["createElement"]("div", { className: "shape-left" }, __WEBPACK_IMPORTED_MODULE_4_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_rc_tween_one__["b" /* default */], { animation: [{ x: 158, type: 'from', ease: 'easeInOutQuint', duration: 600 }, { x: -158, ease: 'easeInOutQuart', duration: 450, delay: -150 }] })), __WEBPACK_IMPORTED_MODULE_4_react__["createElement"]("div", { className: "shape-right" }, __WEBPACK_IMPORTED_MODULE_4_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_rc_tween_one__["b" /* default */], { animation: [{ x: -158, type: 'from', ease: 'easeInOutQuint', duration: 600 }, { x: 158, ease: 'easeInOutQuart', duration: 450, delay: -150 }] }))), __WEBPACK_IMPORTED_MODULE_4_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__src___["a" /* default */], { className: "title", type: "mask-top", delay: 400, enter: this.getEnter, interval: this.geInterval, component: __WEBPACK_IMPORTED_MODULE_6_rc_tween_one__["b" /* default */], componentProps: {
                animation: [{ x: 130, type: 'set' }, { x: 100, delay: 500, duration: 450 }, {
                    ease: 'easeOutQuart',
                    duration: 300,
                    x: 0
                }, {
                    letterSpacing: 0,
                    delay: -300,
                    scale: 0.9,
                    ease: 'easeInOutQuint',
                    duration: 1000
                }, { scale: 1, width: '100%', delay: -300, duration: 1000, ease: 'easeInOutQuint' }]
            } }, text), __WEBPACK_IMPORTED_MODULE_4_react__["createElement"](__WEBPACK_IMPORTED_MODULE_6_rc_tween_one__["b" /* default */], { className: "combined-bar", animation: { delay: 2000, width: 0, x: 158, type: 'from', ease: 'easeInOutExpo' } }), __WEBPACK_IMPORTED_MODULE_4_react__["createElement"](__WEBPACK_IMPORTED_MODULE_7__src___["a" /* default */], { className: "content", type: "bottom", split: this.getSplit, delay: 2200, interval: 30 }, "Animation specification and components of Ant Design."));
    };

    return Demo;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_5_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_4_react__["createElement"](Demo, null), document.getElementById('__react-content'));

/***/ })

},[72]);
//# sourceMappingURL=combinedLabel.js.map