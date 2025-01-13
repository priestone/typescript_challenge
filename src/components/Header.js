import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.header `
  width: 100%;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
`;
const Logo = styled.div `
  font-size: 30px;
  font-weight: 700;
  color: white;
`;
const MenuWrap = styled.ul `
  display: flex;
`;
const Menu = styled.li `
  color: white;
  margin-left: 30px;
`;
const Header = () => {
    return (_jsxs(Container, { children: [_jsx(Link, Object.assign({ to: "/" }, { children: _jsx(Logo, { children: "LOGO" }) })), _jsxs(MenuWrap, { children: [_jsx(Link, Object.assign({ to: "/menu" }, { children: _jsx(Menu, { children: "Menu01" }) })), _jsx(Menu, { children: "Menu02" })] })] }));
};
export default Header;
