import React from "react";
import "./ProjectContribution.styles.scss";

const ProjectContribution = () => {
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
              <a href={`https://github.com/${username}`} target="_blank" >
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
