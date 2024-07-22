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
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/categories`, {
                    params: { location: selectedLocation !== 'No location selected' ? selectedLocation : undefined }
                });
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };
        fetchData();
    }, [selectedLocation]);

    const handleAddToCart = (category) => {
        setCart([...cart, category]);
        console.log(`${category.name} added to cart`);
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
            <Navbar selectedLocation={selectedLocation} onLocationChange={setSelectedLocation} cart={cart} />
            <Slider {...settings}>
                <div>
                    <img className="exploreimg" src={ExploreImage} alt="explore" />
                </div>
                <img className="exploreimg" src={Image22} alt="Image22" />
                <img className="exploreimg" src={Hands} alt="Hands" />
            </Slider>
            <div className="circle">
                <img id="img1" src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1660073901-best-indoor-plants-zz-plant-1660073875.png?crop=1.00xw:0.802xh;0,0.168xh&resize=980:*" alt="plant1" />
                <img id="img1" src="https://www.shutterstock.com/image-photo/young-schefflera-potted-plant-isolated-260nw-526198357.jpg" alt="flowerplant" />
                <img id="img3" src="https://5.imimg.com/data5/SELLER/Default/2020/9/MK/EB/RP/56691753/natural-pachira-plants-500x500.jpg" alt="airpurifyingplant" />
                <img id="img1" src="https://img.crocdn.co.uk/images/products2/pl/20/00/03/59/pl2000035901.jpg?width=440&height=440" alt="hangingplant" />
                <img id="img1" src="https://media.greg.app/cGxhbnQtZGItcGhvdG9zL2dvbGRfZHVzdF8uanBn?format=pjpeg&optimize=high&auto=webp&precrop=1000:1000,smart&fit=crop&width=1000&height=1000" alt="petfriendlyplant" />
                <img id="img1" src="https://www.newnessplant.com/uploads/1371f5a188a91cdfa4b570a575fda7f8.jpg" alt="medicinalplant" />
                <img id="img1" src="https://hips.hearstapps.com/hmg-prod/images/string-of-pearls-plant-royalty-free-image-1680642095.jpg?crop=0.668xw:1.00xh;0.0913xw,0&resize=1200:*" alt="fruitplant" />
                <img id="img1" src="https://m.media-amazon.com/images/I/813XSKGT-bL.jpg" alt="succulentplant" />
            </div>
            <h2>Location: {selectedLocation}</h2> 
            <ul className="imagesgird">
                {categories.map((category, index) => (
                    <ul key={index} className="imagecard">
                        <img className="apiimgs" src={category.image} alt={category.name} />
                        <p className="name">{category.name}</p>
                        <p className="name">{category.benefits}</p>
                        <p className="name">{category.category}</p>
                        <p className="name">{category.location}</p>
                        <p className="name">{category.price}</p>
                        <button onClick={() => handleAddToCart(category)}>Add to Cart</button>
                    </ul>
                ))}
            </ul>
            <footer className="footer">
                <p id="footertext">@2024 ,BloomConnect.All rights reserved</p>
            </footer>
        </div>
    );
}

export default Homepage;
