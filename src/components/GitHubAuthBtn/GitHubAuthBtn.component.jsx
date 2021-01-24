import React, { useContext, useEffect } from "react";
import classnames from "classnames";

// styles
import "./GitHubAuthBtn.styles.scss";

// Auth Configs
import {
  firebaseAuth,
  githubAuthProvider,
} from "../../configs/firebase.config";

// Context
import { CurrentUserContext } from "../../context/auth.context";
import { useState } from "react/cjs/react.development";

const GitHubAuthBtn = () => {
  const [dropDown, setDropDown] = useState(false);
  const { isAuth, user, setUser } = useContext(CurrentUserContext);

  useEffect(() => {
    if (localStorage.helloWebDev) {
      const userData = JSON.parse(localStorage.helloWebDev);
      setUser(userData.user, true);
    }
  }, []);

  const githubSignin = async () => {
    try {
      const githubAuth = await firebaseAuth.signInWithPopup(githubAuthProvider);

      const {
        login,
        name,
        html_url,
        avatar_url,
      } = githubAuth.additionalUserInfo.profile;

      const currentUser = {
        username: login,
        fullname: name,
        profileUrl: html_url,
        profilePic: avatar_url,
      };

      setUser(currentUser, true);
    } catch (error) {
      console.log(error);
    }
  };

  const signOutUser = async () => {
    try {
      await firebaseAuth.signOut();
      setUser({}, false);
      localStorage.removeItem("helloWebDev");
    } catch (error) {
      console.log(error);
    }
  };

  return isAuth ? (
    <>
      <div className="profile__data_container">
        <div className="profile__data" onClick={() => setDropDown(!dropDown)}>
          <h5>{user.fullname}</h5>
          <img src={user.profilePic} alt="profile Pic" />
        </div>
        <div className={classnames("profile__dropdown", { hide: !dropDown })}>
          <div className="logout__user" onClick={signOutUser}>
            <h6>Logout</h6>
            <i className="fas fa-sign-out-alt" />
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <button className="btn btn-github" onClick={githubSignin}>
        Sign in with github
        <i className="fab fa-github fa-lg" style={{ marginLeft: ".5rem" }} />
      </button>
    </>
  );
};

export default GitHubAuthBtn;
