import React, { useState } from 'react';
import './locationpage.css';
import Navbar from '../components/nav.jsx';
import { Link } from 'react-router-dom'; 

function Location({ history }) {
  const [location, setLocation] = useState('');

  const handleChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedLocation = location ? location : "No location selected";
    window.alert('Location selected: ' + selectedLocation);
    window.addEventListener('unload', () => {
      history.push('/categories');
    });
  };

  return (
    <>
      <Navbar />
      <h1>Select Your Location to order</h1>
      <div className="location-page">
        <form onSubmit={handleSubmit}>
          <div className='locationdiv'>
            <label htmlFor="locationSelect">Choose a location:</label>
            <select id="locationSelect" value={location} onChange={handleChange}>
              <option value="">Select a location</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
            </select>
          </div>
          <Link to="/categories">
            <button id='locationsubmit' type="button">Submit</button>
          </Link>        
          </form>
      </div>
    </>
  );
}

export default Location;