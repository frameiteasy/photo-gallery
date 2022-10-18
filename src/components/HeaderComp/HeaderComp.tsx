import React from 'react';
import NavbarComp from '../NavBarComp/NavbarComp';

const HeaderComp: React.FC = () => {
    return(
        <header className="header__home">
            <div className="header__container">
                <NavbarComp />
            </div>
        </header>
    );
}

export default HeaderComp;