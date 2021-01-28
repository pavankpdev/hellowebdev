import React, { useState, useEffect } from "react";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";
import { Link } from "react-router-dom";

// styles
import "./Home.styles.scss";

// Components
import SideBar from "../../components/SideBar/SideBar.component";
import CategoryList from "../../components/CategoryCapsule/CategoryCapsule.component";
import NonImageCard from "../../components/NonImageCard/NonImageCard.component";
import ImageCard from "../../components/ImageCard/ImageCard.component";
import Collapsible from "../../components/Collapsible/Collapsible.component";
// Sample data
import { categoriess, homeData } from "../../utils/data";

const Home = () => {
  const [homePageData, setHomePageData] = useState(homeData);
  const [categories, setCategories] = useState(categoriess);
  const [filter, setFilter] = useState(["react"]);
  const [searchInput, setSearchInput] = useState("");

  // Sort the list based on search string

  const SelectCategory = (id) => {
    if (filter.includes(id) && filter.length > 1)
      return setFilter(filter.filter((category) => category !== id));

    if (!filter.includes(id)) return setFilter([...filter, id]);

    return;
  };

  const searchClient = algoliasearch(
    "N8NI9VRBU1",
    "fba347501ce93182f89978a9f95e17d4"
  );
  return (
    <>
      <h1 className="hero__text container">
        Curated Collection of all web development resources in one place.
      </h1>
      <div className="home__search__bar">
        <InstantSearch indexName="bestbuy" searchClient={searchClient}>
          <SearchBox />
          <Hits />
        </InstantSearch>
      </div>
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

        <Link to="/new-resource">
          <button className="btn primary">
            Submit a resource
            <i className="fas fa-plus fa-lg" style={{ marginLeft: ".5rem" }} />
          </button>
        </Link>
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
            <Collapsible title="Usefull Libraries">
              <div className="home__library__card__container">
                {homePageData.libraries.map((library) => (
                  <NonImageCard {...library} btnText="visit library" />
                ))}
              </div>
            </Collapsible>
          </div>
          <div className="code__snippet">
            <Collapsible title="Code Snippets">
              <div className="home__codesnippet__card__container">
                {homePageData.codeSnippets.map((snippet) => (
                  <NonImageCard {...snippet}  btnText="view code"  />
                ))}
              </div>
            </Collapsible>
          </div>
          <div className="free__courses">
            <Collapsible title="Free Courses">
              <div className="home__free__courses__card__container">
                {homePageData.courses.map((course) => (
                  <ImageCard {...course}  btnText="Visit course" />
                ))}
              </div>
            </Collapsible>
          </div>
          <div className="amazing__articles">
            <Collapsible title="Amazing articles">
              <div className="home__amazing__articles__card__container">
                {homePageData.articles.map((article) => (
                  <ImageCard {...article}   btnText="read article"/>
                ))}
              </div>
            </Collapsible>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
