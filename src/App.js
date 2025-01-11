import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import styled from "styled-components";
const Box = styled.div `
  width: 100px;
  height: 100px;
  background-color: black;
  color: white;
`;
let words = "김치";
const App = () => {
    return (_jsx(_Fragment, { children: _jsx(Box, { children: "\uD504\uB9C1\uAE00\uC2A4" }) }));
};
export default App;
