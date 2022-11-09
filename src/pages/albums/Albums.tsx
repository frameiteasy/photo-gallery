import React from "react";
import "./albums.scss";
import { getAlbums } from "../../data/albums";
import AlbumTile from "../../components/AlbumTile/AlbumTile";
import { Album } from "../../gtypes/album";

const albums: Album[] = getAlbums();

const Albums: React.FC = () => {
  return (
    <>
      <div id="albums__container">
        {albums.map((album, index) => (
          <AlbumTile {...album} />
        ))}
      </div>
    </>
  );
};

export default Albums;
