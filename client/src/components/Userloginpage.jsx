import React, { useState } from 'react';
import './userlogin.css';
import Navbar from './Nav.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserLoginPage({ onClose }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false); // State to track login error
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        setLoginError(false); // Reset login error state when username changes
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setLoginError(false); // Reset login error state when password changes
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const loginData = {
            username,
            password
          };
    
          const response = await axios.post('http://localhost:3000/api/login', loginData);
          if (response.data) {
            localStorage.setItem('token', response.data.token);
            console.log(response.data);
            alert('You logged in successfully!');
            navigate('/');
          }
        } catch (error) {
          console.error('Login error:', error);
          if (error.response && error.response.status === 404) {
            alert('User not found, please create an account');
          } else if (error.response && error.response.status === 401) {
            alert('Incorrect password');
          } else {
            alert('An error occurred during login');
          }
        }
      };
    
    
    const handleClose = () => {
        onClose();
    };

    return (
        <div className="modal-background">
            <Navbar/> 
            <div className='login-modal'>
                <button className="close-button" onClick={handleClose}>X</button>
                <h2 id='Login'>Login</h2>
                {loginError && <p className="error-message">Incorrect login credentials. Please try again.</p>}
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
