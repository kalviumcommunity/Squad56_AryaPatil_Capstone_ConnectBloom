// Navbar.jsx
import React from 'react';
import './Nav.css';
import Logo from '../assets/newlogo.png';
import { Link } from 'react-router-dom'; 

function Navbar() {
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
          <li className="dropdown">
            <span>Location</span>
            <div className="dropdown-content">
              <select id="locationSelect">
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
