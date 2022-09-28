import styled from "styled-components";
import { miniList } from "../data/youtube/sidebar";
import Icon from "../atoms/Icon";
import Logo from "../atoms/Logo";

const Container = styled.div`
  width: 72px;
  position: fixed;
  top: 56px;
  left: 0px;
  bottom: 0px;
  background-color: #202020;
  @media screen and (max-width: 810px) {
    display: none;
  }
`;

const Item = styled.div`
  padding: 16px 0 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Name = styled.div`
  text-align: center;
  width: 100%;
  font-size: 10px;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 6px;
`;
const Minisidebar = () => {
  return (
    <Container>
      {miniList.map(({ icon, name }, index) => (
        <Item key={index}>
          <Icon>{icon()}</Icon>
          <Name>{name}</Name>
        </Item>
      ))}
    </Container>
  );
};

export default Minisidebar;
