import styled from "styled-components";
import { ReactComponent as Hamburgericon } from "../../../assets/svg/youtube/hamburger01.svg";
const Container = styled.div`
  width: 24px;
  height: 24px;
`;
const Hamburger = () => {
  return (
    <Container>
      <Hamburgericon />
    </Container>
  );
};

export default Hamburger;
