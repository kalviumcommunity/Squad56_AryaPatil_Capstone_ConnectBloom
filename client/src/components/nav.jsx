import React from 'react'
import './nav.css'
import Logo from '../assets/newlogo.png'
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <>

      <div className="Main">
        <div className="navbar">
          
            <a href="#"><img id='logo' src={Logo} alt="plants" /></a>
        
        <ul className="div1">
          <Link to="/homepage"> 
             <li>Home</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
         </Link>
           <li><a href="#">Location</a></li>
            <li><a href="#">Cart</a></li>
        </ul>

        </div>
      </div>
    </>
  );
}
export default Navbar 