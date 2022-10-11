import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.scss";
import getMenuItems from './menuitems';
import { MenuItem } from '../../gtypes/menuitem';

const menuItems: MenuItem[] = getMenuItems();

const Navbar: React.FC = () => {
    return(
        <nav className='nav'>
            <div className='container'>
                <h1 className='navbar__site-title'>
                    <Link to='/' className='navbar__logo'>Josef Chilersa Photography</Link>
                </h1>
                <ul>
                    {
                        menuItems.map( (item, index) => (
                            <li>
                                <Link to={item.path} className={item.className}>
                                    {item.name}
                                </Link>
                            </li>
                            )
                        )
                    }
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;