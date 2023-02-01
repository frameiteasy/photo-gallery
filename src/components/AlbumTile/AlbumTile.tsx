import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Album } from '../../gtypes/album';
import './albumTile.scss';

/*
 * Component should send a request for a picture to the server (callback)
 */

import pict from '../../data/albums/album01/photos/photo1.jpg';
import { getAlbumPhotos } from '../../data/albums';

const AlbumTile: React.FC<Album> = (album: Album) => {
  const navigate = useNavigate();
  const galleryUrl = '/gallery/' + album.name;
  console.log('GalleryURL: ', galleryUrl);
  return (
    <div className="albumTile__wrapper" onClick={() => navigate(galleryUrl)}>
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
