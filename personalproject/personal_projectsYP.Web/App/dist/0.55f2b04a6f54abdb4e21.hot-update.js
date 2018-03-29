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
            lineNumber: 17
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["BrowserRouter"],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'App-Navbar', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'nav',
                { className: 'navbar navbar-expand-sm bg-dark navbar-dark', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'ul',
                  { className: 'navbar-nav', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 22
                    },
                    __self: this
                  },
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
                      { to: '/home', className: 'nav-link', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 23
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
                        lineNumber: 24
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Link"],
                      { to: '/registration', className: 'nav-link', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 24
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
                        lineNumber: 25
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Link"],
                      { to: '/signin', className: 'nav-link', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 25
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
                        lineNumber: 26
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      __WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Link"],
                      { to: '/user', className: 'nav-link', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 26
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
                lineNumber: 30
              },
              __self: this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Route"], { path: '/registration', component: __WEBPACK_IMPORTED_MODULE_8__components_registration__["a" /* default */], __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              },
              __self: this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Route"], { path: '/user', component: __WEBPACK_IMPORTED_MODULE_7__components_user__["a" /* default */], __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              },
              __self: this
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react_router_dom__["Route"], { path: '/signin', component: __WEBPACK_IMPORTED_MODULE_9__components_login__["a" /* default */], __source: {
                fileName: _jsxFileName,
                lineNumber: 33
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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
      mealId: '',
      user: [],
      userMeal: [],
      singleMeal: [],
      mealArray: [],
      nutritionArray: [],
      viewNutrient: [],
      editMode: false,
      resultMode: false,
      totalNutrition: []
    };
    _this.handleChange = _this.handleChange.bind(_this);
    _this.submit = _this.submit.bind(_this);
    _this.edit = _this.edit.bind(_this);
    _this.delete = _this.delete.bind(_this);
    _this.submitChange = _this.submitChange.bind(_this);
    _this.getCalculate = _this.getCalculate.bind(_this);
    _this.getnbdno = _this.getnbdno.bind(_this);
    _this.getNutrient = _this.getNutrient.bind(_this);
    _this.getNutrientView = _this.getNutrientView.bind(_this);
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
        var item = data.Items;
        for (var i = 0; i < item.length; i++) {
          item[i].CreatedDateOnly = item[i].CreatedDate.split("T")[0];
        }
        this.setState({
          userMeal: item
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
        this.setState({
          accountId: item.AccountId,
          meal: item.Meal,
          mealId: item.Id,
          quantity: item.Quantity,
          editMode: true
        });
      }.bind(this));
    }
  }, {
    key: 'submitChange',
    value: function submitChange() {
      var Id = this.state.mealId;
      fetch("/api/user/update/" + Id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          Id: Id,
          AccountId: this.state.accountId,
          Meal: this.state.meal,
          Quantity: this.state.quantity
        }),
        credentials: 'include'
      }).then(function (response) {
        var _this4 = this;

        this.setState({
          nutritionArray: [],
          meal: '',
          quantity: '',
          editMode: false
        }, function () {
          return _this4.getUserMeal();
        });
      }.bind(this));
    }
  }, {
    key: 'delete',
    value: function _delete(id) {
      fetch("/api/user/delete/" + id, {
        method: 'delete'
      }).then(function (response) {
        var _this5 = this;

        this.setState({
          nutritionArray: [],
          editModel: false
        }, function () {
          return _this5.getUserMeal();
        });
      }.bind(this));
    }
  }, {
    key: 'submit',
    value: function submit(event) {
      event.preventDefault();
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
        var _this6 = this;

        this.setState({
          nutritionArray: [],
          meal: '',
          quantity: ''
        }, function () {
          return _this6.getUserMeal();
        });
      }.bind(this));
    }
  }, {
    key: 'getCalculate',
    value: function getCalculate() {
      var _this7 = this;

      var userMeal = this.state.userMeal;
      var foodArray = [];
      for (var i = 0; i < userMeal.length; i++) {
        foodArray.push(userMeal[i].Meal);
      }
      this.setState({ foodArray: foodArray }, function () {
        return _this7.getnbdno(-1);
      });
    }
  }, {
    key: 'getnbdno',
    value: function getnbdno(counter) {
      var array = this.state.foodArray;
      var length = array.length - 1;
      counter++;
      fetch("https://api.nal.usda.gov/ndb/search/?format=json&q=" + array[counter] + "&sort=n&max=25&offset=0&api_key=iePhBf4DTI9UStixHQvpqeNZnlICZEKRITy2HpQV", {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }).then(function (resp) {
        return resp.json();
      }).then(function (data) {
        if (data.list == undefined) {
          return alert("Please Check Your Input");
        }
        if (counter === length) {
          var ndbno = data.list.item[0].ndbno;
          this.getFinalNutrient(ndbno);
          return;
        } else {
          var _ndbno = data.list.item[0].ndbno;
          this.getNutrient(_ndbno);
          this.getnbdno(counter);
        }
      }.bind(this));
    }
  }, {
    key: 'getNutrient',
    value: function getNutrient(ndbno) {
      var _this8 = this;

      fetch("https://api.nal.usda.gov/ndb/reports/?ndbno=" + ndbno + "&type=b&format=json&api_key=iePhBf4DTI9UStixHQvpqeNZnlICZEKRITy2HpQV", {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }).then(function (resp) {
        return resp.json().then(function (data) {
          var nutrientData = data.report.food;
          var nutritionArray = [].concat(_toConsumableArray(this.state.nutritionArray));
          nutritionArray.push(nutrientData);
          this.setState({ nutritionArray: nutritionArray });
        }.bind(_this8));
      });
    }
  }, {
    key: 'getFinalNutrient',
    value: function getFinalNutrient(ndbno) {
      var _this10 = this;

      fetch("https://api.nal.usda.gov/ndb/reports/?ndbno=" + ndbno + "&type=b&format=json&api_key=iePhBf4DTI9UStixHQvpqeNZnlICZEKRITy2HpQV", {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      }).then(function (resp) {
        return resp.json().then(function (data) {
          var _this9 = this;

          var nutrientData = data.report.food;
          var nutritionArray = [].concat(_toConsumableArray(this.state.nutritionArray));
          nutritionArray.push(nutrientData);
          this.setState({ nutritionArray: nutritionArray }, function () {
            return _this9.getNutrientView();
          });
        }.bind(_this10));
      });
    }
  }, {
    key: 'getNutrientView',
    value: function getNutrientView() {
      var nutArr = this.state.nutritionArray;
      var aggValues = [];
      for (var i = 0; i < nutArr.length; i++) {
        for (var j = 0; j < nutArr[i].nutrients.length; j++) {
          var singleVal = nutArr[i].nutrients[j];
          var oldVal = aggValues.find(function (e) {
            return e.nutrient_id == singleVal.nutrient_id;
          });
          if (oldVal) {
            oldVal.value = parseInt(oldVal.value) + parseInt(singleVal.value);
          } else {
            aggValues.push(singleVal);
          }
        }
      }
      for (var y = 0; y < aggValues.length; y++) {
        if (aggValues[y].nutrient_id == "208") {
          console.log("Energy:" + aggValues[y].value + "kcal");
        } else if (aggValues[y].nutrient_id == "203") {
          console.log("Protein:" + aggValues[y].value + "g");
        } else if (aggValues[y].nutrient_id == "204") {
          console.log("Fat:" + aggValues[y].value + "g");
        } else if (aggValues[y].nutrient_id == "606") {
          console.log("Saturated Fatty Acids:" + aggValues[y].value + "g");
        } else if (aggValues[y].nutrient_id == "205") {
          console.log("Carbohydrates:" + aggValues[y].value + "g");
        } else if (aggValues[y].nutrient_id == "269") {
          console.log("Sugars:" + aggValues[y].value + "g");
        } else if (aggValues[y].nutrient_id == "307") {
          console.log("Sodium:" + aggValues[y].value + "mg");
        } else if (aggValues[y].nutrient_id == "291") {
          console.log("Dietary Fibre:" + aggValues[y].value + "g");
        }
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this11 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 268
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'row', __source: {
              fileName: _jsxFileName,
              lineNumber: 269
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'col-md-4 m-t-sm m-l-md', __source: {
                fileName: _jsxFileName,
                lineNumber: 270
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'card askForm', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 271
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'card-img-top img-responsive m-b-sm', src: __WEBPACK_IMPORTED_MODULE_3__img_registerpage_png___default.a, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 272
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'card-body', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 273
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'form',
                  { className: 'form-group', onSubmit: this.submit, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 274
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 275
                      },
                      __self: this
                    },
                    'What have you eat today?'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', onChange: this.handleChange, className: 'form-control m-b-sm', name: 'meal', value: this.state.meal, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 276
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 277
                      },
                      __self: this
                    },
                    'Quantity'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'number', onChange: this.handleChange, className: 'form-control m-b-sm', name: 'quantity', value: this.state.quantity, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 278
                    },
                    __self: this
                  }),
                  this.state.editMode === true ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 280
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'button',
                      { type: 'button', onClick: this.submitChange, className: 'btn btn-secondary btn-lg btn-block m-t-md', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 281
                        },
                        __self: this
                      },
                      'Edit'
                    )
                  ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'button',
                    { type: 'submit', className: 'btn btn-primary btn-lg btn-block m-t-md', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 284
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
                  lineNumber: 291
                },
                __self: _this11
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'card mealList', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 292
                  },
                  __self: _this11
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'card-header bg-dark text-white', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 293
                    },
                    __self: _this11
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
                      lineNumber: 296
                    },
                    __self: _this11
                  },
                  _this11.state.userMeal.map(function (userMeal) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { key: userMeal.Id, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 298
                        },
                        __self: _this11
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'row', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 299
                          },
                          __self: _this11
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'button',
                          {
                            type: 'button',
                            onClick: function onClick() {
                              return _this11.edit(userMeal.Id);
                            },
                            className: 'btn btn-outline-secondary m-l-sm m-b-xs',
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 300
                            },
                            __self: _this11
                          },
                          userMeal.Meal,
                          ' x ',
                          userMeal.Quantity
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-close m-l-xs', onClick: function onClick() {
                            return _this11.delete(userMeal.Id);
                          }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 305
                          },
                          __self: _this11
                        })
                      )
                    );
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'button',
                    { type: 'button', className: 'btn btn-primary m-t-md', onClick: _this11.getCalculate, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 309
                      },
                      __self: _this11
                    },
                    'Calculate'
                  )
                )
              ),
              _this11.state.resultMode === true ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'result m-t-sm', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 313
                  },
                  __self: _this11
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'card', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 314
                    },
                    __self: _this11
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'card-header  bg-dark text-white', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 315
                      },
                      __self: _this11
                    },
                    'You Ate ...'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'card-body', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 318
                      },
                      __self: _this11
                    },
                    'Energy: ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 319
                      },
                      __self: _this11
                    }),
                    'Protein: ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 320
                      },
                      __self: _this11
                    }),
                    'Fat: ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 321
                      },
                      __self: _this11
                    }),
                    'Carbohydrates: ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 322
                      },
                      __self: _this11
                    }),
                    'Sugars: ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 323
                      },
                      __self: _this11
                    }),
                    'Sodium: ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 324
                      },
                      __self: _this11
                    })
                  )
                )
              ) : null
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
//# sourceMappingURL=0.55f2b04a6f54abdb4e21.hot-update.js.map