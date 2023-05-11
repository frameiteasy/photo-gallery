import React from 'react';
import { Photo } from '../../../gtypes/photo';
import './photoCanva.scss';

const photosFolder: string | undefined = process.env.REACT_APP_PHOTOS_FOLDER;

const PhotoCanva: React.FC<Photo> = (currentPhoto: Photo) => {
  return (
    <div id="galleryphotocanva__container">
      <img src={photosFolder + '/' + currentPhoto.name}></img>
    </div>
  );
};

export default PhotoCanva;
