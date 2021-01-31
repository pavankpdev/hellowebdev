import React from "react";
import classnames from "classnames";

import "./DarkInputField.styles.scss";

const DarktextArea = ({ label, error, ...props }) => {
  return (
    <>
      <div className="form__group">
        <textarea
          className={classnames({ "input-error": error })}
          rows="4"
          cols="50"
          {...props}
        >
          {props.children}
        </textarea>
        <small className={classnames({ hide: !error })}>{error}</small>
      </div>
    </>
  );
};

export default DarktextArea;
