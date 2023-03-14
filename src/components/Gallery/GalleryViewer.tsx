import React from 'react';
import { useState } from 'react';
import { Photo } from '../../gtypes/photo';
import './galleryViewer.scss';
import PhotoCanva from './PhotoCanva/PhotoCanva';
import PhotosStripe from './PhotosStripe/PhotosStripe';

const GalleryViewer: React.FC<Photo[]> = (photos: Photo[]) => {
  //TODO why I pass an array, but receive an object?
  console.log('GalleryViewer 1 ', Object.values(photos));
  console.log(Array.isArray(photos));

  const initPhoto = {
    name: '',
    title: '',
    description: '',
  };

  const [currentPhoto, setCurrentPhoto] = useState<Photo>(initPhoto);

  return (
    <div id="galleryViewer__container">
      <div id="galleryViewer__stripe">
        <PhotosStripe {...photos} />
      </div>
      <div id="galleryViewer__canva">
        <PhotoCanva {...currentPhoto} />
      </div>
    </div>
  );
};

export default GalleryViewer;
