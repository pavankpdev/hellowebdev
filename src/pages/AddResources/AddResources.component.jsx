import React, { useEffect, useState } from "react";
import classnames from "classnames";

// Styles
import "./AddResources.styles.scss";

// Components
import DarkInputFOrm from "../../components/DarkInputField/DarkInputField.component";
import DarkSelectField from "../../components/DarkInputField/DarkSelectField.component";
import ResourceType from "../../components/CategoryCapsule/CategoryCapsule.component";

import { colourOptions, resources } from "../../utils/data";

const AddResources = () => {
  const [resourceType, setResourceType] = useState("");
  const [newResourceData, setNewResourceData] = useState({
    type: "",
    name: "",
    description: "",
    category: [],
    url: "",
    contributor: {
      name: "",
      image: "",
    },
    keywords: [],
    language: "",
  });

  const handleCategories = (newValue) =>
    setNewResourceData({
      ...newResourceData,
      category: newValue.map(({ value }) => value),
    });

  const handleKeywords = (newValue) =>
    setNewResourceData({
      ...newResourceData,
      keywords: newValue.map(({ value }) => value),
    });

  const handleLanguage = (newValue) =>
    setNewResourceData({
      ...newResourceData,
      language: newValue.map(({ value }) => value),
    });

  const handleInput = (e) =>
    setNewResourceData({
      ...newResourceData,
      [e.target.name]: e.target.value,
    });

  const submitResources = () =>
    console.log({ type: resourceType, ...newResourceData });
  console.log(resourceType);
  return (
    <>
      <div className="add__new__container rounded">
        <h4>Add New Resource</h4>
        <div className="resource__form ">
          <label>Resource Type</label>
          <div className="resource__type">
            {resources.map((resource) => (
              <ResourceType
                customClass="resource__capsule"
                selected={resourceType}
                {...resource}
                SelectCategory={setResourceType}
                key={resource.id}
              />
            ))}
          </div>
        </div>
        <div className="resource__form">
          <DarkSelectField
            label="Language"
            handleChange={handleLanguage}
            options={colourOptions}
            placeholder="Resource Language"
            creatable
          />
        </div>
        <div className="resource__form">
          <DarkInputFOrm
            label="Resource Name"
            id="resource"
            type="text"
            placeholder="Eg: Mongoose"
            name="name"
            value={newResourceData.name}
            onChange={handleInput}
          />
        </div>
        <div className="resource__form">
          <DarkInputFOrm
            label="Resource Official Website / url"
            id="resource"
            type="text"
            placeholder="Eg: https://www.npmjs.com/package/mongoose"
            name="url"
            value={newResourceData.url}
            onChange={handleInput}
          />
        </div>
        <div
          className={classnames("resource__form", {
            hide: !resourceType.includes("courses"),
          })}
        >
          <DarkInputFOrm
            label="Resource thumbnail / image (url)"
            id="resource"
            type="url"
            placeholder="Eg: https://example.com/Blue.png"
            name="thumbnail"
            value={newResourceData.thumbnail}
            onChange={handleInput}
          />
        </div>
        <div
          className={classnames("resource__form", {
            hide: !resourceType.includes("articles"),
          })}
        >
          <DarkInputFOrm
            label="Resource thumbnail / image (url)"
            id="resource"
            type="url"
            placeholder="Eg: https://example.com/Blue.png"
            name="thumbnail"
            value={newResourceData.thumbnail}
            onChange={handleInput}
          />
        </div>
        <div className="resource__form">
          <DarkInputFOrm
            label="Description"
            id="resource"
            type="text"
            placeholder="Eg: Mongoose is a MongoDB object modeling tool....."
            name="description"
            value={newResourceData.description}
            onChange={handleInput}
          />
        </div>
        <div className="resource__form">
          <DarkSelectField
            label="Category"
            handleChange={handleCategories}
            options={colourOptions}
            placeholder="Select a category"
            creatable
          />
        </div>
        <div className="resource__form">
          <DarkSelectField
            label="Keywords"
            handleChange={handleKeywords}
            options={colourOptions}
            placeholder="Add some valid keywords"
            creatable
          />
        </div>
        <button className="btn btn-sm btn-primary" onClick={submitResources}>
          Submit
        </button>
      </div>
    </>
  );
};

export default AddResources;
