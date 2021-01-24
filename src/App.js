import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.component";
import Spinner from "./components/Spinner.component";

// Context
import { CurrentUserContextProvider } from "./context/auth.context";

// code splitting with react lazy
const HomePage = React.lazy(() => import("./pages/HomePage/Home.page"));
function App() {
  return (
    <BrowserRouter>
      <CurrentUserContextProvider>
        <div className="app">
          <Navbar />
          <Switch>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={HomePage} />
            </Suspense>
          </Switch>
        </div>
      </CurrentUserContextProvider>
    </BrowserRouter>
  );
}

export default App;
