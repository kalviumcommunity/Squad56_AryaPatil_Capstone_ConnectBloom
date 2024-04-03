import React from 'react'
import Logo from '../assets/newlogo.png' 


function sellerhome() {
  return (
    <div className="mainpage">
    <nav>
        <div className="logo2">
            <a href="#"><img src={Logo} alt="plants" /></a>
        </div>
        <ul className="nav-links">
         
            <li><a href="#">Home</a></li>
            <li><a href="#">Add </a> </li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Orders</a></li>
        </ul>
    </nav>
</div>
  )
}

export default sellerhome;