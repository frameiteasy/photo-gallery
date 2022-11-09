import React from "react";
import AlbumTile from "../../components/AlbumTile/AlbumTile";
import { getHomePageAlbum } from "../../data/albums";
import "./home.scss";

const Home: React.FC = () => {
  let homePageAlbum = getHomePageAlbum();
  return (
    <div className="home__container">
      <div className="home__content">
        <h1>Home</h1>
        <p className="home__lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga optio
          nam placeat soluta. Error, aut!
        </p>
        <AlbumTile {...homePageAlbum} />
        <a className="home__btn" href="albums">
          {" "}
          Album{" "}
        </a>
      </div>
    </div>
  );
};

export default Home;
