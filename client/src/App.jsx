// App.jsx
import React from 'react';
import Sale from './components/Sale.jsx';

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
