import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header: React.FC = () => {
  return (
    <header id="header__home">
      <h1 id="header__site-title">
        <Link to="/" className="navbar__logo">
          Josef Chilersa Photography
        </Link>
      </h1>
    </header>
  );
};

export default Header;
