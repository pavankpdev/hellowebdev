import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";

import "./ResourceDetail.styles.scss";

// Components
import CategoryBagde from "../../components/CategoryCapsule/CategoryCapsule.component";
import Spinner from "../../components/Spinner.component";

// Redux Action
import { getSpecifiedResource } from "../../Redux/reducer/Resource/Resource.action";

const ResourceDetail = () => {
  const [resource, setResource] = useState({
    name: "",
    description: "",
    category: [],
    url: "",
    contributor: "",
    language: "",
    resourceType: "",
  });
  const [emptyResult, setEmptyResult] = useState("");

  const dispatch = useDispatch();
  const { id } = useParams();

  // Redux state
  const reduxState = useSelector(({ resources }) => ({ resources }));

  useEffect(() => {
    const getDataAction = async () => {
      const getResources = await dispatch(getSpecifiedResource(parseInt(id)));
      if (getResources.payload.length !== 0)
        return setResource(getResources.payload[0]);

      return setEmptyResult(
        "We didn't find the resource that you're looking for. 🙁"
      );
    };
    getDataAction();
  }, []);

  return (
    <>
      <div className={classnames({ hide: !reduxState.resources.loading })}>
        <Spinner />
      </div>
      <div
        className={classnames("resource__details__container rounded", {
          hide: reduxState.resources.loading,
        })}
      >
        {emptyResult ? (
          <>
            <h2>{emptyResult}</h2>
          </>
        ) : (
          <>
            {resource.thumbnail && (
              <img src={resource.thumbnail} alt="thumbnail" />
            )}
            <CategoryBagde
              value={resource.language}
              selected={resource.language}
              id={resource.language}
              SelectCategory={() => {}}
              customClass="resource__capsule"
            />
            <h2 className="resource__details__title">{resource.name}</h2>
            <div className="resource__details__actions">
              <div className="contributor__data">
                <img
                  src={resource.contributor.image}
                  alt="contributor avatar"
                />
                <h6>{resource.contributor.name}</h6>
              </div>
              <a href={resource.url}>
                <button className="btn btn-primary">Visit this resource</button>
              </a>
            </div>
            <div className="resource__details__description">
              <p>{resource.description}</p>
              <div className="resource__categories">
                {resource.category.map((categoryList) => (
                  <CategoryBagde
                    value={categoryList}
                    selected={["categoryList"]}
                    id={categoryList}
                    SelectCategory={() => {}}
                    customClass="resource__capsule"
                    key={categoryList.id}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ResourceDetail;
