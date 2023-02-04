import React from 'react';
import { Photo } from '../../gtypes/photo';
import './galleryViewer.scss';
import PhotoCanva from './PhotoCanva/PhotoCanva';
import PhotosStripe from './PhotosStripe/PhotosStripe';

const GalleryViewer: React.FC<Photo[]> = (photos: Photo[]) => {
  //TODO why I pass an array, but receive an object?
  console.log('GalleryViewer 1 ', Object.values(photos));
  console.log(Array.isArray(photos));
  return (
    <div>
      <PhotosStripe />
      <PhotoCanva />
    </div>
  );
};

export default GalleryViewer;
