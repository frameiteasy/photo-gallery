import React from 'react';
import './App.scss';
import getPhotos from './data/photos';
import PhotoTile from './components/PhotoTile/PhotoTile';
import { Photo } from './gtypes/photo';

const photos: Photo[] = getPhotos();

function App() {
  return (
    <>
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
