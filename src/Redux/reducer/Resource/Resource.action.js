// Library
import uniqBy from "lodash/uniqBy";

// Types
import {
  GET_RESOURCES,
  GET_CATEGORIES,
  GET_SPECIFIED_RESOURCE,
  ADD_NEW_RESOURCE,
  ADD_NEW_CATEGORY,
  ADD_NEW_KEYWORDS,
  ADD_NEW_LANGUAGE,
  GET_LANGUAGE,
  GET_KEYWORDS,
} from "./Resource.type";
import { UPDATE_RESOURCE_CONTRIBUTION } from "../User/User.type";

// Utilities
import { loading, requestSuccess } from "../../../utils";
import {
  getConditionDataFromFirebase,
  getDataFromFirebase,
} from "../../../utils/firebase/firebase.util";

// Worker Functions
import {
  addNewResourceData,
  updateContributorData,
  updateCategories,
  updateKeywords,
  updateUserContributionData,
  updateLanguage,
} from "./Resource.worker";

// Error handling reducer
import { requestfailed } from "../Error/Error.action";

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
    return dispatch(requestfailed(error));
  }
};

// Action to get all categories
export const getCategories = () => async (dispatch) => {
  try {
    dispatch(loading());
    let categories = await getDataFromFirebase("categories");

    categories = uniqBy(categories, "id");
    return dispatch(requestSuccess(GET_CATEGORIES, categories));
  } catch (error) {
    return dispatch(requestfailed(error));
  }
};

// Action to get all keywords
export const getKeywords = () => async (dispatch) => {
  try {
    dispatch(loading());
    let keywords = await getDataFromFirebase("keywords");

    keywords = uniqBy(keywords, "id");
    return dispatch(requestSuccess(GET_KEYWORDS, keywords));
  } catch (error) {
    return dispatch(requestfailed(error));
  }
};

// Action to get all languages
export const getLanguages = () => async (dispatch) => {
  try {
    dispatch(loading());
    let languages = await getDataFromFirebase("languages");

    languages = uniqBy(languages, "id");
    return dispatch(requestSuccess(GET_LANGUAGE, languages));
  } catch (error) {
    return dispatch(requestfailed(error));
  }
};

// Action to get specified resource
export const getSpecifiedResource = (id) => async (dispatch) => {
  try {
    dispatch(loading());

    const resource = await getConditionDataFromFirebase("resources", { id });

    return dispatch(requestSuccess(GET_SPECIFIED_RESOURCE, resource));
  } catch (error) {
    return dispatch(requestfailed(error));
  }
};

// Action to add new resource
export const addNewResource = (newResourceData) => async (dispatch) => {
  try {
    dispatch(loading());

    const currentResourceID = `${Date.now()}`;

    await addNewResourceData(newResourceData, currentResourceID);

    await updateContributorData(newResourceData);

    await updateUserContributionData(newResourceData, currentResourceID);

    await updateCategories(newResourceData);

    await updateKeywords(newResourceData);

    await updateLanguage(newResourceData);

    dispatch(
      requestSuccess(ADD_NEW_CATEGORY, { category: newResourceData.category })
    );
    dispatch(
      requestSuccess(ADD_NEW_KEYWORDS, { keywords: newResourceData.keywords })
    );
    dispatch(
      requestSuccess(ADD_NEW_LANGUAGE, {
        language: newResourceData.language.map((lang) => ({
          id: lang.toLowerCase(),
          label: lang.toLowerCase(),
          value: lang,
        })),
      })
    );

    dispatch(
      requestSuccess(UPDATE_RESOURCE_CONTRIBUTION, {
        resourceType: newResourceData.resourceType,
        resourceId: currentResourceID,
        name: newResourceData.name,
        description: newResourceData.description,
      })
    );

    return dispatch(
      requestSuccess(ADD_NEW_RESOURCE, "Resource succesfully added")
    );
  } catch (error) {
    return dispatch(requestfailed(error));
  }
};
