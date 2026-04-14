
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import React, { useState, useEffect } from "react";
import './App.css'

import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Contactme from './pages/Contactme.jsx';
import Project from './pages/Project.jsx';
import Skills from './pages/Skills.jsx';
import Exp from './pages/Exp.jsx';

function App() {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (

    <BrowserRouter>
      <Navbar  theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/AboutMe' element={<AboutMe/>}></Route>
        <Route path='/Contactme' element={<Contactme/>}></Route>
        <Route path='/Project' element={<Project/>}></Route>
        <Route path='/Exp' element={<Exp/>}></Route>
        <Route path='/Skills' element={<Skills/>}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
