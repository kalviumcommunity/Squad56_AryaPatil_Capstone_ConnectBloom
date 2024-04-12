import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './nav';
import Register from '../assets/register.png';
import './registeruser.css';
import Regustrbtn from '../assets/registerimg2.png';
import Newomage from '../assets/newimg.png';

function RegisterUser() {
  return (
    <div>
      <Navbar />
        <h1>Let's have a tour!</h1>
      <div className="content-container">
        <div className='textofregist'> 
          <p>  In the heart of a tree nursery, time stands still, and the seasons dance in eternal harmony, weaving a tapestry of colors, scents, and textures that celebrate the beauty of life in all its forms. <br />
            
          </p>
          {/* Use Link component to navigate to the registration form */}
          <Link to="/registerform" className='final'>Register here</Link>
        </div>
        <div className="registeruser-container"> 
          <img id="registerpg" src={Register} alt="registerpage" />
          <img id="registerpg2" src={Regustrbtn} alt="registerpage2" />
          <img id="registerpg3" src={Newomage} alt="newimage" />
        </div>
      </div>
    </div>
  );
}

export default RegisterUser;
