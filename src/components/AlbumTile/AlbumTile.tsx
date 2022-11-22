import React from "react";
import { Album } from "../../gtypes/album";
import "./albumTile.scss";

/*
 * Component should send a request for a picture to the server (callback)
 */

import pict from "../../data/albums/album1/photos/photo1.jpg";

const AlbumTile: React.FC<Album> = (album: Album) => {
  return (
    <div className="albumTile__wrapper">
      <div className="albumTile__image">
        <img src={pict}></img>
      </div>

      <h3>{album.name}</h3>
      <h4>{album.title}</h4>
      <p>{album.description}</p>
    </div>
  );
};

export default AlbumTile;
