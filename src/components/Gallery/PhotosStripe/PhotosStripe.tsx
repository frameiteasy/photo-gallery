import React from 'react';
import { Photo } from '../../../gtypes/photo';
import './photosStripe.scss';

const PhotosStripe: React.FC<Photo[]> = (photos: Photo[]) => {
  console.log("Photos' Stripe", photos);
  const miniatures = [];
  for (let i = 0; i < 6; i++) {
    miniatures.push(<div id="gallerystripe__mini_picture">{i}</div>);
  }
  return <div id="gallerystripe__container">{miniatures}</div>;
};

export default PhotosStripe;
