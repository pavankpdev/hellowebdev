// Libraries
import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Pre-load Components
import Navbar from "./components/Navbar/Navbar.component";
import Spinner from "./components/Spinner.component";

// HOC
import PrivateRoute from "./HOC/PrivateRoute.HOC";

// Context
import { CurrentUserContextProvider } from "./context/auth.context";

// Lazy load components
const HomePage = React.lazy(() => import("./pages/HomePage/Home.page"));
const AddResourses = React.lazy(() =>
  import("./pages/AddResources/AddResources.component")
);
const ProjectContribution = React.lazy(() =>
  import("./pages/ProjectContribution/ProjectContribution.component")
);
const ResourceContribution = React.lazy(() =>
  import("./pages/ResourceContribution/ResourceContribution.component")
);
const Profile = React.lazy(() => import("./pages/Profile/Profile.component"));
const ResourceDetails = React.lazy(() =>
  import("./pages/ResourceDetail/ResourceDetail.component")
);

function App() {
  return (
    <CurrentUserContextProvider>
      <div className="app">
        <Navbar />
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/new-resource" component={AddResourses} />
            <Route
              exact
              path="/project-contribution"
              component={ProjectContribution}
            />
            <Route
              exact
              path="/resource-contribution"
              component={ResourceContribution}
            />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/resource/:id" component={ResourceDetails} />
          </Suspense>
        </Switch>
      </div>
    </CurrentUserContextProvider>
  );
}

export default App;
