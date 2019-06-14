import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';




const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
       
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />

              </div>
            <div className="toolbar_logo"><a href="/">DAD JOKES</a> </div>
            <div className="spacer" />
            <div className="toolbar_navigation-items"> 
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Search</a></li>
                    <li><a href="./Signin">Sign in</a></li>
                    <li><a href="./SignUp">Sign Up!</a></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Toolbar; 