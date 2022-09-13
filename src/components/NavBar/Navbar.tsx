import React from 'react';
import "./navbar.scss";

const Navbar: React.FC = () => {
    return(
        <nav className='nav'>
            <a href='/' className='navbar__site-title'>Josef Chilersa Photography</a>
            <ul>
                <li>
                    <a href='/home' className='active'>Home</a>
                </li>
                <li>
                    <a href='/albums'>Albums</a>
                </li>
                <li>
                    <a href='/contact'>Contact</a>
                </li>
                <li>
                    <a href='/about'>About</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;