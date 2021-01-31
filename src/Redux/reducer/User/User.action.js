// Types
import { AUTH_USER, SIGN_OUT_USER } from "./User.type";

// Utilities
import {  requestSuccess } from "../../../utils";
import {
  getConditionDataFromFirebase,
  addNewDocumentToFirebase,
  getDocumentID,
} from "../../../utils/firebase/firebase.util";

// Action to authenticate user
export const authUser = (userData) => async (dispatch) => {

  const { username } = userData;
  
  // check if the user already exist in database
  const doesUserExist = await getDocumentID("users", {
    username,
  });

  if (doesUserExist) {
    const currentUser = await getConditionDataFromFirebase("users", {
      username,
    });
    return dispatch(requestSuccess(AUTH_USER, currentUser[0]));
  } else {
    await addNewDocumentToFirebase("users", userData);
    return dispatch(requestSuccess(AUTH_USER, userData));
  }
};

// Action to signout user
export const signOut = () => (dispatch) =>
  dispatch(requestSuccess(SIGN_OUT_USER, {}));
