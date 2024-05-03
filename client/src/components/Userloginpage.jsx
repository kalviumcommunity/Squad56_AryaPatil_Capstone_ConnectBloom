import React, { useState } from 'react';
import './userlogin.css';
import Navbar from './Nav.jsx';

function UserLoginPage({ onClose, setIsLoggedIn }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });

            if (response.ok) {
                const data = await response.json();
                // Update login status in App component
                setIsLoggedIn(true);
                console.log(data.message);
                onClose();
            } else {
                const errorData = await response.json();
                console.error(errorData.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
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
