import React, { useEffect, useState } from "react";
import axios from 'axios';
import Navbar from './Nav.jsx';
import './homepage.css';
import ExploreImage from '../assets/backg.png';
import Image22 from '../assets/iamge22.png';
import Hands from '../assets/hands.png';
import { useNavigate } from 'react-router-dom'; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


   
   
   function Homepage() {
       const navigate = useNavigate();
       const [categories, setCategories] = useState([]);
       const [selectedLocation, setSelectedLocation] = useState(localStorage.getItem('selectedLocation') || 'No location selected');
   
       useEffect(() => {
        const fetchData = async () => {
            try {
                // const token = localStorage.getItem('accessToken'); // Get token from localStorage
                const response = await axios.get(`http://localhost:3000/api/categories`, {
                    // headers: {
                    //     Authorization: `Bearer ${token}` // Include token in the request headers
                    // },
                    params: { location: selectedLocation !== 'No location selected' ? selectedLocation : undefined }
                });
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchData();
    }, [selectedLocation]);
    
      // Function to handle redirection to the Sale page
  const handleSaleClick = () => {
    navigate('/sale');
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
 
  return (
  <div className="Main">
     <Navbar selectedLocation={selectedLocation} onLocationChange={setSelectedLocation} />
     <Slider {...settings}>
        <div>
          <img className="exploreimg" src={ExploreImage} alt="explore" />
        </div>
          <img className="exploreimg"src={Image22} alt="Image22" />
          <img className="exploreimg" src={Hands} alt="Hands" />
        {/* Add more images here if needed */}
      </Slider>
    <div className="circle">
          
        <img id="img1" src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1660073901-best-indoor-plants-zz-plant-1660073875.png?crop=1.00xw:0.802xh;0,0.168xh&resize=980:*" /> 
        <img id="img1" src="https://www.shutterstock.com/image-photo/young-schefflera-potted-plant-isolated-260nw-526198357.jpg" alt="flowerplant" />
        <img id="img3" src="https://5.imimg.com/data5/SELLER/Default/2020/9/MK/EB/RP/56691753/natural-pachira-plants-500x500.jpg" alt="airpurifyingpalnt" />
        <img id="img1" src="https://img.crocdn.co.uk/images/products2/pl/20/00/03/59/pl2000035901.jpg?width=440&height=440" alt="hangingplant" /> 
        <img id="img1" src="https://media.greg.app/cGxhbnQtZGItcGhvdG9zL2dvbGRfZHVzdF8uanBn?format=pjpeg&optimize=high&auto=webp&precrop=1000:1000,smart&fit=crop&width=1000&height=1000" alt="petfriendlyplant" />
        <img id="img1" src="https://www.newnessplant.com/uploads/1371f5a188a91cdfa4b570a575fda7f8.jpg" alt="medicinalplant" />
        <img id="img1" src="https://hips.hearstapps.com/hmg-prod/images/string-of-pearls-plant-royalty-free-image-1680642095.jpg?crop=0.668xw:1.00xh;0.0913xw,0&resize=1200:*" alt="fruitplant" />
        <img id="img1" src="https://m.media-amazon.com/images/I/813XSKGT-bL.jpg" alt="succulentplant" />
     </div>
     <h2>Location: {selectedLocation}</h2> 
     <ul className="imagesgird">
        {categories.map((category, index) => ( 
          <ul  className="imagecard">
          <img className="apiimgs" src={category.image} alt=""  />
          <p className="name" key={index}>{category.name}</p>  
          <p className="name" key={index}>{category.benefits}</p>  
          <p className="name" key={index}>{category.category}</p>  
          <p className="name" key={index}>{category.location}</p>  
          <p className="name" key={index}>{category.price}</p>  
          </ul>
        ))}
      </ul>
    </div>
        
   
  
  );
}
export default Homepage;
