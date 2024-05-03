import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sale from './components/Sale.jsx';
import Homepage from './components/Homepage.jsx';
import UserLoginPage from './components/Userloginpage.jsx';
import Navbar from './components/Nav.jsx'; // Import Navbar to display login/logout status

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user login status

    return (
        <Router>
            <div>
                {/* Pass isLoggedIn state and handleLogout function to Navbar */}
                <Navbar isLoggedIn={isLoggedIn} />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/login" element={<UserLoginPage onClose={() => { }} setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path="/sale" element={<Sale />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
