// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom";
import Navigation from './components/Navigation'
import Project from './pages/Projects'
import Resume from './pages/Resume'
import Home from './pages/Home'
import Interests from './pages/Interests';
import React, { Component }  from 'react'

function App() {
  return (
    <body calss="body">
      <div id="mainPage">
        <Router>
          <Navigation />
          <Routes>
            <Route path='/home' exact element={<Home />} />
            <Route path='/projects' element={<Project />} />
            {/* <Route path='/resume' element={<Resume />} /> */}
            <Route path='/interests' element={<Interests />} />
          </Routes>    
        </Router>
        <Home />
      </div>
    </body>
  );
}

export default App;
