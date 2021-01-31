// types
import {
  GET_PROJECT_CONTRIBUTORS,
  GET_RESOURCE_CONTRIBUTORS,
} from "./Contributors.type";

// Utilities
import { requestSuccess, loading } from "../../../utils";
import { getConditionDataFromFirebase } from "../../../utils/firebase/firebase.util";

// Action to get all resource contributors
export const getResourceContributors = () => async (dispatch) => {
  try {
    dispatch(loading());

    const resourceContributors = await getConditionDataFromFirebase(
      "contributors",
      {
        contributorType: "resource",
      }
    );

    return dispatch(
      requestSuccess(GET_RESOURCE_CONTRIBUTORS, { resourceContributors })
    );
  } catch (error) {
    console.log(error);
  }
};

// Action to get all project contributors
export const getProjectContributors = () => async (dispatch) => {
  try {
    dispatch(loading());
    const projectContributors = await getConditionDataFromFirebase(
      "contributors",
      {
        contributorType: "project",
      }
    );

    return dispatch(
      requestSuccess(GET_PROJECT_CONTRIBUTORS, { projectContributors })
    );
  } catch (error) {
    console.log(error);
  }
};
