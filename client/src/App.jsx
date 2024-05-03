import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sale from './components/Sale.jsx';
import Homepage from './components/Homepage.jsx';
import UserLoginPage from './components/Userloginpage.jsx';
import Navbar from './components/Nav.jsx'; 
import Cart from './components/Cartpage.jsx'


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user login status

    return (
        <Router>
            <div>
                
                <Navbar isLoggedIn={isLoggedIn} />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/login" element={<UserLoginPage onClose={() => { }} setIsLoggedIn={setIsLoggedIn} />} />
                    <Route path="/sale" element={<Sale />} />
                    <Route path='/cart' element={<Cart/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
