import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from '../../../gtypes/menuitem';

const MenuItemComp: React.FC<MenuItem> = (menuItem: MenuItem) => {
    return(
        <li>
        <Link to={menuItem.path} className={menuItem.className}>
            {menuItem.name}
        </Link>
    </li>
    )
}

export default MenuItemComp