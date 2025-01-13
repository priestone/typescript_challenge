import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Menu1 from "./pages/menu/Menu1";
const Router = () => {
    return (_jsx(HashRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/menu", element: _jsx(Menu1, {}) })] }) }));
};
export default Router;
