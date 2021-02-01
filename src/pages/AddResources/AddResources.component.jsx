import React, { useState, useEffect } from "react";
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
import DarkTextArea from "../../components/DarkInputField/DarkTextArea.component";

// Redux Action
import {
  addNewResource,
  getCategories,
  getLanguages,
  getKeywords,
} from "../../Redux/reducer/Resource/Resource.action";

const AddResources = () => {
  const [ResourceTypeList, setResourceTypeList] = useState([
    { id: "libraries", value: "Usefull Libraries" },
    { id: "snippets", value: "Code Snippets" },
    { id: "courses", value: "Free Courses" },
    { id: "articles", value: "Amazing Articles" },
  ]);
  const [resourceType, setResourceType] = useState("libraries");
  const [categories, setCategories] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [keywords, setKeywords] = useState([]);
  const [newResourceData, setNewResourceData] = useState({
    name: "",
    description: "",
    category: [],
    url: "",
    keywords: [],
    language: "",
  });
  const [error, setError] = useState({ server: "", client: "" });

  const dispatch = useDispatch();
  const reduxState = useSelector(({ user, resources }) => ({
    user,
    resources,
  }));

  useEffect(() => {
    const getCategoriesListAction = async () => {
      const categoriesList = await dispatch(getCategories());
      const keywordsList = await dispatch(getKeywords());
      const languagesList = await dispatch(getLanguages());
      setCategories(categoriesList.payload);
      setKeywords(keywordsList.payload);
      setLanguages(languagesList.payload);
    };
    getCategoriesListAction();
  }, []);

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

  const clearError = () => setError({ server: "", client: "" });

  const submitResources = async () => {
    const isEmpty = Object.keys(newResourceData).filter(
      (obj) => newResourceData[obj] === "" || []
    );
    if (isEmpty.length !== 0) {
      return setError({ server: "", client: isEmpty });
    }

    const newResource = await dispatch(
      addNewResource({
        resourceType,
        contributor: {
          name: reduxState.user.user.fullname,
          image: reduxState.user.user.profilePic,
          id: reduxState.user.user.id,
          username: reduxState.user.user.username,
        },
        ...newResourceData,
      })
    );
    setResourceType("");
    setNewResourceData({
      ...newResourceData,
      name: "",
      description: "",
      url: "",
    });

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
          <label>Select Resource Type</label>
          <div className="resource__type">
            {ResourceTypeList.map((resource) => (
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
            options={languages}
            placeholder="Resource Language"
            creatable
            onFocus={clearError}
            error={error.client.includes("language")}
            errorMsg="Please select a valid language."
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
            onFocus={clearError}
            error={error.client.includes("name")}
            errorMsg="Please add a resource name."
          />
        </div>
        <div className="resource__form">
          <DarkInputFOrm
            label="Resource Official Website / url"
            id="resource"
            type="url"
            placeholder="Eg: https://www.npmjs.com/package/mongoose"
            name="url"
            value={newResourceData.url}
            onChange={handleInput}
            onFocus={clearError}
            error={error.client.includes("url")}
            errorMsg="Please add a resource url."
          />
        </div>
        <div className="resource__form">
          <DarkInputFOrm
            label="Resource thumbnail / image (url)"
            id="resource"
            type="url"
            placeholder="Eg: https://example.com/Blue.png"
            name="thumbnail"
            value={newResourceData.thumbnail}
            onChange={handleInput}
            onFocus={clearError}
            error={error.client.includes("thumbnail")}
            errorMsg="Please add a resource image url."
            disabled={
              !resourceType.includes("courses") &&
              !resourceType.includes("articles")
            }
          />
        </div>
        <div className="resource__form">
          <label style={{ marginBottom: "1rem" }}>Select Resource Type</label>
          <DarkTextArea
            label="Description"
            id="resource"
            type="text"
            placeholder="Eg: Mongoose is a MongoDB object modeling tool....."
            name="description"
            value={newResourceData.description}
            onChange={handleInput}
            onFocus={clearError}
            error={error.client.includes("description")}
            errorMsg="Please add a resource description."
          ></DarkTextArea>
        </div>
        <div className="resource__form">
          <DarkSelectField
            label="Category"
            handleChange={handleCategories}
            options={categories}
            placeholder="Select a category"
            creatable
            onFocus={clearError}
            error={error.client.includes("category")}
            errorMsg="Please select a resource category."
          />
        </div>
        <div className="resource__form">
          <DarkSelectField
            label="Keywords"
            handleChange={handleKeywords}
            options={keywords}
            placeholder="Add some valid keywords"
            creatable
            onFocus={clearError}
            error={error.client.includes("keywords")}
            errorMsg="Please add some valid keywords."
          />
        </div>
        <button className="btn btn-sm btn-primary" onClick={submitResources}>
          {reduxState.resources.loading ? (
            <i className="fas fa-spinner fa-pulse fa-lg white" />
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </>
  );
};

export default AddResources;
