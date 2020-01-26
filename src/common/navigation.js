import React from 'react';
import { NavLink } from 'react-router-dom';

const NavComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item"><NavLink className="nav-link" exact={true} to='/home'>Home</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" exact={true} to='/about'>About Us</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" exact={true} to='/contact'>Contact Us</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavComponent;