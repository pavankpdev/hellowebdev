import React from "react";

const Spinner = () => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <div style={{ textAlign: "center" }}>
      <i
        className="fas fa-spinner fa-pulse fa-2x white"
        style={{
          marginBottom: ".5rem",
        }}
      />
      <h6>Loading</h6>
    </div>
  </div>
);

export default Spinner;
