import styled from "styled-components";

const Container = styled.div`
  width: 24px;
  height: 24px;
`;
const Icon = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Icon;
