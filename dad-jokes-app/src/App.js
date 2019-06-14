import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import SignIn from './components/Auth/Signin';
import SignUp from './components/Auth/SignUp';


class App extends Component {
    state = {
      sideDrawerOpen: false
    };

  drawerToggleClickHandler = () => {
      this.setState((prevState) => {
        return {sideDrawerOpen: !prevState.sideDrawerOpen};
      });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render() {
    let backdrop; 

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }

    return (
    <BrowserRouter> 
      <div style={{height: '100%'}}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          
          <main style={{marginTop: '64px'}}>
          
          </main>
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
       </div>
       </BrowserRouter>
    );
  }
}

export default App; 