// types
import {
  GET_PROJECT_CONTRIBUTORS,
  GET_RESOURCE_CONTRIBUTORS,
} from "./Contributors.type";

const INITIAL_STATE = {
  resourceContributors: [],
  projectContributors: [],
  loading: false,
};

const contributorsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };

    case GET_RESOURCE_CONTRIBUTORS:
      return {
        ...state,
        resourceContributors: [
          ...state.resourceContributors,
          ...action.payload.resourceContributors,
        ],
        loading: false,
      };

    case GET_PROJECT_CONTRIBUTORS:
      return {
        ...state,
        resourceContributors: [
          ...state.resourceContributors,
          ...action.payload.projectContributors,
        ],
        loading: false,
      };

    default:
      return {
        ...state,
        loading: false,
      };
  }
};

export default contributorsReducer;
