import React, { useContext, useEffect } from 'react';
import './albumsCollection.scss';
import AlbumTile from '../AlbumTile/AlbumTile';
import { AlbumsContext } from '../../pages/context/AlbumsContext';

const AlbumsCollection: React.FC = () => {
  const { albums } = useContext(AlbumsContext);

  return (
    <div id="albumscollection__container">
      {albums.map((album, index) => (
        <AlbumTile key={index} {...album} />
      ))}
    </div>
  );
};

export default AlbumsCollection;
