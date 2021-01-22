import React, { useState } from "react";
import classnames from "classnames";

// svg
import Logo from "../../assets/svg/logo.svg";

// Styles
import "./Navbar.styles.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="navbar container">
        <div className="hero__gradient"></div>

        <nav className="navbar__container">
          <div className="navbar__contents__lg">
            <div className="navbar__branding">
              <img src={Logo} alt="logo" />
            </div>
            <div className="navbar__navitems">
              <div className="navitem navbar__navitem__1">
                Project Contributers
              </div>
              <div className="navitem navbar__navitem__2">
                Resource Contributers
              </div>
            </div>
            <div className="navbar__button">
              <button className="btn btn-github">
                Sign in with github{" "}
                <i
                  className="fab fa-github fa-2x "
                  style={{ marginLeft: "1rem" }}
                />
              </button>
            </div>
          </div>
          <div className="navbar__contents__sm">
            <div className="navbar__branding">
              <img src={Logo} alt="logo" />
            </div>
            <div className="navbar__toggle__menu">
              {toggle ? (
                <i
                  className="fas fa-times fa-2x white"
                  onClick={() => setToggle(!toggle)}
                />
              ) : (
                <i
                  className="fas fa-bars fa-2x white"
                  onClick={() => setToggle(!toggle)}
                />
              )}
            </div>
          </div>
        </nav>
        <div
          className={classnames("navbar__contents__sm__container", {
            hide: !toggle,
          })}
        >
          <div className="navitem navbar__navitem__1__sm">
            Project Contributers List
          </div>
          <div className="navitem navbar__navitem__2__sm">
            Resource Contributers List
          </div>
          <div className="navbar__button__sm">
            <button className="btn btn-github">
              Sign in with github{" "}
              <i className="fab fa-github fa-lg" style={{ marginLeft: ".5rem" }} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
