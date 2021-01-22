import React from "react";

import "./Home.styles.scss";
// Components

const Home = () => {
  return (
    <>
      <h1 className="hero__text">
        Curated Collection of all web development resources in one place.
      </h1>
      <div className="hero__buttons">
        <a
          href="https://github.com/pavankpdev/web-dev-repo"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn">
            Contribute to project <i className="fab fa-github" />
          </button>
        </a>
        <button className="btn">
          Submit a resource <i className="fas fa-plus" />
        </button>
        <a
          href="https://github.com/pavankpdev/web-dev-repo"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn">
            gitHub <i className="fas fa-star" /> 123
          </button>
        </a>
      </div>
    </>
  );
};

export default Home;
