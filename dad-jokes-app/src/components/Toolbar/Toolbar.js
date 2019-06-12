import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';



const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <DrawerToggleButton />
              </div>
            <div className="toolbar_logo"><a href="/">Dad Jokes</a> </div>
            <div className="spacer" />
            <div className="toolbar_navigation-items"> 
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Search</a></li>
                    <li><a href="/">Sign up!</a></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Toolbar; 