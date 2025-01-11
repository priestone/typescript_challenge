import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: black;
  color: white;
`;

const App: React.FC = () => {
  return (
    <>
      <Box>프링글스</Box>
    </>
  );
};

export default App;
