import React, { Suspense } from "react";

import Navbar from "./components/Navbar/Navbar.component";

// code splitting with react lazy
const HomePage = React.lazy(() => import("./pages/HomePage/Home.page"));
function App() {
  return (
    <div className="container ">
      <Navbar />
      <Suspense fallback={<>Loading</>}>
        <HomePage />
      </Suspense>
    </div>
  );
}

export default App;
