import React, { useState } from 'react';
import './userlogin.css';
import Navbar from './Nav.jsx';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

function UserLoginPage({ onClose, setIsLoggedIn }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [isLoggedIn, setLoggedIn] = useState(false); // State to manage login status
    const navigate = useNavigate();

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const loginData = {
                username,
                password
            };
    
            const response = await axios.post("http://localhost:3000/api/login", loginData);
            console.log(response);
            setLoggedIn(true); // Update login state
            navigate("/");
        } catch (error) {
            if (error.response) {
                alert("User not found. Please create an account");
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error:', error.message);
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
