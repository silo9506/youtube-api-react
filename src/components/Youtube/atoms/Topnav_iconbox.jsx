import styled, { css } from "styled-components";
import Icon from "../atoms/Icon";
import { ReactComponent as Recording } from "../../../assets/svg/youtube/recording01.svg";
import { ReactComponent as Dotmenu } from "../../../assets/svg/youtube/dotmenu01.svg";
import { ReactComponent as Alarm } from "../../../assets/svg/youtube/alarm01.svg";
import { ReactComponent as Avatar } from "../../../assets/svg/youtube/avatar01.svg";

const Container = styled.div`
  display: flex;
  @media screen and (max-width: 460px) {
    & > :first-child {
      display: none;
    }
  }
  @media screen and (max-width: 410px) {
    & > :nth-child(2) {
      display: none;
    }
  }
  @media screen and (max-width: 320px) {
    & > :nth-child(3) {
      display: none;
    }
  }
`;
const IconWrapper = styled.div`
  padding: 8px;
  border-radius: 50%;
  margin-right: 8px;
  display: flex;
  align-items: center;
  & > svg {
    width: 32px;
    height: 32px;
    margin: 0 8px;
    fill: white;
  }
  ${({ isAvatar }) =>
    isAvatar &&
    `
      padding: 1px 6px;
    `}
`;

const Topnav_iconbox = () => {
  return (
    <Container>
      <IconWrapper>
        <Icon>
          <Recording />
        </Icon>
      </IconWrapper>
      <IconWrapper>
        <Icon>
          <Dotmenu />
        </Icon>
      </IconWrapper>
      <IconWrapper>
        <Icon>
          <Alarm />
        </Icon>
      </IconWrapper>
      <IconWrapper isAvatar>
        <Avatar />
      </IconWrapper>
    </Container>
  );
};

export default Topnav_iconbox;
