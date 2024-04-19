import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import './Categories.css';
import Navbar from '../components/nav.jsx';

function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories data from backend server
    async function getData(){
      await axios.get('http://localhost:3000/api/categories')
      .then(response => {
        console.log(response)
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
    }
    getData()
  }, []); 
 
  return (
    <>
    <Navbar/>
    <div>
      <h1 className='categorydatabase'>Categories</h1>
      <ul className='grid'>
        {categories.map((category, index) => (
          <li key={category._id ? category._id : index}>
            <img className='databaseimg' src={category.image} alt={category.name} />
            <h2>{category.name}</h2>
            <p>{category.category}</p>
            {category.benefits && category.benefits.length > 0 && (
              <ul>
                {category.benefits.map((benefit, benefitIndex) => (
                  <li key={category._id + '_' + benefitIndex}>{benefit}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default Category;
