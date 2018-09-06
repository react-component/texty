webpackJsonp([0],{

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(142);


/***/ }),

/***/ 142:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_animTypes__ = __webpack_require__(71);



// use jsx to render html, do not modify simple.html






var text = '平台拥有丰富的各类首页模板';

var Demo = function (_React$Component) {
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Demo, _React$Component);

    function Demo() {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Demo);

        var _this = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _React$Component.apply(this, arguments));

        _this.state = {
            show: false,
            mode: 'smooth',
            type: 'left'
        };
        _this.onClick = function () {
            _this.setState({
                show: !_this.state.show
            });
        };
        _this.onChange = function (e) {
            _this.setState({
                type: e.target.value
            });
        };
        _this.onModeChange = function (e) {
            _this.setState({
                mode: e.target.value
            });
        };
        return _this;
    }

    Demo.prototype.render = function render() {
        return __WEBPACK_IMPORTED_MODULE_4_react__["createElement"]("div", null, "type:", __WEBPACK_IMPORTED_MODULE_4_react__["createElement"]("select", { onChange: this.onChange, style: { margin: '0 10px' } }, Object.keys(__WEBPACK_IMPORTED_MODULE_8__src_animTypes__["a" /* default */]).map(function (key) {
            return __WEBPACK_IMPORTED_MODULE_4_react__["createElement"]("option", { key: key, value: key }, key);
        })), "mode:", __WEBPACK_IMPORTED_MODULE_4_react__["createElement"]("select", { onChange: this.onModeChange, style: { margin: '0 10px' } }, ['smooth', 'reverse', 'random', 'sync'].map(function (key) {
            return __WEBPACK_IMPORTED_MODULE_4_react__["createElement"]("option", { key: key, value: key }, key);
        })), __WEBPACK_IMPORTED_MODULE_4_react__["createElement"]("button", { onClick: this.onClick }, '\u5207\u6362'), __WEBPACK_IMPORTED_MODULE_4_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__src___["a" /* default */], { type: this.state.type, mode: this.state.mode, onEnd: function onEnd(type) {
                console.log(type); // tslint:disable-line
            } }, this.state.show && text));
    };

    return Demo;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

__WEBPACK_IMPORTED_MODULE_5_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_4_react__["createElement"](Demo, null), document.getElementById('__react-content'));

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[141]);
//# sourceMappingURL=switch.js.map