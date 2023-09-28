import React from 'react';
import './albumsCollection.scss';
import { getAlbums, getAlbums2 } from '../../data/albums';
import AlbumTile from '../AlbumTile/AlbumTile';
import { Album } from '../../gtypes/album';

const albums = getAlbums();

const AlbumsCollection: React.FC = () => {
  getAlbums2().then((resp) => {
    let albums3 = resp?.map((item, index) => {
      return item;
    });
    console.log('albums3', albums3);
  });

  return (
    <div id="albumscollection__container">
      {albums.map((album, index) => (
        <AlbumTile key={index} {...album} />
      ))}
    </div>
  );
};

export default AlbumsCollection;
