import React from 'react';
import "./photoTile.scss";

/*
 * Component should send a request for a picture to the server (callback)
*/

function PhotoTile({photo, title, description}) {
    return(
        <div className="photoTile__wrapper">
            <div className="photoTile__image">

            </div>
            <h3>{title}</h3>
            <h4>{photo}</h4>
            <p>{description}</p>
        </div>
    )
}

export default PhotoTile;