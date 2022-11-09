import React from "react";
import { Album } from "../../gtypes/album";

/*
 * Component should send a request for a picture to the server (callback)
 */

const AlbumTile: React.FC<Album> = (album: Album) => {
  return (
    <div className="albumTile__wrapper">
      <div className="albumTile__image"></div>

      <h3>{album.name}</h3>
      <h4>{album.title}</h4>
      <p>{album.description}</p>
    </div>
  );
};

export default AlbumTile;
