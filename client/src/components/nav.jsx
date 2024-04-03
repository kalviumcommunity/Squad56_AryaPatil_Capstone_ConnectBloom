import React from "react";
import Logo from '../assets/newlogo.png'
import './Nav.css';


function Navbar() {
  return (
    <div className="Main">
    <nav>
        <div className="logo">
            <a href="#"><img src={Logo} alt="plants" /></a>
        </div>
        <ul className="nav-links">
         
            <li><a href="#">Home</a></li>
            <li><a href="#">Login </a> </li>
            <li><a href="#">Location</a></li>
            <li><a href="#">Cart</a></li>
        </ul>
    </nav>
</div>
  );
}
export default Navbar;
