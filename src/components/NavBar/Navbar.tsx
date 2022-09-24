import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.scss";

const Navbar: React.FC = () => {
    return(
        <nav className='nav'>
            <Link to='/' className='navbar__site-title'>Josef Chilersa Photography</Link>
            <ul>
                <li>
                    <Link to='/' className='active'>Home</Link>
                </li>
                <li>
                    <Link to='/albums'>Albums</Link>
                </li>
                <li>
                    <Link to='/contact'>Contact</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;