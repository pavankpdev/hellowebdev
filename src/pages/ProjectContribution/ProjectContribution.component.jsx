import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./ProjectContribution.styles.scss";

// Component
import Spinner from "../../components/Spinner.component";

// Redux action
import { getProjectContributors } from "../../Redux/reducer/Contributors/Contributors.action";

const ProjectContribution = () => {
  const [projectContributors, setProjectContributors] = useState([]);

  const dispatch = useDispatch();
  const reduxstate = useSelector(({ contributors }) => ({ contributors }));

  useEffect(() => {
    const getProjectContributorsAction = async () => {
      const getContributors = await dispatch(getProjectContributors());
      setProjectContributors(getContributors.payload.projectContributors);
    };
    getProjectContributorsAction();
  }, []);

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
          {reduxstate.contributors.loading ? (
            <Spinner />
          ) : (
            projectContributors.map(({ username, image, name, id }) => (
              <div className="project__contribution__profile" key={id}>
                <a
                  href={`https://github.com/${username}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={image} alt="profile" className="rounded" />
                  <h3>{name}</h3>
                </a>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectContribution;
