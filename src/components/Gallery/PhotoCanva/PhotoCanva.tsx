import React from 'react';
import { Photo } from '../../../gtypes/photo';
import './photoCanva.scss';

const photosFolder: string | undefined = process.env.REACT_APP_PHOTOS_FOLDER;

const PhotoCanva: React.FC<Photo> = (photo: Photo) => {
  console.log('Photo Canva', photo);
  return (
    <div id="galleryphotocanva__container">
      <img src={photosFolder + '/' + photo.name}></img>
    </div>
  );
};

export default PhotoCanva;
