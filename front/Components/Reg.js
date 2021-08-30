import React, { Component } from 'react';
import axios from 'axios';
export class Reg extends Component {
    constructor(props) {
        super(props)
        this.onSubmit= this.onSubmit.bind(this);
        this.state = {
            username: '',
            email: '',
            password: ''
        };
        
    }

    onChangeusername = e => {
        this.setState({ username: e.target.value  }); 
    };

    onChangeemail=e=>{
        this.setState({ email: e.target.value  });
    }

    onChangepassword=e=>{
        this.setState({ password: e.target.value  });
    }

    onSubmit = e => {
        e.preventDefault();

        const data = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        };
        axios
            .post('http://localhost:8000/Register/user', data)
            .then(res => {
                this.setState({
                    username:"" ,
                    email: '',
                    password: '',

                })
                this.props.history.push('/getuser');
                alert('user added Successfully')
            })
            .catch(err => {
                console.log("Error in Regestering  user!");
            })
    };
   
  render() {


    return (
        <div >
            <nav className="navbar navbar-dark bg-primary">
                <div className="row col-12 d-flex justify-content-center text-white">
                    <span className="h3">Registration Form</span>
                </div>
            </nav>

            <div className=" Card col-12 col-lg-4 login-card mt-2 hv-center" style={{ marginLeft: "30%", MarginRight: "30%" }}>
                <form method="POST"  onSubmit={this.onSubmit}>
                    <div className="form-group text-left">
                        <label htmlFor="username">Username</label>
                        <input type="text"
                            className="form-control"
                            id="username"
                            value={this.username}
                            onChange={this.onChangeusername}
                            placeholder="Enter username"
                        />

                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="Email1">Email address</label>
                        <input type="email"
                            className="form-control"
                            id="email"
                            value={this.email}
                            onChange={this.onChangeemail}
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                        />

                    </div>
                    <div className="form-group text-left">
                        <label htmlFor="Password1">Password</label>
                        <input type="password"
                            className="form-control"
                            id="password1"
                            value={this.password}
                            onChange={this.onChangepassword}
                            placeholder="Password"
                        />
                    </div>

                    <button
                        type="submit" 
                        className="btn btn-primary"
                    >
                    Register
                </button>&nbsp;&nbsp;
                <a href="/getuser">GetUserDetail</a>
                </form>
            </div>
        </div>
    )
}}

export default Reg
