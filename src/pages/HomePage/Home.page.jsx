import React, { useState } from "react";

// styles
import "./Home.styles.scss";

// Components
import SideBar from "../../components/SideBar/SideBar.component";
import CategoryList from "../../components/CategoryCapsule/CategoryCapsule.component";
import NonImageCard from "../../components/NonImageCard/NonImageCard.component";
import ImageCard from "../../components/ImageCard/ImageCard.component";

// Sample data
import {
  usefullLibraries,
  codeSnippetss,
  amazingArticless,
  freeCoursess,
  categoriess,
} from "../../utils/data";

const Home = () => {
  const [categories, setCategories] = useState(categoriess);
  const [filter, setFilter] = useState(["react"]);
  const [usefulLibraries, setUsefulLibraries] = useState(usefullLibraries);
  const [codeSnippets, setCodeSnippets] = useState(codeSnippetss);
  const [freeCourses, setFreeCourses] = useState(freeCoursess);
  const [amazingArticles, setAmazingArticles] = useState(amazingArticless);

  const SelectCategory = (id) => {
    if (filter.includes(id) && filter.length > 1)
      return setFilter(filter.filter((category) => category !== id));

    if (!filter.includes(id)) return setFilter([...filter, id]);

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
                selected={filter}
                {...category}
                SelectCategory={SelectCategory}
              />
            ))}
          </div>
          <div className="usefull__libraries">
            <h2 className="library__title">Usefull Libraries</h2>
            <div className="home__library__card__container">
              {usefulLibraries.map((library) => (
                <NonImageCard {...library} />
              ))}
            </div>
          </div>
          <div className="code__snippet">
            <h2 className="code__snippet__title">Code Snippets</h2>
            <div className="home__codesnippet__card__container">
              {codeSnippets.map((snippet) => (
                <NonImageCard {...snippet} />
              ))}
            </div>
          </div>
          <div className="free__courses">
            <h2 className="free__courses__title">Free Courses</h2>
            <div className="home__free__courses__card__container">
              {freeCourses.map((course) => (
                <ImageCard {...course} />
              ))}
            </div>
          </div>
          <div className="amazing__articles">
            <h2 className="amazing__articles__title">Amazing articles</h2>
            <div className="home__amazing__articles__card__container">
              {amazingArticles.map((article) => (
                <ImageCard {...article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
