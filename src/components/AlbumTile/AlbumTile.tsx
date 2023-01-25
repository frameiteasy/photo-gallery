import React from 'react';
import { Album } from '../../gtypes/album';
import './albumTile.scss';

/*
 * Component should send a request for a picture to the server (callback)
 */

import pict from '../../data/albums/album01/photos/photo1.jpg';
import { getAlbumPhotos } from '../../data/albums';

const handleClick = (album: Album) => {
  console.log('Open galery with ' + album.name);
  const photos = getAlbumPhotos(album);
  console.log('Album photos', photos);
};

const AlbumTile: React.FC<Album> = (album: Album) => {
  return (
    <div className="albumTile__wrapper" onClick={() => handleClick(album)}>
      <div className="albumTile__image">
        <img src={pict}></img>
      </div>

      <h3>{album.name}</h3>
      <h4>{album.title}</h4>
      <p>{album.description}</p>
    </div>
  );
};

export default AlbumTile;
