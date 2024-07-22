import React, { useState } from 'react'
import Navbar from './Nav';
import "../components/Sales.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Sale() {
 

  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [benefits, setBenefits] = useState('');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/sale', {
      image,
      name,
      benefits,
      category,
      location,
      price
    })
    .then((response) => {
      console.log(response.data);
      navigate('/')
    })
    .catch((error) => {
      console.error('Error submitting sale data:', error);
    });
  };

  return (
    <>
<Navbar/>
      <form id='inpform' onSubmit={handleSubmit}>
        
          <p id='texttosell'>Add the information to display:</p> 
        
       <div>
          <label htmlFor="image">Image URL:</label>
          <input 
            type="text" 
            id="image" 
            value={image}
            onChange={e => setImage(e.target.value)}
            required 
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            value={name}
            onChange={e => setName(e.target.value)}
            required 
          />
        </div>
        <div>
          <label htmlFor="benefits">Benefits:</label>
          <input 
            type="text" 
            id="benefits" 
            value={benefits}
            onChange={e => setBenefits(e.target.value)}
            required 
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input 
            type="text" 
            id="category"
            value={category}
            onChange={e => setCategory(e.target.value)}
            required 
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input 
            type="text" 
            id="location" 
            value={location}
            onChange={e => setLocation(e.target.value)}
            required 
          />
        </div>
        <div>
          <label htmlFor="location">Price:</label>
          <input 
            type="text" 
            id="location" 
            value={price}
            onChange={e => setPrice(e.target.value)}
            required 
          />
        </div>
        <div> 
          <button type="submit">Submit</button>
        </div>
      </form>
      
     </>
  );
}

export default Sale;
