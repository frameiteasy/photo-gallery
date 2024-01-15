import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Album } from '../../gtypes/album';
import './albumTile.scss';

const AlbumTile: React.FC<Album> = (album: Album) => {
  const navigate = useNavigate();
  const galleryUrl = '/gallery/' + album.name;

  return (
    <div className="albumTile__wrapper" onClick={() => navigate(galleryUrl)}>
      <div className="albumTile__image">
        <img src={album.cover} alt={album.name}></img>
      </div>

      <h3>{album.name}</h3>
      <h4>{album.title}</h4>
      <p>{album.description}</p>
    </div>
  );
};

export default AlbumTile;
