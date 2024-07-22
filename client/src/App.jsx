import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sale from './components/Sale.jsx';
import Homepage from './components/Homepage.jsx';
import UserLoginPage from './components/Userloginpage.jsx';
import Navbar from './components/Nav.jsx'; 
import Cartpage from './components/Cartpage.jsx';
import Signup from './components/Signup.jsx';


function App() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user login status
    const [cart, setCart] = useState([]);

    return (
        <Router>
            <div>
                
                <Navbar />
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/login" element={<UserLoginPage/>} />
                    <Route path="/sale" element={<Sale />} />
                    {/* <Route path='/cart' element={<Cart/>}/> */}
                    <Route path='/signup' element={<Signup/>}></Route>
                    <Route path="/" element={<Homepage cart={cart} setCart={setCart} />} />
                    <Route path="/cart" element={<Cartpage cart={cart} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
