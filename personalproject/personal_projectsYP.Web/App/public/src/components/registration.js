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
    }

    render() {
        return (
            <div>
                <div className="col-md-4"/>
                <div className="col-md-4 m-t-sm">
                    <div className="card">
                        <img className="card-img-top img-responsive m-b-sm" src={registerform} />
                            <div class="card-body">
                                <form className="form-group"> 
                                    <label>First Name *</label>
                                        <input type="text" className="form-control m-b-sm" name="firstName" value={this.state.firstName} />
                                    <label>Last Name *</label>
                                        <input type="text" className="form-control m-b-sm" name="lastName" value={this.state.lastName} />
                                    <label>E-mail *</label>
                                        <input type="email" className="form-control m-b-sm" name="email" value={this.state.email} />
                                    <label>Age *</label>
                                        <input type="text" className="form-control m-b-sm" name="age" value={this.state.age} />
                                    <label>Password *</label>
                                        <input type="password" className="form-control m-b-sm" name="password" value={this.state.password} />
                                    <label>Confirm your Password *</label>
                                        <input type="password" className="form-control m-b-sm" name="passwordConfirmed" value={this.state.passwordConfirmed} />
                                    <button type="submit" className="btn btn-primary btn-lg btn-block m-t-md">Submit</button>
                                </form>
                            </div>
                    </div>
                </div>
                <div className="col-md-4"/>
            </div>
        );
    }
}

export default Registration ;
