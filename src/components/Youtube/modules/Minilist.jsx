import { Link } from "react-router-dom";
import styled from "styled-components";
import Videoitem from "../atoms/Videoitem";

const Container = styled.div`
  width: 402px;

  @media screen and (max-width: 1200px) {
    width: 100%;
    min-width: 0px;
    max-width: 350px;
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const Minilist = ({ data }) => {
  return (
    <Container>
      {data.map((item) => (
        <Link to={`/watch/${item.id}`} key={item.id}>
          <Videoitem data={item} ismini={true} />
        </Link>
      ))}
    </Container>
  );
};

export default Minilist;
