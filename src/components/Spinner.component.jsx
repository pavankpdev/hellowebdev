import React from "react";

const Spinner = () => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div>
      <i className="fas fa-fan fa-spin fa-2x white" />
      <h6>Loading</h6>
    </div>
  </div>
);

export default Spinner;
