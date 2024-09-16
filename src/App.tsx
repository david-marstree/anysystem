import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { AppProvider } from "../lib/";
import "./index.less";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const Page2 = React.lazy(() => import("./pages/Page2"));
const BuilderPage = React.lazy(() => import("./pages/BuilderPage"));

function App() {
  return (
    <AppProvider appName="anysystem">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense>
              <Page2 />
            </Suspense>
          }
        />
        <Route
          path="/builder"
          element={
            <Suspense>
              <BuilderPage />
            </Suspense>
          }
        />
      </Routes>
    </AppProvider>
  );
}

export default App;
