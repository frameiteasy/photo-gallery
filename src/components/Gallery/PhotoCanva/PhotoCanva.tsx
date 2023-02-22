import React from 'react';
import { Photo } from '../../../gtypes/photo';
import './photoCanva.scss';

const PhotoCanva: React.FC<Photo[]> = (photos: Photo[]) => {
  console.log('Photo Canva', photos);
  return <div id="galleryphotocanva__container">Photo Canva</div>;
};

export default PhotoCanva;
