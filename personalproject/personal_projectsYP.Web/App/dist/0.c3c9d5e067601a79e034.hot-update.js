webpackHotUpdate(0,{

/***/ "./src/components/registration.js":
/*!****************************************!*\
  !*** ./src/components/registration.js ***!
  \****************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_bootstrap__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_registerpage_png__ = __webpack_require__(/*! ../img/registerpage.png */ "./src/img/registerpage.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__img_registerpage_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__img_registerpage_png__);
var _jsxFileName = 'C:\\sandbox\\repos\\personalprojectYP\\personalproject\\personal_projectsYP.Web\\App\\src\\components\\registration.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Registration = function (_Component) {
    _inherits(Registration, _Component);

    function Registration(props, context) {
        _classCallCheck(this, Registration);

        var _this = _possibleConstructorReturn(this, (Registration.__proto__ || Object.getPrototypeOf(Registration)).call(this, props, context));

        _this.state = {
            firstName: '',
            age: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirmed: ''
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.submit = _this.submit.bind(_this);
        return _this;
    }

    _createClass(Registration, [{
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
            console.log(this.state);
            fetch("/api/user", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    age: this.state.age,
                    email: this.state.email,
                    password: this.state.password
                }),
                credentials: 'include'
            }).then(function (response) {
                if (response.status === 200) {
                    alert("Registration Success!");
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
                        lineNumber: 53
                    },
                    __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'row', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 54
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'col-md-4', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 55
                        },
                        __self: this
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'col-md-4 m-t-sm', __source: {
                                fileName: _jsxFileName,
                                lineNumber: 57
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'card', __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 58
                                },
                                __self: this
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'card-img-top img-responsive m-b-sm', src: __WEBPACK_IMPORTED_MODULE_2__img_registerpage_png___default.a, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 59
                                },
                                __self: this
                            }),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'card-body', __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 60
                                    },
                                    __self: this
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'form',
                                    { className: 'form-group', onSubmit: this.submit, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 61
                                        },
                                        __self: this
                                    },
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'label',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 62
                                            },
                                            __self: this
                                        },
                                        'First Name *'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', onChange: this.handleChange, className: 'form-control m-b-sm', name: 'firstName', value: this.state.firstName, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 63
                                        },
                                        __self: this
                                    }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'label',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 64
                                            },
                                            __self: this
                                        },
                                        'Last Name *'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', onChange: this.handleChange, className: 'form-control m-b-sm', name: 'lastName', value: this.state.lastName, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 65
                                        },
                                        __self: this
                                    }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'label',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 66
                                            },
                                            __self: this
                                        },
                                        'Age *'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', onChange: this.handleChange, className: 'form-control m-b-sm', name: 'age', value: this.state.age, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 67
                                        },
                                        __self: this
                                    }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'label',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 68
                                            },
                                            __self: this
                                        },
                                        'E-mail *'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'email', onChange: this.handleChange, className: 'form-control m-b-sm', name: 'email', value: this.state.email, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 69
                                        },
                                        __self: this
                                    }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'label',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 70
                                            },
                                            __self: this
                                        },
                                        'Password *'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'password', onChange: this.handleChange, className: 'form-control m-b-sm', name: 'password', value: this.state.password, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 71
                                        },
                                        __self: this
                                    }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'label',
                                        {
                                            __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 72
                                            },
                                            __self: this
                                        },
                                        'Confirm your Password *'
                                    ),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'password', onChange: this.handleChange, className: 'form-control m-b-sm', name: 'passwordConfirmed', value: this.state.passwordConfirmed, __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 73
                                        },
                                        __self: this
                                    }),
                                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        'button',
                                        { type: 'submit', className: 'btn btn-primary btn-lg btn-block m-t-md', __source: {
                                                fileName: _jsxFileName,
                                                lineNumber: 74
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
                            lineNumber: 79
                        },
                        __self: this
                    })
                )
            );
        }
    }]);

    return Registration;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Registration);

/***/ })

})
//# sourceMappingURL=0.c3c9d5e067601a79e034.hot-update.js.map