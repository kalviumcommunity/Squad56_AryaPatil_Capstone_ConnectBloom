import React from "react";
import ExploreImage from '../assets/backg.png';
import './homepage.css';
import Navbar from '../components/nav.jsx'

function Homepage() {

  return (
  <div className="Main">
     <Navbar/>
    <img id="exploreimg" src={ExploreImage} alt="explore" />
    <div className="circle">
          
        <img id="img1" src="https://png.pngtree.com/png-clipart/20220206/original/pngtree-indoor-potted-plant-vector-illustration-png-image_7262842.png" alt="plant1" /> 
        <img id="img1" src="https://st.depositphotos.com/7844994/54493/v/450/depositphotos_544933206-stock-illustration-flower-pot-naive-style-illustration.jpg" alt="plant2" />
        <img id="img3" src="https://png.pngtree.com/png-clipart/20210404/original/pngtree-indoor-air-purification-plant-png-image_6193564.png" alt="palnt3" />
        <img id="img1" src="https://banner2.cleanpng.com/20230824/wep/transparent-hanging-plant-with-pot-planter-hanging-planter-cli-64e80b9a7a0303.1537945916929289224998.jpg" alt="plant4" /> 
        <img id="img1" src="https://comfortplants.com/cdn/shop/products/1-Spider-Bonnie-4_512x512.jpg?v=1649652919" alt="plant5" />
        <img id="img1" src="https://static3.bigstockphoto.com/5/9/3/large2/395796422.jpg" alt="plant6" />
        <img id="img1" src="https://en.pimg.jp/062/100/053/1/62100053.jpg" alt="plant7" />
        <img id="img1" src="https://static.vecteezy.com/system/resources/previews/000/184/638/non_2x/succulents-hand-drawn-style-vector.jpg" alt="plant8" />
     </div>
        
  </div>
   
  
  );
}

export default Homepage;
