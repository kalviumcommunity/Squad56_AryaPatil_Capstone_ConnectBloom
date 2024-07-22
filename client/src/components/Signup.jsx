import React, { useState } from 'react';
import axios from  'axios'
import { useNavigate } from 'react-router-dom';
import Navbar from './Nav';
import './Signup.css'


function Signup() { 
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); 
    const Navigate=useNavigate()

    const handleNameChange = (event) => {
        setName(event.target.value);
      };
    
      const handleEmailChange = (event) => {
        setEmail(event.target.value);
      };
    
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      };
    
      const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(name, email, password, confirmPassword);
    
        if (password !== confirmPassword) {
            console.error("Passwords don't match");
            return;
        } else {
            const userData = {
                name: name,
                email: email,
                password: password,
            };
            try {
                const response = await axios.post(
                    `https://squad56-aryapatil-capstone-connectbloom.onrender.com/signup`,
                    userData
                );
                alert(response.data);
                Navigate("/");
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred while signing up. Please try again.');
            }
        }
    }; 
    
    
        // try {
        //   // Make a POST request to your signup endpoint
        //   const response = await fetch('http://localhost:3000/api/signup', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({ name, email, password })
        //   });
    
    //       if (response.ok) {
    //         // Signup successful
    //         console.log('Signup successful');
    //         // Redirect the user to login page or perform any other action
    //       } else {
    //         // Signup failed
    //         const errorData = await response.json();
    //         console.error(errorData.message);
    //       }
    //     } catch (error) {
    //       console.error('Error:', error);
    //     }
      // };
    
  return (
    <div> 
        <Navbar/>
        <div className='signupdiv'> 

        <h2 id='headingsign'>Sign Up  Page</h2>
    <form onSubmit={handleSubmit}>
      <div className='namediv' >
        <label id='namesign' htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div   className='emaildiv' >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div className='passworddiv'>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <div className='confirmpassworddiv'>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
      </div>
      <button id='signupbtn' type="submit">Sign Up</button>
    </form>
        </div>
    </div>
  )
}

export default Signup;