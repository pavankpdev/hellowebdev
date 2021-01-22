import React, { useState } from "react";

// styles
import "./Home.styles.scss";

// Components
import SideBar from "../../components/SideBar/SideBar.component";
import CategoryList from "../../components/CategoryCapsule/CategoryCapsule.component";

const Home = () => {
  const [categories, setCategories] = useState([
    { id: "react", value: "ReactJS" },
    { id: "firebase", value: "Firebase" },
    { id: "node", value: "nodeJS" },
    { id: "mysql", value: "MySQL" },
    { id: "mongodb", value: "MongoDB" },
  ]);
  const [selected, setSelected] = useState(["react"]);

  const SelectCategory = (id) => {
    if (selected.includes(id) && selected.length > 1)
      return setSelected(selected.filter((category) => category !== id));

    if (!selected.includes(id)) return setSelected([...selected, id]);

    return;
  };

  return (
    <>
      <h1 className="hero__text container">
        Curated Collection of all web development resources in one place.
      </h1>
      <div className="hero__button__group container">
        <a
          href="https://github.com/pavankpdev/web-dev-repo"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn">
            Contribute to project
            <i
              className="fab fa-github fa-lg"
              style={{ marginLeft: ".5rem" }}
            />
          </button>
        </a>
        <button className="btn">
          Submit a resource
          <i className="fas fa-plus fa-lg" style={{ marginLeft: ".5rem" }} />
        </button>
        <a
          href="https://github.com/pavankpdev/web-dev-repo"
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn">
            gitHub{" "}
            <i className="fas fa-star fa-lg" style={{ margin: "0 .5rem" }} />
            123
          </button>
        </a>
      </div>
      <div className="home__content container-fluid">
        <div className="home__sidebar__container">
          <SideBar />
        </div>
        <div className="home__resources__container">
          <div className="category__container">
            {categories.map((category) => (
              <CategoryList
                selected={selected}
                {...category}
                SelectCategory={SelectCategory}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
