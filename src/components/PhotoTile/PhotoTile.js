import Reac from 'react';

const PhotoTile = ({photo, title, description}) => {
    return(
        <div>
            <h3>{title}</h3>
            <h4>{photo}</h4>
            <p>{description}</p>
        </div>
    )
}

export default PhotoTile;