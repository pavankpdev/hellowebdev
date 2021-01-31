import React from "react";
import { Link } from "react-router-dom";

import "./ProfileContributionCard.styles.scss";

const ProfileContributionCard = ({ name, description, resourceId, ...props }) => {
  return (
    <>
      <div className="profile__contribution__card__container">
        <div className="profile__contribution__card__card rounded">
          <h3
            className="profile__contribution__card__card__header"
            data-toggle="tooltip"
            title={name}
          >
            {name}
          </h3>
          <div className="profile__contribution__card__card__body">
            <p>{description}</p>
            <Link to={`/resource/${resourceId}`}>
              <button className="btn btn-sm btn-primary">Learn more</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileContributionCard;
