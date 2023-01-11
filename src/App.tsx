import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./pages/home/Home";
import Albums from "./pages/albums/Albums";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <div id="app__container">
      <Header />
      <div id="page__container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/albums" element={<Albums />}></Route>
          <Route path="/albums/:albumName" element={<Gallery />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
