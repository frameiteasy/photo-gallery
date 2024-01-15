import React from 'react';
import { useState } from 'react';
import { Photo } from '../../gtypes/photo';
import { ISetCurPhoto } from '../../gtypes/iSetCurPhoto';
import './galleryViewer.scss';
import PhotoCanva from './PhotoCanva/PhotoCanva';
import PhotosStripe from './PhotosStripe/PhotosStripe';

const GalleryViewer: React.FC<Photo[]> = (photos: Photo[]) => {
  //TODO why I pass an array, but receive an object?
  const [currentPhoto, setCurrentPhoto] = useState<Photo>(photos[0]);

  const setCurrentPhotography = (i: number) => {
    setCurrentPhoto(photos[i]);
  };

  const iSetCurPhoto: ISetCurPhoto = {
    photos: photos,
    setCurrentPhoto: setCurrentPhotography,
  };

  return (
    <div id="galleryViewer__container">
      <div id="galleryViewer__stripe">
        <PhotosStripe {...iSetCurPhoto} />
      </div>
      <div id="galleryViewer__canva">
        <PhotoCanva {...currentPhoto} />
      </div>
    </div>
  );
};

export default GalleryViewer;
