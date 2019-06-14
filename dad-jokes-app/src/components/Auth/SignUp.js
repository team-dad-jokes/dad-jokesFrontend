import React, { Component } from 'react';
import './SignUp.css';



class Signup extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    handleChange = (e) => {
       this.setState({
        [e.target.id]: e.target.value
       })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
  render() {
    return (
      <div className="container"> 
          <form onSubmit={this.handleSubmit} className="white">
            <h5 className="signin-text"> Sign Up </h5>

            <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange}/>
        </div>

            <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange}/>
        </div>

            <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="firstName" id="firstName" onChange={this.handleChange}/>
        </div>

            <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="lastName" id="lastName" onChange={this.handleChange}/>
        </div>
            <div className="input-field">
                <button className="btn">Submit</button>
        
        </div>
        </form>
      </div>
    );
  }
}

export default Signup;
