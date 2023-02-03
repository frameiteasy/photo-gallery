import React from 'react';
import { Photo } from '../../gtypes/photo';
import './galleryViewer.scss';

const GalleryViewer: React.FC<Photo[]> = (photos: Photo[]) => {
  console.log('GalleryViewer ', photos);
  console.log('GalleryViewer 1 ', Object.values(photos));
  console.log(Array.isArray(photos));
  return <div>{Object.values(photos).map((photo, index) => photo.name)}</div>;
};

export default GalleryViewer;
