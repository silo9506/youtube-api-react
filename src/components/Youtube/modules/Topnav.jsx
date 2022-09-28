import styled from "styled-components";
import Logo from "../atoms/Logo";
import Topnav_iconbox from "../atoms/Topnav_iconbox";
import Searchbar from "../atoms/Searchbar";
import Hamburger from "../atoms/Hambager";
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  padding: 0 16px;
  display: flex;
  background-color: #202020;
  justify-content: space-between;
  z-index: 100;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: ${({ isCenter }) => isCenter && 1};
`;
const Button = styled.button`
  border: 0px;
  background-color: unset;
  padding: 8px;
  cursor: pointer;
`;

const Topnav = ({ showSidebar, setShow, setParams }) => {
  return (
    <Container>
      <Box>
        <Button onClick={() => setShow(!showSidebar)}>
          <Hamburger />
        </Button>
        <Logo />
      </Box>
      <Box isCenter>
        <Searchbar setParams={setParams} />
      </Box>
      <Box>
        <Topnav_iconbox />
      </Box>
    </Container>
  );
};

export default Topnav;
