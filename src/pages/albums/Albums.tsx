import React from 'react';
import './albums.scss';
import getPhotos from '../../data/photos';
import PhotoTile from '../../components/PhotoTile/PhotoTile';
import { Photo } from '../../gtypes/photo';

const photos: Photo[] = getPhotos();

const Albums: React.FC = () => {
    return(
        <>
        <div className="albums__container">
        {
          photos.map( (photo, index) => (
            <PhotoTile {...photo} />
          ))
        }            
        </div>
        </>
    );
}

export default Albums;
 