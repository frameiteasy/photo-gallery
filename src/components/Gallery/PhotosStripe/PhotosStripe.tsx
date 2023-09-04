import React from 'react';
import { ISetCurPhoto } from '../../../gtypes/iSetCurPhoto';
import './photosStripe.scss';

const photosFolder: string | undefined = process.env.REACT_APP_PHOTOS_FOLDER;

const PhotosStripe: React.FC<ISetCurPhoto> = (iSetCurPhoto: ISetCurPhoto) => {
  const miniatures = [];
  //TODO map over all photos from the array
  for (let i in iSetCurPhoto.photos) {
    miniatures.push(
      <div id="gallerystripe__mini_picture">
        <img
          key={iSetCurPhoto.photos[i].name}
          alt={iSetCurPhoto.photos[i].name}
          className="mini_picture"
          src={photosFolder + '/' + iSetCurPhoto.photos[i].name}
          onClick={() => {
            iSetCurPhoto.setCurrentPhoto(i);
          }}
        ></img>
      </div>
    );
  }
  return <div id="gallerystripe__container">{miniatures}</div>;
};

export default PhotosStripe;
