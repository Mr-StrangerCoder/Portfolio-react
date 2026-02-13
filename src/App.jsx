
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Contactus from './pages/Contactus.jsx';
import Project from './pages/Project.jsx';
import Skills from './pages/Skills.jsx';
import Exp from './pages/Exp.jsx';

function App() {

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/AboutMe' element={<AboutMe/>}></Route>
        <Route path='/Contactus' element={<Contactus/>}></Route>
        <Route path='/Project' element={<Project/>}></Route>
        <Route path='/Exp' element={<Exp/>}></Route>
        <Route path='/Skills' element={<Skills/>}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
