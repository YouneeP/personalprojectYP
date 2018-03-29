webpackHotUpdate(0,{

/***/ "./node_modules/react-fontawesome/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-fontawesome/lib/index.js ***!
  \*****************************************************/
/*! dynamic exports provided */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _screenReaderStyles = __webpack_require__(/*! ./screen-reader-styles */ "./node_modules/react-fontawesome/lib/screen-reader-styles.js");

var _screenReaderStyles2 = _interopRequireDefault(_screenReaderStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A React component for the font-awesome icon library.
 *
 * @param {String} [ariaLabel] An extra accessibility label to put on the icon
 * @param {Boolean} [border=false] Whether or not to show a border radius
 * @param {String} [className] An extra set of CSS classes to add to the component
 * @param {Object} [cssModule] Option to pass FontAwesome CSS as a module
 * @param {Boolean} [fixedWidth=false] Make buttons fixed width
 * @param {String} [flip=false] Flip the icon's orientation.
 * @param {Boolean} [inverse=false]Inverse the icon's color
 * @param {String} name Name of the icon to use
 * @param {Boolean} [pulse=false] Rotate icon with 8 steps, rather than smoothly
 * @param {Number} [rotate] The degress to rotate the icon by
 * @param {String} [size] The icon scaling size
 * @param {Boolean} [spin=false] Spin the icon
 * @param {String} [stack] Stack an icon on top of another
 * @param {String} [tag=span] The HTML tag to use as a string, eg 'i' or 'em'
 * @module FontAwesome
 * @type {ReactClass}
 */
var FontAwesome = function (_React$Component) {
  _inherits(FontAwesome, _React$Component);

  function FontAwesome() {
    _classCallCheck(this, FontAwesome);

    var _this = _possibleConstructorReturn(this, (FontAwesome.__proto__ || Object.getPrototypeOf(FontAwesome)).call(this));

    _this.displayName = 'FontAwesome';
    return _this;
  }

  _createClass(FontAwesome, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          border = _props.border,
          cssModule = _props.cssModule,
          className = _props.className,
          fixedWidth = _props.fixedWidth,
          flip = _props.flip,
          inverse = _props.inverse,
          name = _props.name,
          pulse = _props.pulse,
          rotate = _props.rotate,
          size = _props.size,
          spin = _props.spin,
          stack = _props.stack,
          _props$tag = _props.tag,
          tag = _props$tag === undefined ? 'span' : _props$tag,
          ariaLabel = _props.ariaLabel,
          props = _objectWithoutProperties(_props, ['border', 'cssModule', 'className', 'fixedWidth', 'flip', 'inverse', 'name', 'pulse', 'rotate', 'size', 'spin', 'stack', 'tag', 'ariaLabel']);

      var classNames = [];

      if (cssModule) {
        classNames.push(cssModule['fa']);
        classNames.push(cssModule['fa-' + name]);
        size && classNames.push(cssModule['fa-' + size]);
        spin && classNames.push(cssModule['fa-spin']);
        pulse && classNames.push(cssModule['fa-pulse']);
        border && classNames.push(cssModule['fa-border']);
        fixedWidth && classNames.push(cssModule['fa-fw']);
        inverse && classNames.push(cssModule['fa-inverse']);
        flip && classNames.push(cssModule['fa-flip-' + flip]);
        rotate && classNames.push(cssModule['fa-rotate-' + rotate]);
        stack && classNames.push(cssModule['fa-stack-' + stack]);
      } else {
        classNames.push('fa');
        classNames.push('fa-' + name);
        size && classNames.push('fa-' + size);
        spin && classNames.push('fa-spin');
        pulse && classNames.push('fa-pulse');
        border && classNames.push('fa-border');
        fixedWidth && classNames.push('fa-fw');
        inverse && classNames.push('fa-inverse');
        flip && classNames.push('fa-flip-' + flip);
        rotate && classNames.push('fa-rotate-' + rotate);
        stack && classNames.push('fa-stack-' + stack);
      }

      // Add any custom class names at the end.
      className && classNames.push(className);
      return _react2.default.createElement(tag, _extends({}, props, { 'aria-hidden': true, className: classNames.join(' ') }), ariaLabel ? _react2.default.createElement('span', { style: _screenReaderStyles2.default }, ariaLabel) : null);
    }
  }]);

  return FontAwesome;
}(_react2.default.Component);

FontAwesome.propTypes = {
  ariaLabel: _propTypes2.default.string,
  border: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object,
  fixedWidth: _propTypes2.default.bool,
  flip: _propTypes2.default.oneOf(['horizontal', 'vertical']),
  inverse: _propTypes2.default.bool,
  name: _propTypes2.default.string.isRequired,
  pulse: _propTypes2.default.bool,
  rotate: _propTypes2.default.oneOf([90, 180, 270]),
  size: _propTypes2.default.oneOf(['lg', '2x', '3x', '4x', '5x']),
  spin: _propTypes2.default.bool,
  stack: _propTypes2.default.oneOf(['1x', '2x']),
  tag: _propTypes2.default.string
};

exports.default = FontAwesome;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-fontawesome/lib/screen-reader-styles.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-fontawesome/lib/screen-reader-styles.js ***!
  \********************************************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: '0px',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0px, 0px, 0px, 0px)',
  border: '0px'
};
module.exports = exports['default'];

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_fontawesome__ = __webpack_require__(/*! react-fontawesome */ "./node_modules/react-fontawesome/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_fontawesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_fontawesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logo_svg__ = __webpack_require__(/*! ./logo.svg */ "./src/logo.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__logo_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_css__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__App_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_bootstrap__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_bootstrap__ = __webpack_require__(/*! react-router-bootstrap */ "./node_modules/react-router-bootstrap/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_router_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_router_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home__ = __webpack_require__(/*! ./components/home */ "./src/components/home.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_user__ = __webpack_require__(/*! ./components/user */ "./src/components/user.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_registration__ = __webpack_require__(/*! ./components/registration */ "./src/components/registration.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login__ = __webpack_require__(/*! ./components/login */ "./src/components/login.js");
var _jsxFileName = 'C:\\sandbox\\repos\\personalprojectYP\\personalproject\\personal_projectsYP.Web\\App\\src\\App.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













global.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'App', __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["BrowserRouter"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'App-Navbar', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 21
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'nav',
                { className: 'navbar navbar-expand-sm bg-dark navbar-dark', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'ul',
                  { className: 'navbar-nav', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 23
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { className: 'nav-item', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 24
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["Link"],
                      { to: '/home', className: 'nav-link', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 24
                        },
                        __self: this
                      },
                      'Home'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { className: 'nav-item', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 25
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["Link"],
                      { to: '/registration', className: 'nav-link', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 25
                        },
                        __self: this
                      },
                      'Sign up'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { className: 'nav-item', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["Link"],
                      { to: '/signin', className: 'nav-link', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 26
                        },
                        __self: this
                      },
                      'Sign in'
                    )
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { className: 'nav-item', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["Link"],
                      { to: '/user', className: 'nav-link', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 27
                        },
                        __self: this
                      },
                      'User'
                    )
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["Route"], { path: '/home', component: __WEBPACK_IMPORTED_MODULE_7__components_home__["a" /* default */], __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              },
              __self: this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["Route"], { path: '/registration', component: __WEBPACK_IMPORTED_MODULE_9__components_registration__["a" /* default */], __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              },
              __self: this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["Route"], { path: '/user', component: __WEBPACK_IMPORTED_MODULE_8__components_user__["a" /* default */], __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              },
              __self: this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["Route"], { path: '/signin', component: __WEBPACK_IMPORTED_MODULE_10__components_login__["a" /* default */], __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              },
              __self: this
            })
          )
        )
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (App);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

})
//# sourceMappingURL=0.7eb2ba25d4224799d630.hot-update.js.map