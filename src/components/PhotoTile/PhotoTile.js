import React from 'react';
import "./photoTile.scss";

function PhotoTile({photo, title, description}) {
    return(
        <div className="photoTile__wrapper">
            <h3>{title}</h3>
            <h4>{photo}</h4>
            <p>{description}</p>
        </div>
    )
}

export default PhotoTile;