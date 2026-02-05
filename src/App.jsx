
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Aboutus from './pages/Aboutus.jsx';
import Contactus from './pages/Contactus.jsx';
import Project from './pages/Project.jsx';
import Skills from './pages/Skills.jsx';

function App() {

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Aboutus' element={<Aboutus/>}></Route>
        <Route path='/Contactus' element={<Contactus/>}></Route>
        <Route path='/Project' element={<Project/>}></Route>
        <Route path='/Skills' element={<Skills/>}></Route>



      </Routes>
      <Footer />
    </BrowserRouter>

  )
}

export default App
