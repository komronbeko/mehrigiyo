import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ContextProvider from "./context/context";

import "./app.scss";
import LocalizationProvider from "./context/localizationContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LocalizationProvider>
        <ContextProvider>
          <App />
        </ContextProvider>
      </LocalizationProvider>
    </BrowserRouter>
  </React.StrictMode>
);
