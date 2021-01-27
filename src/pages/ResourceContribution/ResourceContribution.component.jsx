import React from "react";
import "./ResourceContribution.style.scss";

import { resourceContributors } from "../../utils/data";

const ResourceContribution = () => {
  return (
    <>
      <div className="resource__contribution__container container">
        <h1 className="resource__contribution__hero__text ">
          Resource Contributors
        </h1>
        <p>
          Our Resource Contributors Wall is a place to show recognition to those
          individuals who took their time to list useful resources here, which
          would ease the development process for the web devs out there.
        </p>

        <div className="resource__contribution__card rounded">
          {resourceContributors.map(({ username, image, name }) => (
            <div className="resource__contribution__profile">
              <a
                href={`https://github.com/${username}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src={image} alt="profile" className="rounded" />
                <h3>{name}</h3>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ResourceContribution;
