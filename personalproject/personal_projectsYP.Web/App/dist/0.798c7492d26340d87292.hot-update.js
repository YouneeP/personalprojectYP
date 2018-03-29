webpackHotUpdate(0,{

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logo_svg__ = __webpack_require__(/*! ./logo.svg */ "./src/logo.svg");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__logo_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App_css__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__App_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_bootstrap__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_bootstrap__ = __webpack_require__(/*! react-router-bootstrap */ "./node_modules/react-router-bootstrap/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_router_bootstrap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_router_bootstrap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home__ = __webpack_require__(/*! ./components/home */ "./src/components/home.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_user__ = __webpack_require__(/*! ./components/user */ "./src/components/user.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_registration__ = __webpack_require__(/*! ./components/registration */ "./src/components/registration.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login__ = __webpack_require__(/*! ./components/login */ "./src/components/login.js");
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
            lineNumber: 16
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["BrowserRouter"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'App-Navbar', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 19
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'nav',
                { className: 'navbar navbar-expand-sm bg-dark navbar-dark', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'ul',
                  { className: 'navbar-nav', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 21
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'li',
                    { className: 'nav-item', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 22
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Link"],
                      { to: '/home', className: 'nav-link', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 22
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
                        lineNumber: 23
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Link"],
                      { to: '/registration', className: 'nav-link', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 23
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
                        lineNumber: 24
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Link"],
                      { to: '/signin', className: 'nav-link', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 24
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
                        lineNumber: 25
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Link"],
                      { to: '/user', className: 'nav-link', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 25
                        },
                        __self: this
                      },
                      'User'
                    )
                  )
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Route"], { path: '/home', component: __WEBPACK_IMPORTED_MODULE_6__components_home__["a" /* default */], __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              },
              __self: this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Route"], { path: '/registration', component: __WEBPACK_IMPORTED_MODULE_8__components_registration__["a" /* default */], __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              },
              __self: this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Route"], { path: '/user', component: __WEBPACK_IMPORTED_MODULE_7__components_user__["a" /* default */], __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              },
              __self: this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Route"], { path: '/signin', component: __WEBPACK_IMPORTED_MODULE_9__components_login__["a" /* default */], __source: {
                fileName: _jsxFileName,
                lineNumber: 32
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

/***/ }),

/***/ "./src/components/login.js":
/*!*********************************!*\
  !*** ./src/components/login.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_registerpage_png__ = __webpack_require__(/*! ../img/registerpage.png */ "./src/img/registerpage.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_registerpage_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__img_registerpage_png__);
var _jsxFileName = 'C:\\sandbox\\repos\\personalprojectYP\\personalproject\\personal_projectsYP.Web\\App\\src\\components\\login.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Login = function (_Component) {
    _inherits(Login, _Component);

    function Login(props, context) {
        _classCallCheck(this, Login);

        var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props, context));

        _this.state = {
            email: '',
            password: ''
        };
        _this.handleChange = _this.handleChange.bind(_this);
        return _this;
    }

    _createClass(Login, [{
        key: 'handleChange',
        value: function handleChange(event) {
            var target = event.target;
            var value = target.value;
            var name = target.name;

            this.setState(_defineProperty({}, name, value));
        }
    }, {
        key: 'submit',
        value: function submit(event) {
            event.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
                    },
                    __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'row', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 32
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'col-md-4', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 33
                        },
                        __self: this
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'col-md-4 m-t-sm', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 35
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'card', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 36
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'card-img-top img-responsive m-b-sm', src: __WEBPACK_IMPORTED_MODULE_2__img_registerpage_png___default.a, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 37
                                },
                                __self: this
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'card-body', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 38
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'form',
                                    { className: 'form-group', __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 39
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'label',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 40
                                            },
                                            __self: this
                                        },
                                        'E-mail *'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'email', className: 'form-control m-b-sm', name: 'email', value: this.state.email, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 41
                                        },
                                        __self: this
                                    }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'label',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 42
                                            },
                                            __self: this
                                        },
                                        'Password *'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'password', className: 'form-control m-b-sm', name: 'password', value: this.state.password, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 43
                                        },
                                        __self: this
                                    }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'button',
                                        { type: 'submit', className: 'btn btn-primary btn-lg btn-block m-t-md', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 44
                                            },
                                            __self: this
                                        },
                                        'Submit'
                                    )
                                )
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'col-md-4', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 49
                        },
                        __self: this
                    })
                )
            );
        }
    }]);

    return Login;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Login);

/***/ })

})
//# sourceMappingURL=0.798c7492d26340d87292.hot-update.js.map