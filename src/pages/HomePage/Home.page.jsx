import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classnames from "classnames";
import { toast, ToastContainer } from "react-toastify";
import Slider from "react-slick";

// styles
import "react-toastify/dist/ReactToastify.css";
import "./Home.styles.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Configs
import { carouselConfig } from "../../configs/carousel.config";

// Components
import SideBar from "../../components/SideBar/SideBar.component";
import CategoryList from "../../components/CategoryCapsule/CategoryCapsule.component";
import NonImageCard from "../../components/NonImageCard/NonImageCard.component";
import ImageCard from "../../components/ImageCard/ImageCard.component";
import Collapsible from "../../components/Collapsible/Collapsible.component";
import Spinner from "../../components/Spinner.component";

// Redux Action
import {
  getResources,
  getCategories,
} from "../../Redux/reducer/Resource/Resource.action";

const Home = () => {
  const [githubStars, setGithubStars] = useState(2);
  const [homePageData, setHomePageData] = useState({
    libraries: [],
    codeSnippets: [],
    courses: [],
    articles: [],
  });
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [filter, setFilter] = useState("all");
  
  // Redux state
  const reduxState = useSelector(({ resources }) => ({ resources }));

  const dispatch = useDispatch();
  const location = useLocation();

  // Get home page data from firestore by calling redux actions
  useEffect(() => {
    const getResourcesAction = async () => {
      const resources = await dispatch(getResources());
      const categoriesList = await dispatch(getCategories());
      setCategories(categoriesList.payload);
      setHomePageData(resources.payload);
    };
    getResourcesAction();
    fetch("https://api.github.com/repos/pavankpdev/hellowebdev")
      .then((res) => res.json())
      .then(({ watchers_count }) => setGithubStars(watchers_count));
  }, []);

  // Auth required Warning message
  useEffect(() => {
    if (location.state)
      toast.warn(location.state, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        onClose: () => (location.state = ""),
      });
  }, [location.state]);

  // Search function (Temporary - will be replaced by Algolia)
  useEffect(() => {
    // Search Resources
    setHomePageData({
      libraries: reduxState.resources.resources.libraries.filter(
        ({ name, keywords, category }) =>
          name.includes(searchInput) ||
          keywords.includes(searchInput) ||
          category.includes(searchInput)
      ),
      codeSnippets: reduxState.resources.resources.codeSnippets.filter(
        ({ name, keywords, category }) =>
          name.includes(searchInput) ||
          keywords.includes(searchInput) ||
          category.includes(searchInput)
      ),
      courses: reduxState.resources.resources.courses.filter(
        ({ name, keywords, category }) =>
          name.includes(searchInput) ||
          keywords.includes(searchInput) ||
          category.includes(searchInput)
      ),
      articles: reduxState.resources.resources.articles.filter(
        ({ name, keywords, category }) =>
          name.includes(searchInput) ||
          keywords.includes(searchInput) ||
          category.includes(searchInput)
      ),
    });
  }, [searchInput]);

  // Sort based on category
  useEffect(() => {
    if (selectedCategory) {
      setHomePageData({
        libraries: reduxState.resources.resources.libraries.filter(
          ({ category }) => category.includes(selectedCategory)
        ),
        codeSnippets: reduxState.resources.resources.codeSnippets.filter(
          ({ category }) => category.includes(selectedCategory)
        ),
        courses: reduxState.resources.resources.courses.filter(({ category }) =>
          category.includes(selectedCategory)
        ),
        articles: reduxState.resources.resources.articles.filter(
          ({ category }) => category.includes(selectedCategory)
        ),
      });
    } else {
      setHomePageData(reduxState.resources.resources);
    }
  }, [selectedCategory]);

  // Sort the list based on search string
  const SelectCategory = (id) => {
    if (!selectedCategory.includes(id)) return setSelectedCategory(id);

    return setSelectedCategory("");
  };

  const searchResource = (e) => setSearchInput(e.target.value);

  return (
    <>
      <ToastContainer />
      <h1 className="hero__text container">
        Curated Collection of all web development resources in one place.
      </h1>
      <div className="home__search__bar">
        <input
          type="search"
          className="ais-SearchBox-input"
          placeholder="Search resources eg: React"
          value={searchInput}
          onChange={searchResource}
        />
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
            gitHub
            <i className="fas fa-star fa-lg" style={{ margin: "0 .5rem" }} />
            {githubStars}
          </button>
        </a>
      </div>
      <div className={classnames({ hide: !reduxState.resources.loading })}>
        <Spinner />
      </div>
      <div
        className={classnames("home__content container-fluid", {
          hide: reduxState.resources.loading,
        })}
      >
        <div className="home__sidebar__container">
          <SideBar filter={filter} setFilter={setFilter} />
        </div>
        <div className="home__resources__container">
          <div className="category__container">
            <Slider {...carouselConfig}>
              {categories.map((category) => (
                <CategoryList
                  key={Math.random}
                  selected={selectedCategory}
                  {...category}
                  SelectCategory={SelectCategory}
                  key={category.id}
                />
              ))}
            </Slider>
          </div>
          <div
            className={classnames("usefull__libraries", {
              hide: !filter.includes("all") && !filter.includes("libraries"),
            })}
          >
            <Collapsible
              title="Usefull Libraries"
              length={homePageData.libraries.length}
              filter={filter.includes("libraries")}
            >
              <div className="home__library__card__container">
                {homePageData.libraries.map((library) => (
                  <NonImageCard
                    {...library}
                    btnText="visit library"
                    key={library.id}
                  />
                ))}
              </div>
            </Collapsible>
          </div>
          <div
            className={classnames("code__snippet", {
              hide: !filter.includes("all") && !filter.includes("code"),
            })}
          >
            <Collapsible
              title="Code Snippets"
              length={homePageData.codeSnippets.length}
              filter={filter.includes("code")}
            >
              <div className="home__codesnippet__card__container">
                {homePageData.codeSnippets.map((snippet) => (
                  <NonImageCard
                    {...snippet}
                    btnText="view code"
                    key={snippet.id}
                  />
                ))}
              </div>
            </Collapsible>
          </div>
          <div
            className={classnames("free__courses", {
              hide: !filter.includes("all") && !filter.includes("courses"),
            })}
          >
            <Collapsible
              title="Free Courses"
              length={homePageData.courses.length}
              filter={filter.includes("courses")}
            >
              <div className="home__free__courses__card__container">
                {homePageData.courses.map((course) => (
                  <ImageCard
                    {...course}
                    btnText="Visit course"
                    key={course.id}
                  />
                ))}
              </div>
            </Collapsible>
          </div>
          <div
            className={classnames("amazing__articles", {
              hide: !filter.includes("all") && !filter.includes("articles"),
            })}
          >
            <Collapsible
              title="Amazing articles"
              length={homePageData.articles.length}
              filter={filter.includes("articles")}
            >
              <div className="home__amazing__articles__card__container">
                {homePageData.articles.map((article) => (
                  <ImageCard
                    {...article}
                    btnText="read article"
                    key={article.id}
                  />
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
