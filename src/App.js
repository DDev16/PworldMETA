import React from 'react';
import MetaverseScene from './components/MetaverseScene.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from './components/FrontPage/FrontPage.js';
import About from './components/about/about.js';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/metaverse" element={<MetaverseScene />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </Router>
  );
}

export default App;

