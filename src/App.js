import React, { Suspense } from "react";

import Navbar from "./components/Navbar/Navbar.component";

// Context
import { CurrentUserContextProvider } from "./context/auth";

// code splitting with react lazy
const HomePage = React.lazy(() => import("./pages/HomePage/Home.page"));
function App() {
  return (
    <CurrentUserContextProvider>
      <div className="app">
        <Navbar />
        <Suspense fallback={<>Loading</>}>
          <HomePage />
        </Suspense>
      </div>
    </CurrentUserContextProvider>
  );
}

export default App;
