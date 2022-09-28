import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { ReactComponent as YoutubeLogo } from "../../../assets/svg/youtube/logo01.svg";
import Icon from "./Icon";
const Container = styled.div``;
const Country = styled.div`
  position: absolute;
  color: #aaa;
  font-size: 10px;
  top: 0px;
  right: 0px;
  margin-top: 10px;
`;
const IconWrapper = styled.div`
  cursor: pointer;
  position: relative;
  padding: 18px 14px 18px 16px;
  height: 20px;
  width: 97px;
`;
const Logo = ({ isShow, setisShow }) => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate("/")}>
      <IconWrapper>
        <YoutubeLogo />
        <Country>KR</Country>
      </IconWrapper>
    </Container>
  );
};

export default Logo;
