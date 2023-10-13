import React, { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';

import Home from './pages/home/Home';
import Albums from './pages/albums/Albums';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Login from './pages/login/Login';
import Gallery from './pages/gallery/Gallery';
import Header from './components/Header/Header';
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
            <Route path="/" element={<Home />}></Route>
            <Route path="/albums" element={<Albums />}></Route>
            <Route path="/gallery/:albumName" element={<Gallery />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
