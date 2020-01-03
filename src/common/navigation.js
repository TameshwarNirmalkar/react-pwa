import React from 'react';
import { Link } from 'react-router-dom';

const NavComponent = () => {
    return (
        <ul>
            <li><Link exact="true" to='/'>Home</Link></li>
            <li><Link exact="true" to='/about'>About Us</Link></li>
            <li><Link exact="true" to='/contact'>Contact Us</Link></li>
        </ul>
    );
}

export default NavComponent;