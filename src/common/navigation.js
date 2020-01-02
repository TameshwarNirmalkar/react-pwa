import React from 'react';
import { Link } from 'react-router-dom';

const NavComponent = () => {
    return (
        <ul>
            <li><Link exact to='/'>Home</Link></li>
            <li><Link exact to='/about'>About Us</Link></li>
            <li><Link exact to='/contact'>Contact Us</Link></li>
        </ul>
    );
}

export default NavComponent;