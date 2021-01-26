import React, { useState, useEffect } from "react";
import CreatableSelect from "react-select/creatable";
import classnames from "classnames";

// Configs
import { darkThemeReactSelect } from "../../configs/darkThemeReactSelect.config";

const DarkSelectField = ({
  placeholder,
  label,
  id,
  error,
  handleChange,
  handleInputChange,
  options,
}) => {
  const [customReactSelectStyle, setCustomReactSelectStyle] = useState(
    darkThemeReactSelect
  );

  useEffect(() => {
    setCustomReactSelectStyle(darkThemeReactSelect(error));
  }, [error]);

  return (
    <>
      <div style={{ margin: "1rem 0" }}>
        <label for={id} style={{ marginBottom: "1rem" }}>
          {label}
        </label>
        <CreatableSelect
          styles={customReactSelectStyle}
          isClearable
          onChange={handleChange}
          onInputChange={handleInputChange}
          options={options}
          placeholder={placeholder}
          isMulti
        />
        <small className={classnames("danger", { hide: !error })}>
          {error}
        </small>
      </div>
    </>
  );
};

export default DarkSelectField;
