// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom";
import Navigation from './components/Navigation'
import Project from './pages/Projects'
import Resume from './pages/Resume'
import Home from './pages/Home'
import Interests from './pages/Interests';
import Contacts from './pages/Contacts';
// import IconsDemo from './components/IconsDemo';
// import FlagsDemo from './components/FlagsDemo';
import React, { Component }  from 'react';
import 'semantic-ui-css/semantic.min.css'  

// const styleLink = document.createElement("link");
// styleLink.rel = "stylesheet";
// styleLink.href = 
// "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
// document.head.appendChild(styleLink);
function App() {
  return (
    <body calss="body">
      <div id="mainPage">
        <Router>
          <Navigation />
          {/* <IconsDemo/>   
          <FlagsDemo/>     */}
          <Routes>
            {/* <Home /> */}
            <Route path='/' exact={true} element={<Home />} />
            <Route path='/home' exact={true} element={<Home />} />
            <Route path='/projects' element={<Project />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/interests' element={<Interests />} />
            {/* <Route path="/contacts" element={<Contacts />} /> */}
          </Routes>    
        </Router>
      </div>
    </body>
  );
}

export default App;


