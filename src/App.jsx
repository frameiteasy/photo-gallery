import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import LandingPage from './pages/LandingPage/LandingPage.jsx'
import GalleriesPage from './pages/GalleriesPage/GalleriesPage.jsx';
import AboutPage from './pages/AboutPage/AboutPage.jsx';
import Navbar from './components/Navbar/Navbar.jsx'

export default function App() {
  return(
    <BrowserRouter>
      <>
        <Navbar/>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/galleries" component={GalleriesPage}/>
        <Route path="/about" component={AboutPage}/>
      </>
    </BrowserRouter>  
  );
}