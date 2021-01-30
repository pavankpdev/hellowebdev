// Types
import {
  GET_RESOURCES,
  GET_CATEGORIES,
  GET_SPECIFIED_RESOURCE,
  ADD_NEW_RESOURCE,
  ADD_NEW_CATEGORY,
  ADD_NEW_LANGUAGE,
  ADD_NEW_KEYWORDS,
  GET_KEYWORDS,
  GET_LANGUAGE,
} from "./Resource.type";
import { REHYDRATE } from "../../../utils";

const INITIAL_STATE = {
  resources: { libraries: [], codeSnippets: [], courses: [], articles: [] },
  loading: false,
  categories: [],
  selected: [],
  language: [],
  keywords: [],
  newResourceStatus: "",
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

    case GET_KEYWORDS:
      return {
        ...state,
        keywords: action.payload,
        loading: false,
      };

    case GET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
        loading: false,
      };

    case GET_SPECIFIED_RESOURCE:
      return {
        ...state,
        selected: action.payload,
        loading: false,
      };

    case ADD_NEW_RESOURCE:
      return {
        ...state,
        newResourceStatus: action.payload,
        loading: false,
      };

    case ADD_NEW_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, ...action.payload.category],
        loading: false,
      };

    case ADD_NEW_LANGUAGE:
      return {
        ...state,
        language: [...state.language, ...action.payload.language],
        loading: false,
      };

    case ADD_NEW_KEYWORDS:
      return {
        ...state,
        keywords: [...state.keywords, ...action.payload.keywords],
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
