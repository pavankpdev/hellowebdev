import React from "react";

import "./LightFormInput.styles.scss";

const LightFormInput = ({ searchInput, setSearchInput }) => {
  return (
    <>
      <input
        type="search"
        placeholder="Search eg: React"
        className="form-input-light"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        aria-label="Search through site content"
      />
    </>
  );
};

export default LightFormInput;
