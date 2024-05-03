import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import Logo from '../assets/newlogo.png';

function Navbar({ selectedLocation, onLocationChange }) {
    // const token = localStorage.getItem('token');

    // const handleLogout = () => {
    //     localStorage.removeItem('token'); // Remove token on logout
    //     window.location.reload(); // Refresh page
    // };

    return (
        <div className="Main">
            <div className="navbar">
                <a href="#"><img id='logo' src={Logo} alt="Logo" /></a>
                <ul className="div1">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    {/* {token ? (
                        <li onClick={handleLogout}>Logout</li>
                    ) : ( */}
                        <Link to="/login">
                            <li>Login</li>
                        </Link>
                    {/* )} */}
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
                    <li><a href="#">Cart</a></li>
                    <Link to={"/sale"}>
                        <li>Sell+</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
