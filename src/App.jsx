import React from 'react';
import PhotoTile from './components/PhotoTile/PhotoTile.jsx';
import "./App.scss";
import getPhotos from './data/photos.jsx';

const photos = getPhotos();

const App = () => {
    return (
    <>
        <h1 className="mainHeader"> Portfolio</h1>
        <h2 className="secondaryHeader">Konrad Marciniak</h2>

        <div className="container">
            {
                photos.map( (photo, index) => (
                    <PhotoTile 
                    key = { index }
                    photo = { photo } 
                /> 
                ))
            }           
        </div>
        
    </>
)};

export default App;