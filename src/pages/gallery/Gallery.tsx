import React from 'react';
import { useParams } from 'react-router-dom';
import GalleryViewer from '../../components/Gallery/GalleryViewer';
import { getAlbumPhotos } from '../../data/albums';

import './gallery.scss';

const Gallery: React.FC = () => {
  const { albumName } = useParams();

  const photos = getAlbumPhotos(albumName);

  //TODO
  // - check if album exists
  // - if no - worning modal window
  // - if yes - get album's photos &  open GalleryViewer
  //

  console.log(photos);
  return (
    <div>
      <GalleryViewer {...photos} />
    </div>
  );
};

export default Gallery;
