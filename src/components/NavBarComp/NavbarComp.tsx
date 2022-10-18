import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.scss";
import getMenuItems from './menuitems';
import { MenuItem } from '../../gtypes/menuitem';
import MenuItemComp from './MenuItemComp/MenuItemComp';

const menuItems: MenuItem[] = getMenuItems();

const NavbarComp: React.FC = () => {
    return(
        <nav className='nav'>
           
                <h1 className='nav__site-title'>
                    <Link to='/' className='navbar__logo'>Josef Chilersa Photography</Link>
                </h1>
                <ul>
                    {
                        menuItems.map( (item, index) => (
                            <MenuItemComp {...item} />
                            )
                        )
                    }
                </ul>

        </nav>
    );
}

export default NavbarComp;