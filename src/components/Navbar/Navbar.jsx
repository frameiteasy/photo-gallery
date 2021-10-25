import React from 'react';
import { NavbarData } from './NavbarData';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav>
        <ul>
          {
            NavbarData.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </>
  )
}

export default Navbar;