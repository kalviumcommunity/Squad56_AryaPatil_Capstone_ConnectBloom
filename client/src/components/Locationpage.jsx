// Location.jsx
import React, { useState } from 'react';
import './locationpage.css';
import Navbar from './Nav.jsx';
import { useNavigate } from 'react-router-dom';

function Location() {
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('selectedLocation', location); // Store selected location in localStorage
    navigate(`/categories/${location.toLowerCase()}`); // Navigate to categories page with selected location
  };

  return (
    <>
      <Navbar />
      <h1>Select Your Location to Order</h1>
      <div className="location-page">
        <form onSubmit={handleSubmit}>
          <div className='locationdiv'>
            <label htmlFor="locationSelect">Choose a location:</label>
            <select id="locationSelect" value={location} onChange={handleLocationChange}>
              <option value="">Select a location</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
            </select>
          </div>
          <button id='locationsubmit' type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Location;
