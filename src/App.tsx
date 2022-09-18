import React from 'react';
import './App.scss';
import getPhotos from './data/photos';
import PhotoTile from './components/PhotoTile/PhotoTile';
import { Photo } from './gtypes/photo';
import Navbar from './components/NavBar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Albums from './pages/albums/Albums';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

const photos: Photo[] = getPhotos();

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/albums" element={<Albums/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
      <h1 className="mainHeader"> Portfolio</h1>
      <h2 className="secondaryHeader">Konrad Marciniak</h2>       
      <div className="container">
        {
          photos.map( (photo, index) => (
            <PhotoTile 
              key = { index }
              name = { photo.name }  
              title = {photo.title}
              description = {photo.description}
            /> 
          ))
        }            
        </div>
    </>
  );
}

export default App;
