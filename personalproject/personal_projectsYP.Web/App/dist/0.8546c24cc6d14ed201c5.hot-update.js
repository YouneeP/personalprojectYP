webpackHotUpdate(0,{

/***/ "./src/components/user.js":
/*!********************************!*\
  !*** ./src/components/user.js ***!
  \********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_bootstrap__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_registerpage_png__ = __webpack_require__(/*! ../img/registerpage.png */ "./src/img/registerpage.png");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__img_registerpage_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__img_registerpage_png__);
var _jsxFileName = 'C:\\sandbox\\repos\\personalprojectYP\\personalproject\\personal_projectsYP.Web\\App\\src\\components\\user.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var User = function (_Component) {
  _inherits(User, _Component);

  function User(props, context) {
    _classCallCheck(this, User);

    var _this = _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).call(this, props, context));

    _this.state = {
      accountId: '',
      meal: '',
      quantity: '',
      editMode: false,
      user: [],
      userMeal: [],
      singleMeal: []
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.submit = _this.submit.bind(_this);
    _this.edit = _this.edit.bind(_this);
    _this.delete = _this.delete.bind(_this);
    return _this;
  }

  _createClass(User, [{
    key: 'componentDidMount',
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
    key: 'getByAccountId',
    value: function getByAccountId() {
      var accountId = this.state.accountId;
      fetch("/api/user/" + accountId, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
      }).then(function (resp) {
        return resp.json();
      }).then(function (data) {
        var _this3 = this;

        var item = [data.Item];
        this.setState({
          user: item
        }, function () {
          return _this3.getUserMeal();
        });
      }.bind(this));
    }
  }, {
    key: 'getUserMeal',
    value: function getUserMeal() {
      var accountId = this.state.accountId;
      fetch("/api/user/todaymeal/" + accountId, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
      }).then(function (resp) {
        return resp.json();
      }).then(function (data) {
        var _this4 = this;

        var item = data.Items;
        for (var i = 0; i < item.length; i++) {
          item[i].CreatedDateOnly = item[i].CreatedDate.split("T")[0];
        }
        this.setState({
          userMeal: item
        }, function () {
          return console.log(_this4.state.userMeal);
        });
      }.bind(this));
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      var target = event.target;
      var value = target.value;
      var name = target.name;
      this.setState(_defineProperty({}, name, value));
    }
  }, {
    key: 'edit',
    value: function edit(id) {
      fetch("/api/user/singlemeal/" + id, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
      }).then(function (resp) {
        return resp.json();
      }).then(function (data) {
        var item = data.Item;
        console.log(data);
        this.setState({
          meal: item.Meal,
          quantity: item.Quantity,
          editMode: true
        });
      }.bind(this));
    }
  }, {
    key: 'delete',
    value: function _delete(id) {
      console.log(id + "Delete Button Clicked");
    }
  }, {
    key: 'submit',
    value: function submit(event) {
      event.preventDefault();
      console.log(this.state.accountId);
      fetch("/api/user/meal", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          AccountId: this.state.accountId,
          Meal: this.state.meal,
          Quantity: this.state.quantity
        }),
        credentials: 'include'
      }).then(function (response) {
        var _this5 = this;

        this.setState({
          meal: '',
          quantity: ''
        }, function () {
          return _this5.getUserMeal();
        });
      }.bind(this));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'row', __source: {
              fileName: _jsxFileName,
              lineNumber: 124
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'col-md-4 m-t-sm m-l-md', __source: {
                fileName: _jsxFileName,
                lineNumber: 125
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'card askForm', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 126
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'card-img-top img-responsive m-b-sm', src: __WEBPACK_IMPORTED_MODULE_3__img_registerpage_png___default.a, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 127
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'card-body', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'form',
                  { className: 'form-group', onSubmit: this.submit, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 129
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 130
                      },
                      __self: this
                    },
                    'What have you eat today?'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', onChange: this.handleChange, className: 'form-control m-b-sm', name: 'meal', value: this.state.meal, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 131
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 132
                      },
                      __self: this
                    },
                    'Quantity'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'number', onChange: this.handleChange, className: 'form-control m-b-sm', name: 'quantity', value: this.state.quantity, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 133
                    },
                    __self: this
                  }),
                  this.state.editMode === true ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 135
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'button',
                      { type: 'button', className: 'btn btn-secondary btn-lg btn-block m-t-md', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 136
                        },
                        __self: this
                      },
                      'Edit'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'button',
                      { type: 'button', className: 'btn btn-primary btn-lg btn-block m-t-sm', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 137
                        },
                        __self: this
                      },
                      'Delete'
                    )
                  ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'button',
                    { type: 'submit', className: 'btn btn-primary btn-lg btn-block m-t-md', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 140
                      },
                      __self: this
                    },
                    'Submit'
                  )
                )
              )
            )
          ),
          this.state.user.map(function (user) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-md-4 m-t-sm', key: user.Id, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 147
                },
                __self: _this6
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'card mealList', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 148
                  },
                  __self: _this6
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'card-header bg-dark text-white', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 149
                    },
                    __self: _this6
                  },
                  'Today, ',
                  user.FirstName,
                  ' ',
                  user.LastName,
                  ' Ate ...'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'card-body', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 152
                    },
                    __self: _this6
                  },
                  _this6.state.userMeal.map(function (userMeal) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { key: userMeal.Id, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 154
                        },
                        __self: _this6
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'row', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 155
                          },
                          __self: _this6
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'button',
                          {
                            type: 'button',
                            onClick: function onClick() {
                              return _this6.edit(userMeal.Id);
                            },
                            className: 'btn btn-outline-secondary m-l-sm m-b-xs',
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 156
                            },
                            __self: _this6
                          },
                          userMeal.Meal,
                          ' x ',
                          userMeal.Quantity
                        )
                      )
                    );
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'button',
                    { type: 'button', className: 'btn btn-primary m-t-md', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 164
                      },
                      __self: _this6
                    },
                    'Calculate'
                  )
                )
              )
            );
          })
        )
      );
    }
  }]);

  return User;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (User);

/***/ })

})
//# sourceMappingURL=0.8546c24cc6d14ed201c5.hot-update.js.map