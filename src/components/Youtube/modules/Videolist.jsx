import { useEffect, useLayoutEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import {
  getChanneldata,
  getPopularVideoList,
  getVideoList,
} from "../data/youtube/apis";
import Videoitem from "../atoms/Videoitem";

const Container = styled.div`
  padding-top: 24px;
  background-color: black;
  /* margin-left: 72px; */
`;
const List = styled.div`
  box-sizing: border-box;
  margin: 0 16px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: 1150px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 880px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 510px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Videolist = () => {
  const [videoList, channelData] = useOutletContext();
  console.log("비디오 리스트~");
  if (channelData === null) {
    return null;
  } else
    return (
      <Container>
        <List>
          {videoList.map((item) => {
            const channel = channelData.find((data) => {
              return data.id === item.snippet.channelId;
            });
            return (
              <Link to={`/watch/${item.id}`} key={item.id}>
                <Videoitem data={item} channel={channel} />
              </Link>
            );
          })}
        </List>
      </Container>
    );
};

export default Videolist;
