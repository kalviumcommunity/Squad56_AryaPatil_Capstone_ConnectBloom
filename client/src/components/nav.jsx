import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css';
import Logo from '../assets/newlogo.png';

function Navbar({ selectedLocation, onLocationChange }) {
   

    return (
        <div className="Main">
            <div className="navbar">
                <a href="#"><img id='logo' src={Logo} alt="Logo" /></a>
                <ul className="div1">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                   
                    <Link to="/login">
                        <li>Login</li>
                    </Link> 
                    <Link to="/signup">
                        <li>Sign Up</li>
                    </Link>
                   
                    <li className="dropdown">
                        <span>Location</span>
                        <div className="dropdown-content">
                            <select id="locationSelect" value={selectedLocation} onChange={(e) => onLocationChange(e.target.value)}>
                                <option value="">Select a location</option>
                                <option value="Pune">Pune</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Bangalore">Bangalore</option>
                            </select>
                        </div>
                    </li>
                   <li> <Link to={"/cart"}> 
                        Cart
                    </Link></li>
                
                    <Link to={"/sale"}>
                        <li>Sell+</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
