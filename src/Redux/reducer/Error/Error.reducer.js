import { GET_ERROR } from "./Error.type";

const INITIAL_STATE = { server: "" };

const errorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ERROR:
      return { ...state, server: action.payload };
    default:
      return state;
  }
};

export default errorReducer;
