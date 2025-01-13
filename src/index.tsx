import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Router from "./Router";
import { GlobalStyled } from "./GlobalStyled";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyled />
    {/* <App /> */}
    <Router></Router>
  </React.StrictMode>
);
