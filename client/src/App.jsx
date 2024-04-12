import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Enter from './components/enter.jsx';
import Homepage from './components/homepage.jsx'; 
import Sellerhome from './components/sellerhome.jsx';
import UserLoginPage from './components/userloginpg.jsx';
import RegisterUser from './components/registeruser.jsx'; 
import Registrationfrom from './components/registrationform.jsx'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Enter />} />
          <Route path="/homepage" element={<Homepage />} /> 
          <Route path="/sellerhome" element={<Sellerhome />} />
          <Route path="/login" element={<UserLoginPage />} />
          <Route path="/register" element={<RegisterUser />} /> 
          <Route path='/registerform' element={<Registrationfrom/>}></Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
