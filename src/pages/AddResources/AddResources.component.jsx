import React, { useState } from "react";
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

// Styles
import "react-toastify/dist/ReactToastify.css";
import "./AddResources.styles.scss";

// Components
import DarkInputFOrm from "../../components/DarkInputField/DarkInputField.component";
import DarkSelectField from "../../components/DarkInputField/DarkSelectField.component";
import ResourceType from "../../components/CategoryCapsule/CategoryCapsule.component";

// Redux Action
import { addNewResource } from "../../Redux/reducer/Resource/Resource.action";

import { colourOptions, resources } from "../../utils/data";

const AddResources = () => {
  const [resourceType, setResourceType] = useState("");
  const [newResourceData, setNewResourceData] = useState({
    name: "",
    description: "",
    category: [],
    url: "",
    keywords: [],
    language: "",
  });

  const dispatch = useDispatch();
  const reduxState = useSelector(({ user }) => ({ user }));

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

  const submitResources = async () => {
    const newResource = await dispatch(
      addNewResource({
        resourceType,
        contributor: {
          name: reduxState.user.user.fullname,
          image: reduxState.user.user.profilePic,
          id: reduxState.user.user.id,
        },
        ...newResourceData,
      })
    );

    return toast.success(newResource.payload, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <ToastContainer />
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
