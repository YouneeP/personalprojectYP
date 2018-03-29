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
      recipeView: false,
      totalNutrition: [],
      bestNeed: '',
      energy: 0,
      protein: 0,
      fat: 0,
      fattyAcid: 0,
      carbohydrates: 0,
      sugars: 0,
      sodium: 0,
      fibre: 0
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
    _this.resetNutrient = _this.resetNutrient.bind(_this);
    _this.getRecipe = _this.getRecipe.bind(_this);
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
        if (userMeal[i].Quantity === 1) {
          foodArray.push(userMeal[i].Meal);
        } else if (userMeal[i].Quantity > 1) {
          var j = userMeal[i].Quantity;
          for (var x = 0; x < j; x++) {
            foodArray.push(userMeal[i].Meal);
          }
        }
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
    key: 'getRecipe',
    value: function getRecipe() {
      var _this11 = this;

      var proteinScore = this.state.protein / 50;
      var fatScore = this.state.fat / 70;
      var fattyAcidScore = this.state.fattyAcid / 24;
      var carbohydratesScore = this.state.carbohydrates / 310;
      var sugarsScore = this.state.sugars / 90;
      var sodiumScore = this.state.sodium / 2.3;
      var fibreScore = this.state.fibre / 30;
      var scoreArr = [proteinScore, fatScore, fattyAcidScore, carbohydratesScore, sugarsScore, sodiumScore, fibreScore];
      var i = scoreArr.indexOf(Math.min.apply(Math, scoreArr));
      if (i === 0) {
        console.log("You need to eat more protein");
        fetch("http://localhost:57432/api/user/recipe", {
          method: 'Post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            Url: "https://www.bbcgoodfood.com/recipes/collection/high-protein"
          })
        }).then(function (resp) {
          return resp.json().then(function (data) {
            var recipeData = data.Item;
            this.setState({
              title: recipeData.Title,
              descrption: recipeData.Description,
              link: recipeData.Url,
              recipeView: true,
              bestNeed: "Protein"
            });
          }.bind(_this11));
        });
      } else if (i === 1) {
        console.log("You need to eat more Fat");
        fetch("http://localhost:57432/api/user/recipe", {
          method: 'Post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            Url: "https://draxe.com/hub/keto-diet/keto-recipes/"
          })
        }).then(function (resp) {
          return resp.json().then(function (data) {
            var recipeData = data.Item;
            this.setState({
              title: recipeData.Title,
              descrption: recipeData.Description,
              link: recipeData.Url,
              recipeView: true,
              bestNeed: "Fat"
            });
          }.bind(_this11));
        });
      } else if (i === 2) {
        console.log("You need to eat more Fatty Acid");
        fetch("http://localhost:57432/api/user/recipe", {
          method: 'Post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            Url: "https://www.eatthismuch.com/food/browse/high-saturated-fat-recipes/?q=&type=recipe&order_by=-saturated_fats&show_nutrient=saturated_fats"
          })
        }).then(function (resp) {
          return resp.json().then(function (data) {
            var recipeData = data.Item;
            this.setState({
              title: recipeData.Title,
              descrption: recipeData.Description,
              link: recipeData.Url,
              recipeView: true,
              bestNeed: "Fatty Acid"
            });
          }.bind(_this11));
        });
      } else if (i === 3) {
        console.log("You need to eat more Carbohydrates");
        fetch("http://localhost:57432/api/user/recipe", {
          method: 'Post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            Url: "https://fitmencook.com/recipes/workout/high-carbs/"
          })
        }).then(function (resp) {
          return resp.json().then(function (data) {
            var recipeData = data.Item;
            this.setState({
              title: recipeData.Title,
              descrption: recipeData.Description,
              link: recipeData.Url,
              recipeView: true,
              bestNeed: "Carbohydrates"
            });
          }.bind(_this11));
        });
      } else if (i === 4) {
        console.log("You need to eat more Sugar");
        fetch("http://localhost:57432/api/user/recipe", {
          method: 'Post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            Url: "https://www.eatthismuch.com/food/browse/high-sugar-recipes/?q=&type=recipe&order_by=-sugar&show_nutrient=sugar"
          })
        }).then(function (resp) {
          return resp.json().then(function (data) {
            var recipeData = data.Item;
            this.setState({
              title: recipeData.Title,
              descrption: recipeData.Description,
              link: recipeData.Url,
              recipeView: true,
              bestNeed: "Sugar"
            });
          }.bind(_this11));
        });
      } else if (i === 5) {
        console.log("You need to eat more Sodium");
        fetch("http://localhost:57432/api/user/recipe", {
          method: 'Post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            Url: "https://www.eatthismuch.com/food/browse/high-sodium-recipes/?q=&type=recipe&order_by=-sodium&show_nutrient=sodium"
          })
        }).then(function (resp) {
          return resp.json().then(function (data) {
            var recipeData = data.Item;
            this.setState({
              title: recipeData.Title,
              descrption: recipeData.Description,
              link: recipeData.Url,
              recipeView: true,
              bestNeed: "Sodium"
            });
          }.bind(_this11));
        });
      } else if (i === 6) {
        console.log("You need to eat more Dietary Fibre");
        fetch("http://localhost:57432/api/user/recipe", {
          method: 'Post',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            Url: "https://www.tarladalal.com/High-Fibre-Chilas-3546r"
          })
        }).then(function (resp) {
          return resp.json().then(function (data) {
            var recipeData = data.Item;
            this.setState({
              title: recipeData.Title,
              descrption: recipeData.Description,
              link: recipeData.Url,
              recipeView: true,
              bestNeed: "Dietary Fibre"
            });
          }.bind(_this11));
        });
      }
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
          //console.log("Energy:"+ aggValues[y].value +"kcal");
          var Energy = parseInt(aggValues[y].value);
        } else if (aggValues[y].nutrient_id == "203") {
          //console.log("Protein:" + aggValues[y].value+"g");
          var Protein = parseInt(aggValues[y].value);
        } else if (aggValues[y].nutrient_id == "204") {
          //console.log("Fat:" + aggValues[y].value+"g");
          var Fat = parseInt(aggValues[y].value);
        } else if (aggValues[y].nutrient_id == "606") {
          //console.log("Saturated Fatty Acids:" + aggValues[y].value+"g");
          var FattyAcid = parseInt(aggValues[y].value);
        } else if (aggValues[y].nutrient_id == "205") {
          //console.log("Carbohydrates:" + aggValues[y].value+"g");
          var Carbohydrates = parseInt(aggValues[y].value);
        } else if (aggValues[y].nutrient_id == "269") {
          //console.log("Sugars:" + aggValues[y].value + "g");
          var Sugars = parseInt(aggValues[y].value);
        } else if (aggValues[y].nutrient_id == "307") {
          //console.log("Sodium:" + aggValues[y].value + "mg");
          var Sodium = parseInt(aggValues[y].value) / 1000;
        } else if (aggValues[y].nutrient_id == "291") {
          //console.log("Dietary Fibre:" + aggValues[y].value+"g");
          var Fibre = parseInt(aggValues[y].value);
        }
      }
      this.setState({
        energy: Energy,
        protein: Protein,
        fat: Fat,
        fattyAcid: FattyAcid,
        carbohydrates: Carbohydrates,
        sugars: Sugars,
        sodium: Sodium,
        fibre: Fibre,
        resultMode: true
      });
    }
  }, {
    key: 'resetNutrient',
    value: function resetNutrient() {
      this.setState({
        nutritionArray: [],
        energy: 0,
        protein: 0,
        fat: 0,
        fattyAcid: 0,
        carbohydrates: 0,
        sugars: 0,
        sodium: 0,
        fibre: 0,
        title: '',
        descrption: '',
        link: '',
        recipeView: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this12 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 478
          },
          __self: this
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'row', __source: {
              fileName: _jsxFileName,
              lineNumber: 479
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'col-md-4 m-t-sm m-l-md', __source: {
                fileName: _jsxFileName,
                lineNumber: 480
              },
              __self: this
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'card askForm', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 481
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'card-img-top img-responsive m-b-sm', src: __WEBPACK_IMPORTED_MODULE_3__img_registerpage_png___default.a, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 482
                },
                __self: this
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'card-body', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 483
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'form',
                  { className: 'form-group', onSubmit: this.submit, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 484
                    },
                    __self: this
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 485
                      },
                      __self: this
                    },
                    'What have you eat today?'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', onChange: this.handleChange, className: 'form-control m-b-sm', name: 'meal', value: this.state.meal, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 486
                    },
                    __self: this
                  }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'label',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 487
                      },
                      __self: this
                    },
                    'Quantity'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'number', onChange: this.handleChange, className: 'form-control m-b-sm', name: 'quantity', value: this.state.quantity, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 488
                    },
                    __self: this
                  }),
                  this.state.editMode === true ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 490
                      },
                      __self: this
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'button',
                      { type: 'button', onClick: this.submitChange, className: 'btn btn-secondary btn-lg btn-block m-t-md', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 491
                        },
                        __self: this
                      },
                      'Edit'
                    )
                  ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'button',
                    { type: 'submit', className: 'btn btn-primary btn-lg btn-block m-t-md', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 494
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
                  lineNumber: 500
                },
                __self: _this12
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'card mealList', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 501
                  },
                  __self: _this12
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'card-header bg-dark text-white', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 502
                    },
                    __self: _this12
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
                      lineNumber: 505
                    },
                    __self: _this12
                  },
                  _this12.state.userMeal.map(function (userMeal) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { key: userMeal.Id, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 507
                        },
                        __self: _this12
                      },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'row', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 508
                          },
                          __self: _this12
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'button',
                          {
                            type: 'button',
                            onClick: function onClick() {
                              return _this12.edit(userMeal.Id);
                            },
                            className: 'btn btn-outline-secondary m-l-sm m-b-xs',
                            __source: {
                              fileName: _jsxFileName,
                              lineNumber: 509
                            },
                            __self: _this12
                          },
                          userMeal.Meal,
                          ' x ',
                          userMeal.Quantity
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fa fa-close m-l-xs', onClick: function onClick() {
                            return _this12.delete(userMeal.Id);
                          }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 514
                          },
                          __self: _this12
                        })
                      )
                    );
                  }),
                  _this12.state.energy === 0 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 519
                      },
                      __self: _this12
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'button',
                      { type: 'button', className: 'btn btn-primary m-t-md', onClick: _this12.getCalculate, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 520
                        },
                        __self: _this12
                      },
                      'Calculate'
                    )
                  ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 523
                      },
                      __self: _this12
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'button',
                      { type: 'button', className: 'btn btn-primary disabled m-t-md', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 524
                        },
                        __self: _this12
                      },
                      'Please Reset Your Result'
                    )
                  )
                )
              ),
              _this12.state.resultMode === true ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'result m-t-sm', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 531
                  },
                  __self: _this12
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'card', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 532
                    },
                    __self: _this12
                  },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'card-header  bg-dark text-white', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 533
                      },
                      __self: _this12
                    },
                    'You Ate ...'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'card-body', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 536
                      },
                      __self: _this12
                    },
                    'Energy: ',
                    _this12.state.energy,
                    ' / 2000 kcal',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 537
                      },
                      __self: _this12
                    }),
                    'Protein: ',
                    _this12.state.protein,
                    ' / 50 g',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 538
                      },
                      __self: _this12
                    }),
                    'Fat: ',
                    _this12.state.fat,
                    ' / 70 g',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 539
                      },
                      __self: _this12
                    }),
                    'Saturated Fatty Acids: ',
                    _this12.state.fattyAcid,
                    ' / 24g ',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 540
                      },
                      __self: _this12
                    }),
                    'Carbohydrates: ',
                    _this12.state.carbohydrates,
                    ' / 310 g',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 541
                      },
                      __self: _this12
                    }),
                    'Sugars: ',
                    _this12.state.sugars,
                    ' / 90 g',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 542
                      },
                      __self: _this12
                    }),
                    'Sodium: ',
                    _this12.state.sodium,
                    ' / 2.3 g',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 543
                      },
                      __self: _this12
                    }),
                    'Dietary Fibre: ',
                    _this12.state.fibre,
                    ' /30g',
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 544
                      },
                      __self: _this12
                    }),
                    _this12.state.energy === 0 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'button',
                      { type: 'button', className: 'btn btn-primary m-t-md disabled', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 547
                        },
                        __self: _this12
                      },
                      'Let\'s Get Recipes'
                    ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'button',
                      { type: 'button', className: 'btn btn-primary m-t-md', onClick: _this12.getRecipe, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 548
                        },
                        __self: _this12
                      },
                      'Let\'s Get Recipes'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'button',
                      { type: 'button', className: 'btn btn-primary m-t-md m-l-sm', onClick: _this12.resetNutrient, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 551
                        },
                        __self: _this12
                      },
                      'Reset'
                    )
                  )
                )
              ) : null
            );
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'col-md-3 m-t-sm', __source: {
                fileName: _jsxFileName,
                lineNumber: 558
              },
              __self: this
            },
            this.state.recipeView ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'card recipeList', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 560
                },
                __self: this
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'card-header bg-dark text-white', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 561
                  },
                  __self: this
                },
                'You Need to Eat More ',
                this.state.bestNeed
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'card-body', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 564
                  },
                  __self: this
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h4',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 565
                    },
                    __self: this
                  },
                  'Let\'s Try ...'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h5',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 566
                    },
                    __self: this
                  },
                  this.state.title
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 566
                  },
                  __self: this
                }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'h5',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 567
                    },
                    __self: this
                  },
                  this.state.descrption
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { href: this.state.link, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 568
                    },
                    __self: this
                  },
                  this.state.link
                )
              )
            ) : null
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'row', __source: {
              fileName: _jsxFileName,
              lineNumber: 574
            },
            __self: this
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'button',
            { type: 'button', onClick: this.imageUpload, __source: {
                fileName: _jsxFileName,
                lineNumber: 575
              },
              __self: this
            },
            'Image Upload'
          )
        )
      );
    }
  }]);

  return User;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (User);

/***/ })

})
//# sourceMappingURL=0.30db18c9f33f58df4bff.hot-update.js.map