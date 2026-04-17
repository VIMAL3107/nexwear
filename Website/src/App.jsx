import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* ADD MORE ROUTES HERE IN THE FUTURE */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
