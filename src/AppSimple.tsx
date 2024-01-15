import React, { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './AppSimple.scss';

import Albums from './pages/albums/Albums';
import Gallery from './pages/simpleGallery/Gallery';
import Header from './components/SimpleHeader/Header';
import Footer from './components/Footer/Footer';

import { useDataLoader } from './data/useDataLoader';
import { AlbumsContext } from './pages/context/AlbumsContext';

function App() {
  const { setAlbums } = useContext(AlbumsContext);
  const { getAlbums } = useDataLoader(setAlbums);

  useEffect(() => {
    getAlbums();
  }, []);

  return (
    <div id="app__background">
      <div id="app__container">
        <Header />
        <div id="page__container">
          <Routes>
            <Route path="/" element={<Albums />}></Route>
            <Route path="/gallery/:albumName" element={<Gallery />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
