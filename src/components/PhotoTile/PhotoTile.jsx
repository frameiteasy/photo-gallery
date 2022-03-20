import React from 'react';
import "./photoTile.scss";

/*
 * Component should send a request for a picture to the server (callback)
*/

function PhotoTile({photo}) {
    return(
        <div className="photoTile__wrapper">
            <div className="photoTile__image">

            </div>
            <h3>{photo.title}</h3>
            <h4>{photo.name}</h4>
            <p>{photo.description}</p>
        </div>
    )
}

export default PhotoTile;