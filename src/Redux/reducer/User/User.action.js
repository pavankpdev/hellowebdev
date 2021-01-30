// Types
import { AUTH_USER, SIGN_OUT_USER } from "./User.type";

// Configs
import { firestore } from "../../../configs/firebase.config";

// Utilities
import { loading, requestSuccess } from "../../../utils";

// Action to authenticate user
export const authUser = ({
  id,
  username,
  fullname,
  profileUrl,
  profilePic,
}) => async (dispatch) => {
  // check if the user already exist in database
  let userList = [];
  let usernamesList = [];
  const user_snapshot = await firestore.collection("users").get();

  // Processing the snapshot from firesbase
  user_snapshot.docs.map((doc) => (userList = [...userList, doc.data()]));
  usernamesList = userList.map(({ username }) => username);

  if (usernamesList.includes(username)) {
    const currentUser = userList.filter((user) => user.username === username);
    return dispatch(requestSuccess(AUTH_USER, currentUser[0]));
  } else {
    firestore.collection("users").add({
      id,
      username,
      fullname,
      profileUrl,
      profilePic,
      contribution: [],
    });
    return dispatch(
      requestSuccess(AUTH_USER, {
        id,
        username,
        fullname,
        profileUrl,
        profilePic,
        contribution: [],
      })
    );
  }
};

// Action to signout user
export const signOut = () => (dispatch) =>
  dispatch(requestSuccess(SIGN_OUT_USER, {}));
