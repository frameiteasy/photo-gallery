import React from "react";
import Navbar from "../Navbar/Navbar";

const Header: React.FC = () => {
  return (
    <header className="header__home">
      <div className="header__container">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
