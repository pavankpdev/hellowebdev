import React from "react";
import "./ProjectContribution.styles.scss";

import { contributors as fakeData } from "../../utils/data";

const ProjectContribution = () => {
  return (
    <>
      <div className="project__contribution__container container">
        <h1 className="project__contribution__hero__text ">
          Project Contributors
        </h1>
        <p>
          Our Project Contributors Wall is a place to show recognition to those
          individuals who took their time to build this project and made it a
          better place to find resources for web devs out there.
        </p>

        <div className="project__contribution__card rounded">
          {fakeData.map(({ username, image, name }) => (
            <div className="project__contribution__profile">
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

export default ProjectContribution;
