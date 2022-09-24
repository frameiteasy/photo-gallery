import React from 'react';
import getPhotos from '../../data/photos';
import PhotoTile from '../../components/PhotoTile/PhotoTile';
import { Photo } from '../../gtypes/photo';

const photos: Photo[] = getPhotos();

const Albums: React.FC = () => {
    return(
        <>
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

export default Albums;
 