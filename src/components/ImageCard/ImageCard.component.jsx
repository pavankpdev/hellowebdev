import React from "react";
import { Link } from "react-router-dom";

import "./ImageCard.styles.scss";

const ImageCard = ({
  thumbnail,
  name,
  description,
  contributor,
  id,
  ...props
}) => {
  return (
    <>
      <div className="image__card__container">
        <div className="image__card__card rounded">
          <img src={thumbnail} alt="thumbnail" />
          <div className="image__card__card__content">
            <h3
              className="image__card__card__header"
              data-toggle="tooltip"
              title={name}
            >
              {name}
            </h3>
            <div className="image__card__card__body">
              <p>{description}</p>
              <Link to={`/resource/${id}`}>
                <button className="btn btn-sm btn-primary">Learn more</button>
              </Link>
            </div>
            <div className="image__card__card__footer">
              <h5>Listed By</h5>
              <div className="image__card__card__footer__contributor__info">
                <img src={contributor.image} alt="contributor avatar" />
                <h5>{contributor.name}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageCard;
