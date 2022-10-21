import React from 'react';
import './albums.scss';
import getPhotos from '../../data/photos';
import PhotoTileComp from '../../components/PhotoTileComp/PhotoTileComp';
import { Photo } from '../../gtypes/photo';

const photos: Photo[] = getPhotos();

const Albums: React.FC = () => {
    return(
        <>
        <div id="albums__container">
          {
            photos.map( (photo, index) => (
              <PhotoTileComp {...photo} />
            ))
          }            
        </div>
        </>
    );
}

export default Albums;
 