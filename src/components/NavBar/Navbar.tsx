import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.scss";

const Navbar: React.FC = () => {
    return(
        <nav className='nav'>
            <div className='container'>
                <h1 className='navbar__site-title'>
                    <Link to='/'>Josef Chilersa Photography</Link>
                </h1>
                <ul>
                    <li>
                        <Link to='/' className="active">Home</Link>
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
            </div>
        </nav>
    );
}

export default Navbar;