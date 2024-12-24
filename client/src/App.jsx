import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sale from './components/Sale.jsx';
import Homepage from './components/homepage.jsx';
import UserLoginPage from './components/Userloginpage.jsx';
import Navbar from './components/Navb.jsx'; 
import Favpage from './components/Favpage.jsx';
import Signup from './components/Signup.jsx';
import { FavoritesProvider } from './context/FavoritesContext.jsx';


function App() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user login status
    const [cart, setCart] = useState([]);

    return (
        <FavoritesProvider>
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
                    <Route path="/fav" element={<Favpage />} />
                </Routes>
            </div>
        </Router>
        </FavoritesProvider>
    );
}

export default App;
