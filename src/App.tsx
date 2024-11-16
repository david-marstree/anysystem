import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "../lib/";
import "./index.less";

const HomePage = React.lazy(() => import("./pages/HomePage"));
const Page2 = React.lazy(() => import("./pages/Page2"));

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
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
