// Types
import { GET_RESOURCES, GET_CATEGORIES } from "./Resource.type";
import { REHYDRATE } from "../../../utils";

const INITIAL_STATE = {
  resources: { libraries: [], codeSnippets: [], courses: [], articles: [] },
  loading: false,
  categories: [],
};

const resourceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };

    case GET_RESOURCES:
      return {
        ...state,
        resources: action.payload,
        loading: false,
      };

    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };

    case REHYDRATE:
      return action.payload ? action.payload.resources : INITIAL_STATE;

    default:
      return {
        ...state,
        loading: false,
      };
  }
};

export default resourceReducer;
