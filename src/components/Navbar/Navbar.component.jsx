import React, { useState } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";

// components
import GitHubAuthBtn from "../GitHubAuthBtn/GitHubAuthBtn.component";

// svg
import Logo from "../../assets/svg/logo.svg";

// Styles
import "./Navbar.styles.scss";

// Auth Context

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="navbar ">
        <div className="hero__gradient"></div>

        <nav className="navbar__container container">
          <div className="navbar__contents__lg">
            <Link to="/">
              <div className="navbar__branding">
                <img src={Logo} alt="logo" />
              </div>
            </Link>
            <div className="navbar__navitems">
              <Link to="/project-contribution">
                <div className="navitem navbar__navitem__1 white">
                  Project Contributers
                </div>
              </Link>
              <Link to="/resource-contribution">
                <div className="navitem navbar__navitem__2 white">
                  Resource Contributers
                </div>
              </Link>
            </div>
            <div className="navbar__button">
              <GitHubAuthBtn />
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
            <GitHubAuthBtn />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
