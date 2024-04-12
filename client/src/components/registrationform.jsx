import React, { useState } from 'react';
import Navbar from './nav';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './registrationfrom.css'

function RegistrationForm() {
  const navigate = useNavigate(); // Initialize the navigate function

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    numberOfPeople: '',
    preferredDate: '',
    location: '', 
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log(formData);

    // Show confirmation dialog
    const confirmSubmit = window.confirm("Registered successfully! Click OK to go to the homepage.");

    if (confirmSubmit) {
      // After confirming, navigate to the homepage
      navigate('/homepage');

      // Reset form data
      setFormData({
        name: '',
        email: '',
        numberOfPeople: '',
        preferredDate: '',
        location: '',
        comments: ''
      });
    }
  };


  return (
    <> 
    <Navbar/>
    <div className='forms'>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
           </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="numberOfPeople">Number of People:</label>
        <input
          type="number"
          id="numberOfPeople"
          name="numberOfPeople"
          value={formData.numberOfPeople}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="preferredDate">Preferred Date:</label>
        <input
          type="date"
          id="preferredDate"
          name="preferredDate"
          value={formData.preferredDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <select
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        >
          <option value="">Select Location</option>
          <option value="Location 1">Location 1</option>
          <option value="Location 2">Location 2</option>
          <option value="Location 3">Location 3</option>
    
        </select>
      </div>
      <div>
        <label htmlFor="comments">Comments:</label>
        <textarea
          id="comments"
          name="comments"
          value={formData.comments}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
    </>
  );
}

export default RegistrationForm;