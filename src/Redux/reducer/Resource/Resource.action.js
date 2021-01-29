// Types
import {
  GET_RESOURCES,
  GET_CATEGORIES,
  GET_SPECIFIED_RESOURCE,
  ADD_NEW_RESOURCE,
} from "./Resource.type";

// Configs
import { firestore } from "../../../configs/firebase.config";

// Utilities
import { loading, requestSuccess, getCurrentDateTime } from "../../../utils";
import {
  getConditionDataFromFirebase,
  addNewDocumentToFirebase,
  getDataFromFirebase,
} from "../../../utils/firebase/firebase.util";

// Action to get all the resouces from firestore
export const getResources = () => async (dispatch) => {
  try {
    dispatch(loading());
    let addResources = await getDataFromFirebase("resources");

    return dispatch(
      requestSuccess(GET_RESOURCES, {
        libraries: addResources.filter(
          ({ resourceType }) => resourceType === "libraries"
        ),
        codeSnippets: addResources.filter(
          ({ resourceType }) => resourceType === "codeSnippets"
        ),
        courses: addResources.filter(
          ({ resourceType }) => resourceType === "courses"
        ),
        articles: addResources.filter(
          ({ resourceType }) => resourceType === "articles"
        ),
      })
    );
  } catch (error) {
    console.log(error);
  }
};

// Action to get all categories
export const getCategories = () => async (dispatch) => {
  try {
    dispatch(loading());
    let categories = await getDataFromFirebase("categories");

    return dispatch(requestSuccess(GET_CATEGORIES, categories));
  } catch (error) {
    console.log(error);
  }
};

// Action to get specified resource
export const getSpecifiedResource = (id) => async (dispatch) => {
  try {
    dispatch(loading());

    const resource = await getConditionDataFromFirebase("resources", { id });

    return dispatch(requestSuccess(GET_SPECIFIED_RESOURCE, resource));
  } catch (error) {
    console.log(error);
  }
};

// Action to add new resource
export const addNewResource = (newResourceData) => async (dispatch) => {
  try {
    dispatch(loading());
    await addNewDocumentToFirebase("resources", {
      uploadDate: getCurrentDateTime("date"),
      id: Date.now(),
      ...newResourceData,
    });

    let ContributorExist = await getConditionDataFromFirebase("contributors", {
      id: newResourceData.contributor.id,
    });

    if (ContributorExist.length === 0) {
      await addNewDocumentToFirebase("contributors", {
        username: newResourceData.contributor.username,
        image: newResourceData.contributor.image,
        name: newResourceData.contributor.name,
        id: newResourceData.contributor.id,
        contributorType: "resource",
      });
    }

    return dispatch(
      requestSuccess(ADD_NEW_RESOURCE, "Resource succesfully added")
    );
  } catch (error) {
    return console.log(error);
  }
};
