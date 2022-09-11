import React from 'react';
import "./photoTile.scss";
import { Photo } from '../../gtypes/photo';

/*
 * Component should send a request for a picture to the server (callback)
*/

const PhotoTile: React.FC<Photo> = (photo: Photo) => {
    return(
        <div className="photoTile__wrapper">
            <div className="photoTile__image">
                <h3>{photo.name}</h3>
                <h4>{photo.title}</h4>
                <p>{photo.description}</p>
            </div>
        </div>
    )
}

export default PhotoTile;