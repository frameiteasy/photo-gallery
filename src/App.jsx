import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import LandingPage from './pages/LandingPage/LandingPage.jsx'
import GalleriesPage from './pages/GalleriesPage/GalleriesPage.jsx';

export default function App() {
  return(
    <BrowserRouter>
      <>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/galleries" component={GalleriesPage}/>
      </>
    </BrowserRouter>  
  );
}