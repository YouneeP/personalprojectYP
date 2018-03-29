import React, { Component } from 'react';
import $ from 'jquery';
import { Button, Nav, Navbar, NavDropdown, MenuItem, NavItem, Grid, Row, Col} from 'react-bootstrap';
import registerform from '../img/registerpage.png';

class User extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      accountId:'',
      meal:'',
      quantity:'',
      mealId:'',
      user:[],
      userMeal:[],
      singleMeal:[],
      mealArray:[],
      nutritionArray:[],
      viewNutrient:[],
      editMode:false,
      resultMode:false,
      recipeView:false,
      totalNutrition:[],
      bestNeed:'',
      energy:0,
      protein:0,
      fat:0,
      fattyAcid:0,
      carbohydrates:0,
      sugars:0,
      sodium:0,
      fibre:0
    };
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
    this.submitChange = this.submitChange.bind(this);
    this.getCalculate = this.getCalculate.bind(this);
    this.getnbdno = this.getnbdno.bind(this);
    this.getNutrient = this.getNutrient.bind(this);
    this.getNutrientView = this.getNutrientView.bind(this);
    this.resetNutrient = this.resetNutrient.bind(this);
    this.getRecipe = this.getRecipe.bind(this);
  }

  componentDidMount(){
    let cookie = document.cookie;
    if(cookie === null){
      window.location.href = "http://localhost:57432/login"
    }
    else{
      let accountId = cookie.split("=")[1];
      this.setState({
        accountId:accountId
      },()=>this.getByAccountId());
    }
  }

  getByAccountId(){
    let accountId = this.state.accountId;
    fetch("/api/user/"+accountId,{
      method: 'GET',
      headers:{'Content-Type':'application/json'},
      credentials: 'include'
    }).then((resp)=>resp.json())
    .then(function(data){
      let item = [data.Item];
      this.setState({
        user:item
      },()=>this.getUserMeal())
    }.bind(this))   
  }

  getUserMeal(){
    let accountId = this.state.accountId;
    fetch("/api/user/todaymeal/"+accountId,{
      method: 'GET',
      headers:{'Content-Type':'application/json'},
      credentials: 'include'
    }).then((resp)=>resp.json())
    .then(function(data){
      let item = data.Items;
        for(var i=0; i<item.length; i++){
          item[i].CreatedDateOnly = item[i].CreatedDate.split("T")[0];
        }
      this.setState({
        userMeal:item
      })
    }.bind(this))   
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
        [name]: value
    });
  }

  edit(id){
    fetch("/api/user/singlemeal/"+id,{
      method: 'GET',
      headers:{'Content-Type':'application/json'},
      credentials: 'include'
    }).then((resp)=>resp.json())
    .then(function(data){
      let item =data.Item;
      this.setState({
        accountId:item.AccountId,
        meal:item.Meal,
        mealId:item.Id,
        quantity:item.Quantity,
        editMode:true
      })
    }.bind(this)) 
  }

  submitChange(){
    let Id = this.state.mealId;
    fetch("/api/user/update/"+Id,{
      method: 'PUT',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        Id: Id,
        AccountId: this.state.accountId,
        Meal:this.state.meal,
        Quantity:this.state.quantity
      }),
      credentials: 'include'
    })
    .then(function(response){
      this.setState({
        nutritionArray:[],
        meal:'',
        quantity:'',
        editMode:false
      }, ()=>this.getUserMeal())
    }.bind(this));
  }

  delete(id){
    fetch("/api/user/delete/"+id,{
      method:'delete'
    }).then(function(response){
      this.setState({
        nutritionArray:[],
        editModel:false
      }, ()=>this.getUserMeal())
    }.bind(this));
  }

  submit(event){
    event.preventDefault();
    fetch("/api/user/meal",{
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify ({
        AccountId:this.state.accountId,
        Meal:this.state.meal,
        Quantity:this.state.quantity
      }),
      credentials:'include'
    })
    .then(function(response){
      this.setState({
        nutritionArray:[],
        meal:'',
        quantity:''
      },()=>this.getUserMeal())
    }.bind(this));   
  }

  getCalculate(){
    let userMeal = this.state.userMeal;
    let foodArray=[];
    for(var i=0; i<userMeal.length; i++){
      if(userMeal[i].Quantity===1){
        foodArray.push(userMeal[i].Meal);
      }
      else if(userMeal[i].Quantity > 1){
        let j = userMeal[i].Quantity;
        for(var x=0; x<j; x++){
          foodArray.push(userMeal[i].Meal);
        }
      }
    }
    this.setState({foodArray:foodArray},()=>this.getnbdno(-1))
  }

  getnbdno(counter) {
    let array=this.state.foodArray;
    let length=array.length-1;
    counter++;
    fetch("https://api.nal.usda.gov/ndb/search/?format=json&q=" +array[counter]+"&sort=n&max=25&offset=0&api_key=iePhBf4DTI9UStixHQvpqeNZnlICZEKRITy2HpQV",{
    method: 'GET',
    headers:{'Content-Type':'application/json'}
    }).then((resp)=>resp.json())
    .then(function(data){
      if(data.list ==undefined){
        return alert("Please Check Your Input");
      }
      if(counter ===length){
        let ndbno = data.list.item[0].ndbno;
        this.getFinalNutrient(ndbno);
        return;
      }
      else{
        let ndbno = data.list.item[0].ndbno;
        this.getNutrient(ndbno);
        this.getnbdno(counter);
      }
    }.bind(this))
  }

  getNutrient(ndbno){
    fetch("https://api.nal.usda.gov/ndb/reports/?ndbno="+ndbno+"&type=b&format=json&api_key=iePhBf4DTI9UStixHQvpqeNZnlICZEKRITy2HpQV",{
      method: 'GET',
      headers:{'Content-Type':'application/json'}
    }).then((resp)=>resp.json()
    .then(function(data){
      let nutrientData = data.report.food;
      var nutritionArray = [...this.state.nutritionArray];
      nutritionArray.push(nutrientData);
      this.setState({nutritionArray:nutritionArray})
    }.bind(this)))
  }

  getFinalNutrient(ndbno){
    fetch("https://api.nal.usda.gov/ndb/reports/?ndbno="+ndbno+"&type=b&format=json&api_key=iePhBf4DTI9UStixHQvpqeNZnlICZEKRITy2HpQV",{
      method: 'GET',
      headers:{'Content-Type':'application/json'}
    }).then((resp)=>resp.json()
    .then(function(data){
      let nutrientData = data.report.food;
      var nutritionArray = [...this.state.nutritionArray];
      nutritionArray.push(nutrientData);
      this.setState({nutritionArray:nutritionArray},()=>this.getNutrientView())
    }.bind(this)))
  }

  getRecipe(){
    var proteinScore=this.state.protein/50;
    var fatScore=this.state.fat/70;
    var fattyAcidScore=this.state.fattyAcid/24;
    var carbohydratesScore=this.state.carbohydrates/310;
    var sugarsScore=this.state.sugars/90;
    var sodiumScore=this.state.sodium/2.3;
    var fibreScore=this.state.fibre/30;
    let scoreArr=[proteinScore,  fatScore, fattyAcidScore, carbohydratesScore, sugarsScore, sodiumScore,  fibreScore ];
    var i = scoreArr.indexOf(Math.min(...scoreArr));
    if(i===0){
      console.log("You need to eat more protein");
      fetch("http://localhost:57432/api/user/recipe",{
        method: 'Post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify ({
          Url:"https://www.bbcgoodfood.com/recipes/collection/high-protein"
        })
        }).then((resp)=>resp.json()
        .then(function(data){
        let recipeData=data.Item;
        this.setState({
          title:recipeData.Title,
          descrption:recipeData.Description,
          link:recipeData.Url,
          recipeView:true,
          bestNeed:"Protein"
        })
      }.bind(this)))
    }
    else if(i===1){
      console.log("You need to eat more Fat");
      fetch("http://localhost:57432/api/user/recipe",{
        method: 'Post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify ({
          Url:"https://draxe.com/hub/keto-diet/keto-recipes/"
        })
        }).then((resp)=>resp.json()
        .then(function(data){
        let recipeData=data.Item;
        this.setState({
          title:recipeData.Title,
          descrption:recipeData.Description,
          link:recipeData.Url,
          recipeView:true,
          bestNeed:"Fat"
        })
      }.bind(this)))
    }
    else if(i===2){
      console.log("You need to eat more Fatty Acid");
      fetch("http://localhost:57432/api/user/recipe",{
        method: 'Post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify ({
          Url:"https://www.eatthismuch.com/food/browse/high-saturated-fat-recipes/?q=&type=recipe&order_by=-saturated_fats&show_nutrient=saturated_fats"
        })
        }).then((resp)=>resp.json()
        .then(function(data){
        let recipeData=data.Item;
        this.setState({
          title:recipeData.Title,
          descrption:recipeData.Description,
          link:recipeData.Url,
          recipeView:true,
        bestNeed:"Fatty Acid"
        })
      }.bind(this)))
    }
    else if(i===3){
      console.log("You need to eat more Carbohydrates");
      fetch("http://localhost:57432/api/user/recipe",{
        method: 'Post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify ({
          Url:"https://fitmencook.com/recipes/workout/high-carbs/"
        })
        }).then((resp)=>resp.json()
        .then(function(data){
        let recipeData=data.Item;
        this.setState({
          title:recipeData.Title,
          descrption:recipeData.Description,
          link:recipeData.Url,
          recipeView:true,
          bestNeed:"Carbohydrates"
        })
      }.bind(this)))
    }
    else if(i===4){
      console.log("You need to eat more Sugar");
      fetch("http://localhost:57432/api/user/recipe",{
        method: 'Post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify ({
          Url:"https://www.eatthismuch.com/food/browse/high-sugar-recipes/?q=&type=recipe&order_by=-sugar&show_nutrient=sugar"
        })
        }).then((resp)=>resp.json()
        .then(function(data){
        let recipeData=data.Item;
        this.setState({
          title:recipeData.Title,
          descrption:recipeData.Description,
          link:recipeData.Url,
          recipeView:true,
        bestNeed:"Sugar"
        })
      }.bind(this)))
    }
    else if(i===5){
      console.log("You need to eat more Sodium");
      fetch("http://localhost:57432/api/user/recipe",{
      method: 'Post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify ({
        Url:"https://www.eatthismuch.com/food/browse/high-sodium-recipes/?q=&type=recipe&order_by=-sodium&show_nutrient=sodium"
      })
      }).then((resp)=>resp.json()
      .then(function(data){
      let recipeData=data.Item;
      this.setState({
        title:recipeData.Title,
        descrption:recipeData.Description,
        link:recipeData.Url,
        recipeView:true,
        bestNeed:"Sodium"
      })
    }.bind(this)))
    }
    else if(i===6){
      console.log("You need to eat more Dietary Fibre");
      fetch("http://localhost:57432/api/user/recipe",{
      method: 'Post',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify ({
        Url:"https://www.tarladalal.com/High-Fibre-Chilas-3546r"
      })
      }).then((resp)=>resp.json()
      .then(function(data){
      let recipeData=data.Item;
      this.setState({
        title:recipeData.Title,
        descrption:recipeData.Description,
        link:recipeData.Url,
        recipeView:true,
        bestNeed:"Dietary Fibre"
      })
    }.bind(this)))
    }

  }

  getNutrientView(){
    let nutArr = this.state.nutritionArray;
    let aggValues=[];
    for(var i=0; i<nutArr.length; i++){
      for(var j=0; j<nutArr[i].nutrients.length; j++){
        var singleVal = nutArr[i].nutrients[j];
        var oldVal = aggValues.find((e) => e.nutrient_id ==singleVal.nutrient_id);
        if(oldVal){
          oldVal.value =parseInt(oldVal.value) +parseInt(singleVal.value);
        }
        else{
          aggValues.push(singleVal);
        }
      }
    }
    for(var y=0; y<aggValues.length; y++){
      if(aggValues[y].nutrient_id=="208"){
       //console.log("Energy:"+ aggValues[y].value +"kcal");
        var Energy = parseInt(aggValues[y].value);
      }
      else if(aggValues[y].nutrient_id=="203"){
        //console.log("Protein:" + aggValues[y].value+"g");
        var Protein = parseInt(aggValues[y].value);
      }
      else if(aggValues[y].nutrient_id=="204"){
        //console.log("Fat:" + aggValues[y].value+"g");
        var Fat = parseInt(aggValues[y].value);
      }
      else if(aggValues[y].nutrient_id=="606"){
        //console.log("Saturated Fatty Acids:" + aggValues[y].value+"g");
        var FattyAcid = parseInt(aggValues[y].value);
      }
      else if(aggValues[y].nutrient_id=="205"){
        //console.log("Carbohydrates:" + aggValues[y].value+"g");
        var Carbohydrates = parseInt(aggValues[y].value);
      }
      else if(aggValues[y].nutrient_id=="269"){
        //console.log("Sugars:" + aggValues[y].value + "g");
        var Sugars = parseInt(aggValues[y].value);
      }
      else if(aggValues[y].nutrient_id=="307"){
        //console.log("Sodium:" + aggValues[y].value + "mg");
        var Sodium = (parseInt(aggValues[y].value))/1000;       
      }
      else if(aggValues[y].nutrient_id=="291"){
        //console.log("Dietary Fibre:" + aggValues[y].value+"g");
        var Fibre = parseInt(aggValues[y].value);
      }
    }
    this.setState({
      energy:Energy,
      protein:Protein,
      fat:Fat,
      fattyAcid:FattyAcid,
      carbohydrates:Carbohydrates,
      sugars:Sugars,
      sodium:Sodium,
      fibre:Fibre,
      resultMode:true
    })
  }

  resetNutrient(){
    this.setState({
      nutritionArray:[],
      energy:0,
      protein:0,
      fat:0,
      fattyAcid:0,
      carbohydrates:0,
      sugars:0,
      sodium:0,
      fibre:0,
      title:'',
      descrption:'',
      link:'',
      recipeView:false
    });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-4 m-t-sm m-l-md" >
            <div className="card askForm">
              <img className="card-img-top img-responsive m-b-sm" src={registerform} />
              <div className="card-body">
                <form className="form-group" onSubmit={this.submit}> 
                  <label>What have you eat today? *</label>
                    <input type="text" onChange={this.handleChange} className="form-control m-b-sm" name="meal" value={this.state.meal} />
                  <label>Quantity *</label>
                    <input type="number" onChange={this.handleChange} className="form-control m-b-sm" name="quantity" value={this.state.quantity} />
                  {this.state.editMode === true ? 
                  <div>
                    <button type="button" onClick={this.submitChange} className="btn btn-secondary btn-lg btn-block m-t-md">Edit</button>
                  </div>
                  : 
                  <button type="submit" className="btn btn-primary btn-lg btn-block m-t-md">Submit</button>}
                </form>
              </div>
            </div>
          </div>
          {this.state.user.map( user =>
            <div className="col-md-4 m-t-sm" key={user.Id}>
              <div className="card mealList">
                <div className="card-header bg-dark text-white">
                  Today, {user.FirstName} {user.LastName} Ate ...
                </div>
                <div className="card-body">
                  {this.state.userMeal.map (userMeal =>
                    <div key={userMeal.Id}>
                      <div className="row">
                        <button 
                          type="button" 
                          onClick={()=>this.edit(userMeal.Id)} 
                          className="btn btn-outline-secondary m-l-sm m-b-xs"
                        >{userMeal.Meal} x {userMeal.Quantity}</button>
                        <i className="fa fa-close m-l-xs" onClick={ ()=>this.delete(userMeal.Id)} />
                      </div>
                    </div>
                  )}
                  {this.state.energy === 0 ?
                    <div>
                      <button type="button" className="btn btn-primary m-t-md" onClick={this.getCalculate}>Calculate</button>
                    </div>
                    :
                    <div>
                      <button type="button" className="btn btn-primary disabled m-t-md">Please Reset Your Result</button>
                    </div>
                    }
                  
                </div>
              </div>
              {this.state.resultMode === true ? 
                <div className="result m-t-sm">
                  <div className="card">
                    <div className="card-header  bg-dark text-white">
                      You Ate ...
                    </div>
                    <div className="card-body">
                      Energy: {this.state.energy} / 2000 kcal<br/>
                      Protein: {this.state.protein} / 50 g<br/>
                      Fat: {this.state.fat} / 70 g<br/>
                      Saturated Fatty Acids: {this.state.fattyAcid} / 24g <br/>
                      Carbohydrates: {this.state.carbohydrates} / 310 g<br/>
                      Sugars: {this.state.sugars} / 90 g<br/>
                      Sodium: {this.state.sodium} / 2.3 g<br/>
                      Dietary Fibre: {this.state.fibre} /30g<br/>
                      {this.state.energy === 0
                      
                       ?<button type="button" className="btn btn-primary m-t-md disabled">Let's Get Recipes</button>:
                       <button type="button" className="btn btn-primary m-t-md" onClick={this.getRecipe}>Let's Get Recipes</button>
                       }
                      
                      <button type="button" className="btn btn-primary m-t-md m-l-sm" onClick={this.resetNutrient}>Reset</button>
                    </div>
                </div>
              </div>
              : null}
            </div>
          )}
          <div className="col-md-3 m-t-sm"> 
          {this.state.recipeView ? 
            <div className="card recipeList">
              <div className="card-header bg-dark text-white">
                You Need to Eat More {this.state.bestNeed}
              </div>
              <div className="card-body">
                <h4>Let's Try ...</h4>
                <h5>{this.state.title}</h5><br/>
                <h5>{this.state.descrption}</h5>
                <a href={this.state.link}>{this.state.link}</a>
              </div>
            </div>
          : null }
          </div>
        </div>
      </div>
    );
  }
}

export default User;