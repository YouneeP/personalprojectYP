import React, { Component } from 'react';
import { Button, Grid, Form, FormGroup, FormControl, ControlLabel, Row, Col, HelpBlock, bsStyle } from 'react-bootstrap';
import registerform from '../img/registerpage.png';

class Registration extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            firstName: '',
            age:'',
            lastName:'',
            email:'',
            password:'',
            passwordConfirmed:''
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
        if(this.state.password===this.state.passwordConfirmed){
            fetch("/api/user",{
                method: 'POST',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({
                    firstName:this.state.firstName,
                    lastName:this.state.lastName,
                    age:this.state.age,
                    email:this.state.email,
                    password:this.state.password
                }),
                credentials: 'include'
            }).then(function(response){
                if(response.status===200){
                    alert("Registration Success!");
                    window.location.href ="http://localhost:57432/signin"
                }
            })   
        } 
        else{
            alert("Please confirm your password");
        }
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
                                        <label>First Name *</label>
                                            <input type="text" onChange={this.handleChange} className="form-control m-b-sm" name="firstName" value={this.state.firstName} />
                                        <label>Last Name *</label>
                                            <input type="text" onChange={this.handleChange} className="form-control m-b-sm" name="lastName" value={this.state.lastName} />
                                        <label>Age *</label>
                                            <input type="text" onChange={this.handleChange} className="form-control m-b-sm" name="age" value={this.state.age} />
                                        <label>E-mail *</label>
                                            <input type="email" onChange={this.handleChange} className="form-control m-b-sm" name="email" value={this.state.email} />
                                        <label>Password *</label>
                                            <input type="password" onChange={this.handleChange} className="form-control m-b-sm" name="password" value={this.state.password} />
                                        <label>Confirm your Password *</label>
                                            <input type="password" onChange={this.handleChange} className="form-control m-b-sm" name="passwordConfirmed" value={this.state.passwordConfirmed} />
                                        <button type="submit" className="btn btn-primary btn-lg btn-block m-t-md">Submit</button>
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

export default Registration ;
