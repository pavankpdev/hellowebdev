import React, { useState } from "react";
import classnames from "classnames";

import "./Collapsible.styles.scss";

const Collapsible = ({ title, children, length, filter }) => {
  const [toggle, setTogggle] = useState(false);
  return (
    <>
      <div className="collapsible__container">
        <div className="collapsible__menu">
          <h2 className="pointer" onClick={() => setTogggle(!toggle)}>
            {title}
            <span
              style={{
                marginLeft: ".5rem",
                border: "1px solid white",
                padding: "2px .5rem",
                fontSize: "20px",
              }}
            >
              {length}
            </span>
          </h2>
          {toggle ? (
            <i
              className="fas fa-angle-up fa-2x pointer"
              onClick={() => setTogggle(!toggle)}
            />
          ) : (
            <i
              className="fas fa-angle-down fa-2x pointer"
              onClick={() => setTogggle(!toggle)}
            />
          )}
        </div>
        <div className={classnames("collapsible__content", { hide: !toggle })}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Collapsible;
