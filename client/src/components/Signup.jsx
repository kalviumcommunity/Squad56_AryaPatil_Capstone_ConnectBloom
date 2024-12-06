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
    
    
       
  return (
    <>
   
        <Navbar/>
    <div className='main-sign'> 
        <div className='signupdiv'> 

        <h2 id='headingsign'>Sign Up  Page</h2>
    <form onSubmit={handleSubmit}>
      <div   className='namediv inpp' >
        <label id='namesign' htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div    className='emaildiv inpp' >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
      </div>
      <div  className='passworddiv inpp'>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          // id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <div  className='confirmpassworddiv inpp'>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          // id="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
      </div>
      <button id='signupbtn' type="submit">Sign Up</button>
    </form>
        </div>
    </div>
    </>
  )
}

export default Signup;