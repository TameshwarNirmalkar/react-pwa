import React from 'react';
import { Link } from 'react-router-dom';

const NavComponent = () => {
    return (
        // <ul>
        //     <li><Link exact="true" to='/'>Home</Link></li>
        //     <li><Link exact="true" to='/about'>About Us</Link></li>
        //     <li><Link exact="true" to='/contact'>Contact Us</Link></li>
        // </ul>
        <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item"><Link className="nav-link" exact="true" to='/'>Home</Link></li>
                <li className="nav-item"><Link className="nav-link" exact="true" to='/about'>About Us</Link></li>
                <li className="nav-item"><Link className="nav-link" exact="true" to='/contact'>Contact Us</Link></li>
            </ul>
        </div>
    );
}

export default NavComponent;