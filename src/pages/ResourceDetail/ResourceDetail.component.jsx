import React from "react";
import { useLocation } from "react-router-dom";

import "./ResourceDetail.styles.scss";

// Components
import CategoryBagde from "../../components/CategoryCapsule/CategoryCapsule.component";

const ResourceDetail = () => {
  const location = useLocation();
  const {
    name,
    description,
    category,
    url,
    contributor,
    language,
    btnText,
  } = location.state;
  return (
    <>
      <div className="resource__details__container rounded">
        {location.state.thumbnail && (
          <img src={location.state.thumbnail} alt="thumbnail" />
        )}
        <CategoryBagde
          value={language}
          selected={language}
          id={language}
          SelectCategory={() => {}}
          customClass="resource__capsule"
        />
        <h2 className="resource__details__title">{name}</h2>
        <div className="resource__details__actions">
          <div className="contributor__data">
            <img src={contributor.image} alt="contributor avatar" />
            <h6>{contributor.name}</h6>
          </div>
          <a href={url}>
            <button className="btn btn-primary">{btnText}</button>
          </a>
        </div>
        <div className="resource__details__description">
          <p>{description}</p>
          <div className="resource__categories">
            {category.map((categoryList) => (
              <CategoryBagde
                value={categoryList}
                selected={["categoryList"]}
                id={categoryList}
                SelectCategory={() => {}}
                customClass="resource__capsule"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ResourceDetail;
