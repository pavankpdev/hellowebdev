import React, { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";

// Styles
import "./AddResources.styles.scss";

// Components
import DarkInputFOrm from "../../components/DarkInputField/DarkInputField.component";
import DarkSelectField from "../../components/DarkInputField/DarkSelectField.component";
import ResourceType from "../../components/CategoryCapsule/CategoryCapsule.component";

import { colourOptions, resources } from "../../utils/data";

const AddResources = () => {
  const [resourceType, setResourceType] = useState([]);

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

  const updateResourceType = (resource) => {
    if (resourceType.includes(resource) && resourceType.length > 1)
      return setResourceType(
        resourceType.filter((category) => category !== resource)
      );

    if (!resourceType.includes(resource))
      return setResourceType([...resourceType, resource]);
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
        <div className="resource__form ">
          <label>Resource Type</label>
          <div className="resource__type">
            {resources.map((resource) => (
              <ResourceType
                customClass="resource__capsule"
                selected={resourceType}
                {...resource}
                SelectCategory={updateResourceType}
              />
            ))}
          </div>
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
            creatable
          />
        </div>
        <button className="btn btn-sm btn-primary">Submit</button>
      </div>
    </>
  );
};

export default AddResources;
