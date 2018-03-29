import React, { Component } from 'react';
import { Button, Grid, Form, FormGroup, FormControl, ControlLabel, Row, Col, HelpBlock, bsStyle } from 'react-bootstrap';
import registerform from '../img/registerpage.png';

class Login extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            email:'',
            password:'',
            redirect:false
        };
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    submit(event){
        event.preventDefault();
        fetch("/api/user/login",{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                email:this.state.email,
                password:this.state.password
            }),
            credentials: 'include'
        }).then((resp)=>resp.json())
        .then(function(data){
            let item = data.Item;
            if(item.Id != 0){
                console.log(item);
                alert("Login Success");
                let accountId = item.Id;
                document.cookie = 'accountId='+accountId+'; expires=Wed, 1 Jan 2099 13:47:11 UTC; path=/';
                window.location.href = "http://localhost:57432/user";
            }
            else if(item.Id === 0){
                alert ("Please Check your Id and Password");
            }
        })   
    }

    render() {

        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4 m-t-sm">
                        <div className="card">
                            <img className="card-img-top img-responsive m-b-sm" src={registerform} />
                                <div className="card-body">
                                    <form className="form-group" onSubmit={this.submit}> 
                                        <label>E-mail *</label>
                                            <input type="email" onChange={this.handleChange} className="form-control m-b-sm" name="email" value={this.state.email} />
                                        <label>Password *</label>
                                            <input type="password" onChange={this.handleChange} className="form-control m-b-sm" name="password" value={this.state.password} />
                                        <button type="submit" className="btn btn-primary btn-lg btn-block m-t-md">Sign in</button>
                                    </form>
                                </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
            </div>
        );
    }
}

export default Login ;
