import React, { useState } from 'react';
import './userlogin.css'
import Navbar from '../components/nav.jsx'

function UserLoginPage() {
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
  };

  return (
    <div>
      <Navbar/>
      <div className='login-main'>
      <h2 id='Login'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input 
          placeholder='Enter yoour username'
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
        <button id='submitbutton' type="submit">Submit</button>
      </form>
    </div>
    </div>
    
  );
}

export default UserLoginPage;
