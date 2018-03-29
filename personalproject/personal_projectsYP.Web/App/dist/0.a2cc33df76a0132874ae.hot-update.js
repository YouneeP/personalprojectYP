webpackHotUpdate(0,{

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
            password: '',
            redirect: false
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.submit = _this.submit.bind(_this);
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
            fetch("/api/user/login", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                }),
                credentials: 'include'
            }).then(function (resp) {
                return resp.json();
            }).then(function (data) {
                var item = data.Item;
                if (item.Id != 0) {
                    console.log(item);
                    alert("Login Success");
                    document.cookie = 'accountId=' + accountId + '; expires=Wed, 1 Jan 2099 13:47:11 UTC; path=/';
                    window.location.href = "http://localhost:57432/user";
                } else if (item.Id === 0) {
                    alert("Please Check your Id and Password");
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 54
                    },
                    __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'row', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'col-md-4', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 56
                        },
                        __self: this
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'col-md-4 m-t-sm', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 58
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'card', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 59
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'card-img-top img-responsive m-b-sm', src: __WEBPACK_IMPORTED_MODULE_2__img_registerpage_png___default.a, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 60
                                },
                                __self: this
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'card-body', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 61
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'form',
                                    { className: 'form-group', onSubmit: this.submit, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 62
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'label',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 63
                                            },
                                            __self: this
                                        },
                                        'E-mail *'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'email', onChange: this.handleChange, className: 'form-control m-b-sm', name: 'email', value: this.state.email, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 64
                                        },
                                        __self: this
                                    }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'label',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 65
                                            },
                                            __self: this
                                        },
                                        'Password *'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'password', onChange: this.handleChange, className: 'form-control m-b-sm', name: 'password', value: this.state.password, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 66
                                        },
                                        __self: this
                                    }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'button',
                                        { type: 'submit', className: 'btn btn-primary btn-lg btn-block m-t-md', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 67
                                            },
                                            __self: this
                                        },
                                        'Sign in'
                                    )
                                )
                            )
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'col-md-4', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 72
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
//# sourceMappingURL=0.a2cc33df76a0132874ae.hot-update.js.map