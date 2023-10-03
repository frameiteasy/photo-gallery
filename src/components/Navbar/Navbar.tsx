import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import getMenuItems from './menuitems';
import { MenuItemType } from '../../gtypes/menuitem';
import MenuItem from './MenuItem/MenuItem';

const menuItems: MenuItemType[] = getMenuItems();

const Navbar: React.FC = () => {
  return (
    <div id="nav">
      <h1 id="nav__site-title">
        <Link to="/" className="navbar__logo">
          Josef Chilersa Photography
        </Link>
      </h1>

      <ul id="nav__menu">
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
