import React, { useEffect, useState } from 'react';
import './App.css'
import Home from './components/Home'

import Header from './components/Header';
import About from './About';
import AllCharacters from './AllCharacters';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <Router>
      <div className="app">
        <Header />

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/characters" element={<AllCharacters />} />
          <Route path="/" element={<Home />} />
        </Routes>


      </div>
    </Router>
  )
}

export default App;
