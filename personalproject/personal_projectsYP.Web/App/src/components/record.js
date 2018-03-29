import React, { Component } from 'react';

class Record extends Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            mealArr:[]
        }
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
            },()=>this.getByAccountId())
        }
    }

    getByAccountId(){
        let accountId = this.state.accountId;
        fetch("/api/user/meal/"+accountId,{
          method: 'GET',
          headers:{'Content-Type':'application/json'},
          credentials: 'include'
        }).then((resp)=>resp.json())
        .then(function(data){
            let mealArr=data.Items
            for(var i=0; i<mealArr.length; i++){
                mealArr[i].CreatedDateOnly =mealArr[i].CreatedDate.split("T")[0];
            }
            this.setState({mealArr:mealArr},()=>console.log(this.state.mealArr));
        }.bind(this))   
    }

    render() {
        return (
            <div className="col-md-12">   
                <table className="table m-t-md">
                    <thead className="thead-light">
                        <tr>
                            <th>Food</th>
                            <th>Quantity</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    {this.state.mealArr.map( meal=>
                        <tbody key={meal.CreatedDate}>
                            <tr>
                                <td>{meal.Meal}</td>
                                <td>{meal.Quantity}</td>
                                <td>{meal.CreatedDateOnly}</td>
                            </tr>
                        </tbody>
                    )}
                </table>       
            </div>
        );
    }
}

export default Record;
