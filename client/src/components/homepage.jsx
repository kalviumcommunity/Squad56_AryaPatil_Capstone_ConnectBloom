import React, { useEffect,useState } from "react";
import ExploreImage from '../assets/backg.png';
import './homepage.css';
import Navbar from './Nav.jsx'
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios'

function Homepage() {
  
   const navigate = useNavigate();  // Initialize the navigate function
   const selectedLocation = localStorage.getItem('selectedLocation') || 'No location selected';
   const [categories, setCategories] = useState([]); // State variable to store categories

   
     useEffect(() => {
      axios.get(`http://localhost:3000/api/categories`)
        .then((res) => {
          setCategories(res.data);
        })
        .catch((error) => {
          console.error('Error fetching categories:', error);
        });
    }, []);  

      // Function to handle redirection to the Sale page
  const handleSaleClick = () => {
    navigate('/sale');
  };
 
  return (
  <div className="Main">
     <Navbar/>
    <img id="exploreimg" src={ExploreImage} alt="explore" />
    <div className="circle">
          
        <img id="img1" src="https://png.pngtree.com/png-clipart/20220206/original/pngtree-indoor-potted-plant-vector-illustration-png-image_7262842.png" alt="indoorplant" /> 
        <img id="img1" src="https://st.depositphotos.com/7844994/54493/v/450/depositphotos_544933206-stock-illustration-flower-pot-naive-style-illustration.jpg" alt="flowerplant" />
        <img id="img3" src="https://png.pngtree.com/png-clipart/20210404/original/pngtree-indoor-air-purification-plant-png-image_6193564.png" alt="airpurifyingpalnt" />
        <img id="img1" src="https://banner2.cleanpng.com/20230824/wep/transparent-hanging-plant-with-pot-planter-hanging-planter-cli-64e80b9a7a0303.1537945916929289224998.jpg" alt="hangingplant" /> 
        <img id="img1" src="https://comfortplants.com/cdn/shop/products/1-Spider-Bonnie-4_512x512.jpg?v=1649652919" alt="petfriendlyplant" />
        <img id="img1" src="https://static3.bigstockphoto.com/5/9/3/large2/395796422.jpg" alt="medicinalplant" />
        <img id="img1" src="https://en.pimg.jp/062/100/053/1/62100053.jpg" alt="fruitplant" />
        <img id="img1" src="https://static.vecteezy.com/system/resources/previews/000/184/638/non_2x/succulents-hand-drawn-style-vector.jpg" alt="succulentplant" />
     </div>
     <h2>Location: {selectedLocation}</h2> 
     <ul className="imagesgird">
        {categories.map((category, index) => ( 
          <ul  className="imagecard">
          <img className="apiimgs" src={category.image} alt=""  />
          <li key={index}>{category.name}</li>  
          <li key={index}>{category.benefits}</li>  
          <li key={index}>{category.category}</li>  
          <li key={index}>{category.location}</li>  
          </ul>

        ))}
      </ul>
    </div>
        

   
  
  );
}

export default Homepage;
