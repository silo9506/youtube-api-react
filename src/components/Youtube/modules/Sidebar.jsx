import styled from "styled-components";
import { sidebarList } from "../data/youtube/sidebar";
import Hamburger from "../atoms/Hambager";
import Logo from "../atoms/Logo";
import Sidebaritem from "../atoms/Sidebaritem";
const Container = styled.div`
  background-color: #212121;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  & > :first-child {
    padding-left: 16px;
  }
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
`;
const Button = styled.button`
  border: 0px;
  background-color: unset;
  padding: 8px;
  cursor: pointer;
`;
const Contents = styled.div`
  margin-top: 56px;
  position: absolute;
  top: 0;
  bottom: 0;
  overflow: auto;
  &::-webkit-scrollbar-track {
    background-color: #212121;
  }
  &::-webkit-scrollbar {
    width: 10px;
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      background-color: gray;
      border-radius: 10px;
    }
  }
`;
const List = styled.ul`
  list-style: none;
  padding: 12px 0px;
  margin: 0px;
  border-bottom: 1px solid rgba(133, 120, 120, 0.356);
`;
const Itemwrapper = styled.div`
  padding: 0 24px;
  height: 40px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #353232;
  }
`;
const Title = styled.div`
  color: #aaa;
  padding: 8px 24px;
`;

const Sidebar = ({ setShow }) => {
  return (
    <Container>
      <Menu>
        <Button onClick={() => setShow()}>
          <Hamburger />
        </Button>

        <Logo />
      </Menu>

      <Contents>
        <List>
          {sidebarList
            .filter((itme, index) => index < 6)
            .map(({ icon, name }, index) => (
              <Itemwrapper key={index}>
                <Sidebaritem icon={icon} name={name} sidebar={24} />
              </Itemwrapper>
            ))}
        </List>
        <List>
          {sidebarList
            .filter((itme, index) => 6 <= index && index < 12)
            .map(({ icon, name }, index) => (
              <Itemwrapper key={index}>
                <Sidebaritem icon={icon} name={name} sidebar={24} />
              </Itemwrapper>
            ))}
        </List>
        <List>
          <Title>구독</Title>
          {sidebarList
            .filter((itme, index) => index === 12)
            .map(({ icon, name }, index) => (
              <Itemwrapper key={index}>
                <Sidebaritem icon={icon} name={name} sidebar={24} />
              </Itemwrapper>
            ))}
        </List>
        <List>
          <Title>YOUTUBE더보기</Title>
          {sidebarList
            .filter((itme, index) => 12 < index && index < 18)
            .map(({ icon, name }, index) => (
              <Itemwrapper key={index}>
                <Sidebaritem icon={icon} name={name} sidebar={24} />
              </Itemwrapper>
            ))}
        </List>
        <List>
          {sidebarList
            .filter((itme, index) => 18 <= index && index)
            .map(({ icon, name }, index) => (
              <Itemwrapper key={index}>
                <Sidebaritem icon={icon} name={name} sidebar={24} />
              </Itemwrapper>
            ))}
        </List>
      </Contents>
    </Container>
  );
};

export default Sidebar;
