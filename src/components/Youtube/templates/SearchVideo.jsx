import styled from "styled-components";
import { Link, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchVideoItem from "../atoms/SearchVideoItem";

const Container = styled.div`
  flex: 1;
  padding: 16px 48px;
  max-width: 1096px;
`;
const SearchVideo = () => {
  const [videoList, setVideoList] = useState(null);
  const [channelData, setchannelData] = useState(null);
  const [videos, channels, params, setparams] = useOutletContext();

  useEffect(() => {
    if (!!videos === true && !!channels === true) {
      localStorage.setItem("video", JSON.stringify(videos));
      localStorage.setItem("channel", JSON.stringify(channels));
      console.log("save");
    }
    setVideoList(videos);
    setchannelData(channels);
  }, [videos, channels]);

  useEffect(() => {
    if (!!videos === false && !!channels === false) {
      setVideoList(JSON.parse(localStorage.getItem("video")));
      setchannelData(JSON.parse(localStorage.getItem("channel")));
      console.log("로드");
      return;
    }
  }, []);

  console.log("서치비디오");
  if (!!videoList === false || !!channelData === false) {
    return null;
  } else
    return (
      <Container>
        {videoList.map((item, index) => {
          const channel = channelData.find((data) => {
            return data.id === item.snippet.channelId;
          });
          return (
            <Link to={`/watch/${item.id}`} key={index}>
              <SearchVideoItem data={item} channel={channel} />
            </Link>
          );
        })}
      </Container>
    );
};

export default SearchVideo;
