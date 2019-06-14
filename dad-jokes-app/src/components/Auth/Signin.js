import React, { Component } from 'react';
import './Signin.css';



class Signin extends Component {
    state = {
        email: '',
        password: ''
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
            <h5 className="signin-text"> Sign In </h5>
            <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange}/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <button className="btn">Login</button>
              </div>
           </form>
      </div>
    );
  }
}

export default Signin;
