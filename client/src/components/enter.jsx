import React from 'react';
import Seller from '../assets/finalseller.png';
import User from '../assets/user.png';
import './enter.css';
import { useNavigate } from 'react-router-dom';

function Enter() {
const handleSellerClick = () => {
        navigate('/sellerhome'); 
    };

    return (
        <div className="container">
            <div className="image-container image-containeruser">
                <img src={User} alt="User" />
                <div className="overlay">
                    <div className="text">Welcome to BloomConnect. <br /> (if user then click on the button provided)</div>
                    <button className="button" onClick={() => navigate('/homepage')}>User</button>
                </div>
            </div>
            <div className="image-container image-containerseller">
                <img src={Seller} alt="Seller" />
                <div className="overlay">
                    <div className="text">Welcome to BloomConnect. <br />(if seller then click on the button provided)</div>
                    <button className="button" onClick={handleSellerClick}>Seller</button>
                </div>
            </div>
        </div>
    );
}

export default Enter;
