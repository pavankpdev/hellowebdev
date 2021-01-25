import React from "react";
import "./ResourceContribution.style.scss";

const ResourceContribution = () => {
  const fakeData = [
    {
      username: "pavankpdev",
      image: "https://avatars.githubusercontent.com/u/52795191?v=4",
      name: "Pavan Kumar",
    },
    {
      username: "DevNM21",
      image: "https://avatars.githubusercontent.com/u/46824652?v=4",
      name: "Devakumar",
    },
    {
      username: "sreeharshabalaji",
      image: "https://avatars.githubusercontent.com/u/61697100?v=4",
      name: "Sree Harsha R",
    },
    {
      username: "thebestestkhan",
      image: "https://avatars.githubusercontent.com/u/61203329?v=4",
      name: "Abdul Rawoof Khan",
    },
    {
      username: "iBharath01",
      image: "https://avatars.githubusercontent.com/u/61697610?v=4",
      name: "Bharath M U",
    },
  ];
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
          {fakeData.map(({ username, image, name }) => (
            <div className="resource__contribution__profile">
              <a href={`https://github.com/${username}`} target="_blank">
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
