import React from 'react';
import AlbumTile from '../../components/AlbumTile/AlbumTile';
import { getHomePageAlbum } from '../../data/albums';
import './home.scss';

const Home: React.FC = () => {
  let homePageAlbum = getHomePageAlbum();
  return (
    <div id="home__container">
      <div id="home__content">
        <div id="home__message">
          <h1>Home</h1>
          <p className="home__lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga optio
            nam placeat soluta. Error, aut!
          </p>
        </div>
        <div id="home__album">
          <AlbumTile {...homePageAlbum} />
        </div>
      </div>
    </div>
  );
};

export default Home;
