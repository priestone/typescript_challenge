import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { GlobalStyled } from "./GlobalStyled";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(_jsxs(React.StrictMode, { children: [_jsx(GlobalStyled, {}), _jsx(Router, {})] }));
