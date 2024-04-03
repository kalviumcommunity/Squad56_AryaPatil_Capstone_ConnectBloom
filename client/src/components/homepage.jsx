import React from "react";
import Logo from '../assets/newlogo.png';
import ExploreImage from '../assets/next.png';
import './homepage.css';

function Homepage() {
  return (
    <div className="Main">
      <nav>
        <div className="logo">
          <a href="#"><img src={Logo} alt="plants" /></a>
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Location</a></li>
          <li><a href="#">Cart</a></li>
        </ul>
      </nav>
      <div className="explore-section">
        <img id="exploreimg" src={ExploreImage} alt="explore" />
        <div className="explore-overlay">
          <button className="explore">Explore</button>
        </div> 
        <div className="circle">

        <img id="img1" src="https://www.ugaoo.com/cdn/shop/files/DSC_3273.jpg?v=1695228127&width=550" alt="" /> 
        <img id="img1" src="https://static.wixstatic.com/media/7579c9_d05bb7dd2da6471e99495aa74fc0f145~mv2.jpg/v1/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7579c9_d05bb7dd2da6471e99495aa74fc0f145~mv2.jpg" alt="" />
        <img id="img1" src="https://hips.hearstapps.com/hmg-prod/images/potted-snake-plants-inside-a-beautiful-new-flat-or-royalty-free-image-1659026388.jpg?crop=0.668xw:1.00xh;0.0799xw,0&resize=980:*" alt="" />
        <img id="img1" src="https://media.zenfs.com/en/southern_living_806/8e554bc4b22a487677778297582e9bcd" alt="" /> 
        <img id="img1" src="https://cdn.shopify.com/s/files/1/0489/5922/6015/files/Monstera_deliciosa_480x480.jpg?v=1640258474" alt="" />
        <img id="img1" src="https://images.meesho.com/images/products/178936126/rvkxm_512.webp" alt="" />
        </div>
        
      </div>
    </div>
  );
}

export default Homepage;
