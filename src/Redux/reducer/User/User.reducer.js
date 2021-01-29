// Action Types
import { AUTH_USER, SIGN_OUT_USER } from "./User.type";
import { REHYDRATE } from "../../../utils";

const INITIAL_STATE = {
  user: { fullname: " ", username: "", image: "", url: "", contribution: [] },
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

    case SIGN_OUT_USER:
      return {
        ...state,
        user: {
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
