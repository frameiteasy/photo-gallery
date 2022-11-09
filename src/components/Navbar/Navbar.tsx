import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import getMenuItems from "./menuitems";
import { MenuItemType } from "../../gtypes/menuitem";
import MenuItem from "./MenuItem/MenuItem";

const menuItems: MenuItemType[] = getMenuItems();

const Navbar: React.FC = () => {
  return (
    <nav className="nav">
      <h1 className="nav__site-title">
        <Link to="/" className="navbar__logo">
          Josef Chilersa Photography
        </Link>
      </h1>
      <ul>
        {menuItems.map((item, index) => (
          <MenuItem {...item} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
