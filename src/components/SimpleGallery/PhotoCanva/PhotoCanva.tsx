import React from 'react';
import { Photo } from '../../../gtypes/photo';
import './photoCanva.scss';

const PhotoCanva: React.FC<Photo> = (currentPhoto: Photo) => {
  return (
    <div id="galleryphotocanva__container">
      <img
        className="big__picture"
        src={'http://localhost:3001/photos/big' + '/' + currentPhoto.name}
        alt={currentPhoto.name}
        onClick={() => {
          alert('ala ma kota');
        }}
      ></img>
    </div>
  );
};

export default PhotoCanva;
