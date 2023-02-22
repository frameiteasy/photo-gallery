import React from 'react';
import { Photo } from '../../../gtypes/photo';
import './photosStripe.scss';

const PhotosStripe: React.FC<Photo[]> = (photos: Photo[]) => {
  console.log("Photos' Stripe", photos);
  return <div id="gallerystripe__container">Photos Stripe</div>;
};

export default PhotosStripe;
