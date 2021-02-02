import React, { useState } from "react";
import classnames from "classnames";

import "./SideBar.styles.scss";

const SideBar = ({ filter, setFilter }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="sidebar__container">
        <div className="sidebar__sm rounded">
          <div className="sidebar__sm__menu">
            <h3 className="default">Menu</h3>
            {toggle ? (
              <i
                className="fas fa-times fa-2x default"
                onClick={() => setToggle(!toggle)}
              />
            ) : (
              <i
                className="fas fa-bars fa-2x default"
                onClick={() => setToggle(!toggle)}
              />
            )}
          </div>
          <div
            className={classnames("sidebar__sm__contents", { hide: !toggle })}
          >
            <div className="sidebar__sm__contents__item">
              <h5>Select All</h5>
              <input
                type="radio"
                name="filter"
                id="selectAll"
                onChange={() => setFilter("all")}
              />
            </div>
            <div className="sidebar__sm__contents__item">
              <h5>Usefull Libraries</h5>
              <input
                type="radio"
                name="filter"
                id="libraries"
                onChange={() => setFilter("libraries")}
              />
            </div>
            <div className="sidebar__sm__contents__item">
              <h5>Code Snippets</h5>
              <input
                type="radio"
                name="filter"
                id="code"
                onChange={() => setFilter("code")}
              />
            </div>
            <div className="sidebar__sm__contents__item">
              <h5>Free Courses List</h5>
              <input
                type="radio"
                name="filter"
                id="courses"
                onChange={() => setFilter("courses")}
              />
            </div>
            <div className="sidebar__sm__contents__item">
              <h5>Amazing Articles</h5>
              <input
                type="radio"
                name="filter"
                id="articles"
                onChange={() => setFilter("articles")}
              />
            </div>
          </div>
        </div>
        <div className="sidebar__lg rounded">
          <div className="sidebar__sm__contents">
            <div className="sidebar__sm__contents__item">
              <h5>Select All</h5>
              <input
                type="radio"
                name="filter"
                id="selectAll"
                onChange={() => setFilter("all")}
              />
            </div>
            <div className="sidebar__sm__contents__item">
              <h5>Usefull Libraries</h5>
              <input
                type="radio"
                name="filter"
                id="libraries"
                onChange={() => setFilter("libraries")}
              />
            </div>
            <div className="sidebar__sm__contents__item">
              <h5>Code Snippets</h5>
              <input
                type="radio"
                name="filter"
                id="code"
                onChange={() => setFilter("code")}
              />
            </div>
            <div className="sidebar__sm__contents__item">
              <h5>Free Courses List</h5>
              <input
                type="radio"
                name="filter"
                id="courses"
                onChange={() => setFilter("courses")}
              />
            </div>
            <div className="sidebar__sm__contents__item">
              <h5>Amazing Articles</h5>
              <input
                type="radio"
                name="filter"
                id="articles"
                onChange={() => setFilter("articles")}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
