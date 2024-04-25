import React, { useState } from 'react';
import './userlogin.css';
import Navbar from './Nav.jsx';

function UserLoginPage({ onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   
    console.log('Username:', username);
    console.log('Password:', password);
    
    setUsername('');
    setPassword('');

    // Close the modal after submitting
    onClose();
  };

  const handleClose = () => {
    // Close the modal without submitting
    onClose();
  };

  return (
    <div className="modal-background">
      <Navbar />
      <div className='login-modal'>
        <button className="close-button" onClick={handleClose}>X</button>
        <h2 id='Login'>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input 
              placeholder='Enter your username'
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              placeholder='Enter your Password'
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button id='login-submit-button' type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default UserLoginPage;
