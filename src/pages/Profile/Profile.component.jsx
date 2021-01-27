import React, { useContext } from "react";

import "./Profile.styles.scss";

// Context
import { CurrentUserContext } from "../../context/auth.context";

// Component
import NonImageCard from "../../components/NonImageCard/NonImageCard.component";

import { homeData } from "../../utils/data";
const Profile = () => {
  const { user } = useContext(CurrentUserContext);
  return (
    <>
      <div className="profile__container container">
        <div className="profile__image">
          <img src={user.profilePic} alt="profilePic" className="rounded" />
          <h3>{user.fullname}</h3>
          <h5>
            <a
              href={user.profileUrl}
              className="white"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github fa-lg" />@{user.username}
            </a>
          </h5>
        </div>
        <div className="profile__contents">
          {homeData.libraries.map((library) => (
            <NonImageCard {...library} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
