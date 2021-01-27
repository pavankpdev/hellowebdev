import React from "react";
import classnames from "classnames";

import "./DarkInputField.styles.scss";

const DarkInputField = ({ label, error, ...props }) => {
  return (
    <>
      <div className="form__group">
        <label for={props.id}>{label}</label>
        <input className={classnames({ "input-error": error })} {...props}  />
        <small className={classnames({ hide: !error })}>{error}</small>
      </div>
    </>
  );
};

export default DarkInputField;
