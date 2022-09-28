import styled from "styled-components";
import { ReactComponent as Searchicon } from "../../../assets/svg/youtube/search01.svg";
import { ReactComponent as Mic } from "../../../assets/svg/youtube/mic01.svg";
import Icon from "../atoms/Icon";
import { getPopularVideoList, getSearchVideoList } from "../data/youtube/apis";
import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Container = styled.div`
  display: flex;
  height: 40px;
  justify-content: center;
  width: 100%;
`;
const Form = styled.form`
  max-width: 600px;
  flex: 1;
`;
const Inputwrapper = styled.div`
  position: relative;
  display: flex;
  margin-left: 40px;
  align-items: center;
  padding: 2px 6px;
  height: 100%;
  box-sizing: border-box;
  background-color: #181818;
  border: 1px solid #313131;
  ${({ onhover }) => onhover && `border-color:#1d5191;`}

  @media screen and (max-width: 650px) {
    display: none;
  }
`;
const Hoverbox = styled.div`
  padding: 0 10px;
  display: ${({ onhover }) => !onhover && "none"};
`;
const Input = styled.input`
  margin-right: 31px;
  border: none;
  background-color: unset;
  font-size: 16px;
  color: white;
  outline: none;
  width: 100%;
`;
const Keybord = styled.img`
  position: absolute;
  right: 12px;
`;
const Button = styled.button`
  cursor: pointer;
  height: 40px;
  width: 64px;
  background-color: #313131;
  padding: 1px 6px;
  border: none;

  @media screen and (max-width: 650px) {
    background-color: unset;
    padding: 8px;
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }
`;
const IconWrapper = styled.div`
  padding: 8px;
  margin-left: 6px;
  border-radius: 50%;
  background-color: black;
  @media screen and (max-width: 650px) {
    background-color: unset;
    padding: 8px;
    width: 24px;
  }
  @media screen and (max-width: 400px) {
    display: none;
  }
`;

const Searchbar = ({ setParams }) => {
  const [onhover, setOnhover] = useState(false);
  const url = useLocation();
  const navigate = useNavigate();
  const InputRef = useRef();
  // const onSubmit = (e) => {
  //   e.preventDefault();

  //   if (InputRef.current.value === "") return;
  //   const params = { q: InputRef.current.value };
  //   setParams(params);
  //   if (url.pathname === "/youtube") {
  //     navigate(`search/${InputRef.current.value}`);
  //   } else {
  //     navigate(`//search/${InputRef.current.value}`);
  //   }
  // };

  const onSubmit = (e) => {
    e.preventDefault();

    if (InputRef.current.value === "") return;
    const params = { q: InputRef.current.value };
    setParams(params);
    if (url.pathname === "/watch") {
      navigate(`//search/${InputRef.current.value}`);
    } else {
      navigate(`search/${InputRef.current.value}`);
    }
  };
  // console.log((InputRef.current.style.display = "none"));

  return (
    <Container>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Inputwrapper onhover={onhover}>
          <Hoverbox onhover={onhover}>
            <Icon>
              <Searchicon />
            </Icon>
          </Hoverbox>
          <Input
            placeholder="검색"
            ref={InputRef}
            onFocus={() => {
              setOnhover(true);
            }}
            onBlur={() => setOnhover(false)}
          />
          <Keybord src="https://www.gstatic.com/inputtools/images/tia.png" />
        </Inputwrapper>
      </Form>
      <Button onClick={(e) => onSubmit(e)}>
        <Searchicon />
      </Button>
      <IconWrapper>
        <Icon>
          <Mic />
        </Icon>
      </IconWrapper>
    </Container>
  );
};

export default Searchbar;
