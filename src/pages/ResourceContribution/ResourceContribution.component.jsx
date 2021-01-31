import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./ResourceContribution.style.scss";

// Component
import Spinner from "../../components/Spinner.component";

// Redux action
import { getResourceContributors } from "../../Redux/reducer/Contributors/Contributors.action";

const ResourceContribution = () => {
  const [resourceContributors, setResourceContributors] = useState([]);

  const dispatch = useDispatch();
  const reduxstate = useSelector(({ contributors }) => ({ contributors }));

  useEffect(() => {
    const getResourceContributorsAction = async () => {
      const getContributors = await dispatch(getResourceContributors());
      setResourceContributors(getContributors.payload.resourceContributors);
    };
    getResourceContributorsAction();
  }, []);

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
          {reduxstate.contributors.loading ? (
            <Spinner />
          ) : (
            resourceContributors.map(({ username, image, name, id }) => (
              <div className="resource__contribution__profile" key={id}>
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

export default ResourceContribution;
