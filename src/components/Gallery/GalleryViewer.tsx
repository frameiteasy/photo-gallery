import React from 'react';
import { Photo } from '../../gtypes/photo';

import './galleryViewer.scss';

// {photos.map((photo, index) => photo.name)}

const GalleryViewer: React.FC<Photo[]> = (photos: Photo[]) => {
  console.log('Photos Gallery ', photos);
  return <div>Photos Gallery</div>;
};

export default GalleryViewer;
