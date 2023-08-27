import React from 'react';
import MetaverseScene from './components/MetaverseScene.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from './components/FrontPage/FrontPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/metaverse" element={<MetaverseScene />} />
      </Routes>
    </Router>
  );
}

export default App;

