import React from 'react';
import { Photo } from '../../../gtypes/photo';
import './photoCanva.scss';

const PhotoCanva: React.FC<Photo> = (photo: Photo) => {
  console.log('Photo Canva', photo);
  return <div id="galleryphotocanva__container">Photo Canva</div>;
};

export default PhotoCanva;
