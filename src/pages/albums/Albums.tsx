import React from 'react';
import './albums.scss';
import { getAlbums } from '../../data/albums';
import { Album } from '../../gtypes/album';
import AlbumsCollection from '../../components/AlbumsCollection/AlbumsCollection';

const Albums: React.FC = () => {
  return (
    <div id="albums__container">
      <AlbumsCollection />
    </div>
  );
};

export default Albums;
