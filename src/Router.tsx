import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Menu1 from "./pages/menu/Menu1";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu1 />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default Router;
