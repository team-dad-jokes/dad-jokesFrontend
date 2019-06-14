import React from 'react';
import './SideDrawer.css';



const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
        if (props.show) {
            drawerClasses = 'side-drawer open'
        }


    return (
    <nav className={drawerClasses}>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Search</a></li>
            <li><a href="./Signin">Sign in</a></li>
            <li><a href="./SignUp">Sign Up!</a></li>
        </ul>
    </nav>
    );
};

export default SideDrawer;