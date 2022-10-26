import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/home/Home';
import Albums from './pages/albums/Albums';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Login from './pages/login/Login';
import HeaderComp from './components/HeaderComp/HeaderComp';
import FooterComp from './components/FooterComp/FooterComp';

function App() {
  return (
    <div id="app__container">
        <HeaderComp />
        <div id="page__container">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/albums" element={<Albums/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
          </Routes> 
          <FooterComp />
        </div>
    </div>
  );
}

export default App;
