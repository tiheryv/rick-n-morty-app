import React, { useEffect, useState } from 'react';
import './App.css'
import API from './js/api'
import Home from './components/Home'

import Header from './components/header';
import Nav from './components/nav'
import About from './About';
import AllCharacters from './AllCharacters';
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


const api = new API()



function App() {

  const [character, setCharacter] = useState({})

  useEffect(() => {

    async function getCharacter() {
      setCharacter(await api.getCharacter(1))
    }
    getCharacter()
  }, [])


  return (
    <Router>
      <div className="app">
        <Header />

        <Routes>
          <Route path="/about" element={<About/>}>
          </Route>
          <Route path="/characters" element={<AllCharacters/>}>
          </Route>
          <Route path="/" element={<Home/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
