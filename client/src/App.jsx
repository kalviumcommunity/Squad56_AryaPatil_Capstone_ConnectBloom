// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sale from './components/sale.jsx';
import Homepage from './components/Homepage.jsx'
import UserLoginPage from './components/Userloginpg.jsx';
// import Location from './components/Locationpage.jsx'; 

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<UserLoginPage />} />
          {/* <Route path="/location" element={<Location />} /> */}
          <Route path="/sale" element={<Sale />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
