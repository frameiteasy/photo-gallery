import Reac from 'react';

const AlbumTile = ({title, description, cover}) => {
    return(
        <div>
            <h3>{title}</h3>
            <h4>{cover}</h4>
            <p>{description}</p>
        </div>
    )
}

export default AlbumTile;