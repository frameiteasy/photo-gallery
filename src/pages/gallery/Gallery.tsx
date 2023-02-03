import React from 'react';
import { useParams } from 'react-router-dom';
import GalleryViewer from '../../components/Gallery/GalleryViewer';
import { getAlbumPhotos } from '../../data/albums';
import { Photo } from '../../gtypes/photo';

import './gallery.scss';

const Gallery: React.FC = () => {
  const { albumName } = useParams();

  const photos: Photo[] = getAlbumPhotos(albumName);

  //TODO
  // - check if album exists
  // - if no - worning modal window
  // - if yes - get album's photos &  open GalleryViewer
  //

  console.log('Gallery:', photos);
  return (
    <div>
      <GalleryViewer {...photos} />
    </div>
  );
};

export default Gallery;
