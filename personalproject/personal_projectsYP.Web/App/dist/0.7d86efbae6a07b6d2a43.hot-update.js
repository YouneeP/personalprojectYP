webpackHotUpdate(0,{

/***/ "./src/components/record.js":
/*!**********************************!*\
  !*** ./src/components/record.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\sandbox\\repos\\personalprojectYP\\personalproject\\personal_projectsYP.Web\\App\\src\\components\\record.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Record = function (_Component) {
    _inherits(Record, _Component);

    function Record(props, context) {
        _classCallCheck(this, Record);

        var _this = _possibleConstructorReturn(this, (Record.__proto__ || Object.getPrototypeOf(Record)).call(this, props, context));

        _this.state = {
            mealArr: []
        };
        return _this;
    }

    _createClass(Record, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            var cookie = document.cookie;
            if (cookie === null) {
                window.location.href = "http://localhost:57432/login";
            } else {
                var accountId = cookie.split("=")[1];
                this.setState({
                    accountId: accountId
                }, function () {
                    return _this2.getByAccountId();
                });
            }
        }
    }, {
        key: "getByAccountId",
        value: function getByAccountId() {
            var accountId = this.state.accountId;
            fetch("/api/user/meal/" + accountId, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            }).then(function (resp) {
                return resp.json();
            }).then(function (data) {
                var _this3 = this;

                var mealArr = data.Items;
                for (var i = 0; i < mealArr.length; i++) {
                    mealArr[i].CreatedDateOnly = mealArr[i].CreatedDate.split("T")[0];
                }
                this.setState({ mealArr: mealArr }, function () {
                    return console.log(_this3.state.mealArr);
                });
            }.bind(this));
        }
    }, {
        key: "render",
        value: function render() {
            var _this4 = this;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                    },
                    __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "table",
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 43
                        },
                        __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "thead",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 44
                            },
                            __self: this
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "th",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 45
                                },
                                __self: this
                            },
                            "Food"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "th",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 46
                                },
                                __self: this
                            },
                            "Quantity"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "th",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 47
                                },
                                __self: this
                            },
                            "Date"
                        )
                    ),
                    this.state.mealArr.map(function (meal) {
                        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "tbody",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 50
                                },
                                __self: _this4
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "tr",
                                {
                                    __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 51
                                    },
                                    __self: _this4
                                },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "td",
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 52
                                        },
                                        __self: _this4
                                    },
                                    meal.Meal
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "td",
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 53
                                        },
                                        __self: _this4
                                    },
                                    meal.Quantity
                                ),
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    "td",
                                    {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 54
                                        },
                                        __self: _this4
                                    },
                                    meal.CreatedDateOnly
                                )
                            )
                        );
                    })
                )
            );
        }
    }]);

    return Record;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Record);

/***/ })

})
//# sourceMappingURL=0.7d86efbae6a07b6d2a43.hot-update.js.map