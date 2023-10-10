import React, { useEffect } from 'react';
import './albumsCollection.scss';
import AlbumTile from '../AlbumTile/AlbumTile';
import { useAlbumCollection } from './useAlbumsCollextion';

const AlbumsCollection: React.FC = () => {
  const { getAlbums, albums } = useAlbumCollection();

  useEffect(() => {
    console.log('useEffect');
    getAlbums();
  }, []);

  console.log('albums', albums);

  return (
    <div id="albumscollection__container">
      {albums.map((album, index) => (
        <AlbumTile key={index} {...album} />
      ))}
    </div>
  );
};

export default AlbumsCollection;
