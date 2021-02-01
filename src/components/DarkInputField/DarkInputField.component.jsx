import React from "react";
import classnames from "classnames";

import "./DarkInputField.styles.scss";

const DarkInputField = ({ label, error, errorMsg, ...props }) => {
  return (
    <>
      <div className="form__group">
        <label for={props.id}>{label}</label>
        <input
          className={classnames({
            "input-error": error,
            "disable-input": props.disabled,
          })}
          {...props}
        />
        <small className={classnames({ hide: !error })}>{errorMsg}</small>
      </div>
    </>
  );
};

export default DarkInputField;
