// Action Types
import { AUTH_USER } from "./User.type";
import { REHYDRATE } from "../../../utils";

const INITIAL_STATE = {
  fullname: " ",
  username: "",
  image: "",
  url: "",
  contribution: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        ...action.payload,
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
