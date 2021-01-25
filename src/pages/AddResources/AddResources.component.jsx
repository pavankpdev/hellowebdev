import React from "react";

import "./AddResources.styles.scss";

// Components
import DarkInputFOrm from "../../components/DarkInputField/DarkInputField.component";

const AddResources = () => {
  return (
    <>
      <div className="add__new__container rounded">
        <h4>Add New Resource</h4>
        <div className="resource__form">
          <DarkInputFOrm
            label="Resource Name"
            id="resource"
            type="text"
            placeholder="eg: Mongoose"
          />
        </div>
        <div className="resource__form">
          <DarkInputFOrm
            label="Resource Official Website / Url"
            id="resource"
            type="text"
            placeholder="eg: Mongoose"
          />
        </div>
        <div className="resource__form">
          <DarkInputFOrm
            label="Description"
            id="resource"
            type="text"
            placeholder="eg: Mongoose"
          />
        </div>
        <div className="resource__form">
          <DarkInputFOrm
            label="Category"
            id="resource"
            type="text"
            placeholder="eg: Mongoose"
          />
        </div>
        <div className="resource__form">
          <DarkInputFOrm
            label="Category"
            id="resource"
            type="text"
            placeholder="eg: Mongoose"
          />
        </div>
        <button className="btn btn-sm btn-primary">Submit</button>
      </div>
    </>
  );
};

export default AddResources;
