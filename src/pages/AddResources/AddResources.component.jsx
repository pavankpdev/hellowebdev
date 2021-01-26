import React, { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";

// Styles
import "./AddResources.styles.scss";

// Components
import DarkInputFOrm from "../../components/DarkInputField/DarkInputField.component";
import DarkSelectField from "../../components/DarkInputField/DarkSelectField.component";
import { colourOptions } from "../../utils/data";

const AddResources = () => {
  const handleChange = (newValue, actionMeta) => {
    console.group("Value Changed");
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  const handleInputChange = (inputValue, actionMeta) => {
    console.group("Input Changed");
    console.log(inputValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderRaduis: "10rem",
      backgroundColor: "#16213e",
      color: "white",
      padding: 20,
      ":hover": {
        backgroundColor: "#171717",
      },
    }),
    control: (styles) => ({
      ...styles,
      backgroundColor: "#16213e",
      border: "2px solid #4136f1",
      color: "white",
    }),
    input: (styles) => ({ ...styles, color: "white" }),
    singleValue: (styles) => ({ ...styles, color: "white" }),
    multiValueLabel: (styles) => ({ ...styles, color: "#16213e" }),
    multiValueRemove: (styles) => ({
      ...styles,
      color: "#16213e",
      ":hover": {
        backgroundColor: "#16213e",
        color: "white",
      },
    }),
  };
  return (
    <>
      <div className="add__new__container rounded">
        <h4>Add New Resource</h4>
        <div className="resource__form">
          <DarkInputFOrm
            label="Resource Name"
            id="resource"
            type="text"
            placeholder="Eg: Mongoose"
          />
        </div>
        <div className="resource__form">
          <DarkSelectField
            label="Resource type"
            onChange={handleChange}
            onInputChange={handleInputChange}
            options={colourOptions}
            placeholder="Select"
          />
        </div>
        <div className="resource__form">
          <DarkInputFOrm
            label="Resource Official Website / url"
            id="resource"
            type="text"
            placeholder="Eg: https://www.npmjs.com/package/mongoose"
          />
        </div>
        <div className="resource__form">
          <DarkInputFOrm
            label="Description"
            id="resource"
            type="text"
            placeholder="Eg: Mongoose is a MongoDB object modeling tool....."
          />
        </div>
        <div className="resource__form">
          <DarkSelectField
            label="Category"
            onChange={handleChange}
            onInputChange={handleInputChange}
            options={colourOptions}
            placeholder="Select a category "
          />
        </div>
        <button className="btn btn-sm btn-primary">Submit</button>
      </div>
    </>
  );
};

export default AddResources;
