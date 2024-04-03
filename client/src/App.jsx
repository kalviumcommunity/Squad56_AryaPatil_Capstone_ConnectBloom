import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Enter from './components/enter.jsx';
import Homepage from './components/homepage.jsx'; 
import Sellerhome from './components/sellerhome.jsx';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Enter />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/sellerhome" element={<Sellerhome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
