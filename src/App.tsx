import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './pages/home/Home';
import Albums from './pages/albums/Albums';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Login from './pages/login/Login';
import HeaderComp from './components/HeaderComp/HeaderComp';

function App() {
  return (
    <>
        <HeaderComp />
      
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/albums" element={<Albums/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes> 
        
    </>
  );
}

export default App;
