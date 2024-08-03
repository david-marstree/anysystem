import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AppProvider } from "../lib/";
import "./index.less";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const Page2 = React.lazy(() => import("./pages/Page2"));

function App() {
  return (
    <AppProvider appName="anysystem">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={null}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={null}>
              <Page2 />
            </Suspense>
          }
        />
      </Routes>
    </AppProvider>
  );
}

export default App;
