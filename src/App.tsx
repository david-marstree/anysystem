import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "../lib/";
import "./index.less";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const Page2 = React.lazy(() => import("./pages/Page2"));
const BuilderPage = React.lazy(() => import("./pages/BuilderPage"));
const FlowPage = React.lazy(() => import("./pages/FlowPage"));

function App() {
  return (
    <AppProvider appName="anysystem">
      <BrowserRouter>
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
          <Route
            path="/flow"
            element={
              <Suspense>
                <FlowPage />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
