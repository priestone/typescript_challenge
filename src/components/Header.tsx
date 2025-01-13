import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
`;

const Logo = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: white;
`;

const MenuWrap = styled.ul`
  display: flex;
`;

const Menu = styled.li`
  color: white;
  margin-left: 30px;
`;

const Header: React.FC = () => {
  return (
    <Container>
      <Link to={"/"}>
        <Logo>LOGO</Logo>
      </Link>
      <MenuWrap>
        <Link to={"/menu"}>
          <Menu>Menu01</Menu>
        </Link>
        <Menu>Menu02</Menu>
      </MenuWrap>
    </Container>
  );
};

export default Header;
