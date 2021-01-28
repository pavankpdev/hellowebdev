// Action Types
import { AUTH_USER } from "./User.type";

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

    default:
      return {
        ...state,
        loading: false,
      };
  }
};

export default userReducer;
