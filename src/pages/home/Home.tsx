import React from "react";
import "./home.scss";

const Home: React.FC = () => {
  return (
    <div className="home__container">
      <div className="home__content">
        <h1>Home</h1>
        <p className="home__lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga optio
          nam placeat soluta. Error, aut!
        </p>
        <a className="home__btn" href="albums">
          {" "}
          Album{" "}
        </a>
      </div>
    </div>
  );
};

export default Home;
