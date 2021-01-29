// Types
import {
  GET_RESOURCES,
  GET_CATEGORIES,
  GET_SPECIFIED_RESOURCE,
} from "./Resource.type";

// Configs
import { firestore } from "../../../configs/firebase.config";

// Utilities
import { loading, requestSuccess } from "../../../utils";

// Action to get all the resouces from firestore
export const getResources = () => async (dispatch) => {
  try {
    dispatch(loading());
    let addResources = [];
    const resource_snapshot = await firestore.collection("resources").get();

    // Processing the snapshot from firesbase
    resource_snapshot.docs.map(
      (doc) => (addResources = [...addResources, doc.data()])
    );

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
    let categories = [];
    const categories_snapshot = await firestore.collection("categories").get();

    // Processing the snapshot from firesbase
    categories_snapshot.docs.map(
      (doc) => (categories = [...categories, doc.data()])
    );

    return dispatch(requestSuccess(GET_CATEGORIES, categories));
  } catch (error) {
    console.log(error);
  }
};

// Action to get specified resource
export const getSpecifiedResource = (id) => async (dispatch) => {
  try {
    dispatch(loading());
    let resource = [];
    const resource_snapshot = await firestore
      .collection("resources")
      .where("id", "==", id)
      .get();

    // Processing the snapshot from firesbase
    resource_snapshot.docs.map((doc) => (resource = [...resource, doc.data()]));

    return dispatch(requestSuccess(GET_SPECIFIED_RESOURCE, resource));
  } catch (error) {
    console.log(error);
  }
};
