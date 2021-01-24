import React from "react";

import "./NonImageCard.styles.scss";

const NonImageCard = ({
  header,
  body,
  path,
  contributorAvatar,
  contributorName,
}) => {
  return (
    <>
      <div className="library__container">
        <div className="library__card rounded">
          <h3
            className="library__card__header"
            data-toggle="tooltip"
            title={header}
          >
            {header}
          </h3>
          <div className="library__card__body">
            <p>{body}</p>
            <button className="btn btn-sm btn-primary">Learn more</button>
          </div>
          <div className="library__card__footer">
            <h5>Listed By</h5>
            <div className="library__card__footer__contributor__info">
              <img src={contributorAvatar} alt="contributor avatar" />
              <h5>{contributorName}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NonImageCard;
