import React from "react";
import { Link } from "react-router-dom";
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
          {reduxState.user.user.contribution.length > 0 ? (
            reduxState.user.user.contribution.map((contributions) => (
              <ProfileContributionCard
                {...contributions}
                key={contributions.id}
              />
            ))
          ) : (
            <p>
              You can start contributing <Link className="danger" to="/new-resource">here</Link>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
