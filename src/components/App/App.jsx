import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import LandingPage from '../../pages/LandingPage/LandingPage.jsx'
import GalleriesPage from '../../pages/GalleriesPage/GalleriesPage.jsx';

const App = ({name, message}) => {
  return(
    <BrowserRouter>
      <>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
        <Route exact path="/" component={ LandingPage }/>
        <Route path="/galleries" component={ GalleriesPage }/>
      </>
    </BrowserRouter>  
  );
}

export default App;