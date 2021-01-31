import React, { useContext } from "react";
import { useSelector } from "react-redux";

import "./Profile.styles.scss";

// Component
import ProfileContributionCard from "../../components/ProfileContributionCard/ProfileContributionCard.component";

const Profile = () => {
  const reduxState = useSelector(({ user }) => ({ user }));

  return (
    <>
      <div className="profile__container container">
        <div className="profile__image">
          <img
            src={reduxState.user.user.profilePic}
            alt="profilePic"
            className="rounded"
          />
          <h3>{reduxState.user.user.fullname}</h3>
          <h5>
            <a
              href={reduxState.user.user.profileUrl}
              className="white"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github fa-lg" />@
              {reduxState.user.user.username}
            </a>
          </h5>
        </div>
        <h2 style={{ textAlign: "center", marginTop: "2rem" }}>
          Your Contributions
        </h2>
        <div className="profile__contents">
          {reduxState.user.user.contribution.map((contributions) => (
            <ProfileContributionCard
              {...contributions}
              key={contributions.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Profile;
