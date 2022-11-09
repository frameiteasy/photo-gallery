import React from "react";
import { Link } from "react-router-dom";
import { MenuItemType } from "../../../gtypes/menuitem";

const MenuItem: React.FC<MenuItemType> = (menuItem: MenuItemType) => {
  return (
    <li>
      <Link to={menuItem.path} className={menuItem.className}>
        {menuItem.name}
      </Link>
    </li>
  );
};

export default MenuItem;
