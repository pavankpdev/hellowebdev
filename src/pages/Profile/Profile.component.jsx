import React, { useContext } from "react";
import {useSelector } from "react-redux";

import "./Profile.styles.scss";

// Component
import NonImageCard from "../../components/NonImageCard/NonImageCard.component";

import { homeData } from "../../utils/data";
const Profile = () => {
  const reduxState = useSelector(({ user }) => ({ user }));

  return (
    <>
      <div className="profile__container container">
        <div className="profile__image">
          <img src={reduxState.user.user.profilePic} alt="profilePic" className="rounded" />
          <h3>{reduxState.user.user.fullname}</h3>
          <h5>
            <a
              href={reduxState.user.user.profileUrl}
              className="white"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github fa-lg" />@{reduxState.user.user.username}
            </a>
          </h5>
        </div>
        <div className="profile__contents">
          {homeData.libraries.map((library) => (
            <NonImageCard {...library} key={library.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
