import React from "react";
import { Link } from "react-router-dom";

import "./NonImageCard.styles.scss";

const NonImageCard = ({
  name,
  description,
  url,
  contributor,
  btnText,
  ...props
}) => {
  return (
    <>
      <div className="library__container">
        <div className="library__card rounded">
          <h3
            className="library__card__header"
            data-toggle="tooltip"
            title={name}
          >
            {name}
          </h3>
          <div className="library__card__body">
            <p>{description}</p>
            <Link
              to={{
                pathname: "/resource/123",
                state: {
                  name,
                  description,
                  url,
                  contributor,
                  btnText,
                  ...props,
                },
              }}
            >
              <button className="btn btn-sm btn-primary">Learn more</button>
            </Link>
          </div>
          <div className="library__card__footer">
            <h5>Listed By</h5>
            <div className="library__card__footer__contributor__info">
              <img src={contributor.image} alt="contributor avatar" />
              <h5>{contributor.name}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NonImageCard;
