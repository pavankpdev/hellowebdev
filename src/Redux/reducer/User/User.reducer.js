// Action Types
import {
  AUTH_USER,
  SIGN_OUT_USER,
  UPDATE_RESOURCE_CONTRIBUTION,
} from "./User.type";
import { REHYDRATE } from "../../../utils";

const INITIAL_STATE = {
  user: {
    id: 0,
    fullname: " ",
    username: "",
    image: "",
    url: "",
    contribution: [],
  },
  isAuth: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };

    case UPDATE_RESOURCE_CONTRIBUTION:
      return {
        ...state,
        user: {
          ...state.user,
          contribution: [...state.user.contribution, action.payload],
        },
        isAuth: true,
      };

    case SIGN_OUT_USER:
      return {
        ...state,
        user: {
          id: 0,
          fullname: " ",
          username: "",
          image: "",
          url: "",
          contribution: [],
        },
        isAuth: false,
      };

    case REHYDRATE:
      return action.payload ? action.payload.user : INITIAL_STATE;

    default:
      return {
        ...state,
        loading: false,
      };
  }
};

export default userReducer;
