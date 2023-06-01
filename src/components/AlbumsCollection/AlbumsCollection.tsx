import React from 'react';
import './albumsCollection.scss';
import { getAlbums } from '../../data/albums';
import AlbumTile from '../AlbumTile/AlbumTile';
import { Album } from '../../gtypes/album';

const albums: Album[] = getAlbums();

const AlbumsCollection: React.FC = () => {
  return (
    <div id="albumscollection__container">
      {albums.map((album, index) => (
        <AlbumTile {...album} />
      ))}
    </div>
  );
};

export default AlbumsCollection;
