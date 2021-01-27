import React, { useState } from "react";
import classnames from "classnames";

import "./Collapsible.styles.scss";

const Collapsible = ({ title, children }) => {
  const [toggle, setTogggle] = useState(false);
  return (
    <>
      <div className="collapsible__container">
        <div className="collapsible__menu">
          <h2>{title}</h2>
          {toggle ? (
            <i
              className="fas fa-angle-up fa-2x"
              onClick={() => setTogggle(!toggle)}
            />
          ) : (
            <i
              className="fas fa-angle-down fa-2x"
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
