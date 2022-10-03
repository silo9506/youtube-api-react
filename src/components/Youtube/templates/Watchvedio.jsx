import styled from "styled-components";
import Videoinfo from "../atoms/Videoinfo";
import Minilist from "../modules/Minilist";
import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import Channelinfo from "../atoms/Channelinfo";

const Container = styled.div`
  display: flex;
  /* flex: 1; */
  padding: 24px 24px 0 24px;
  max-width: 1300px;
  min-width: 0px;
  background-color: black;
  @media screen and (max-width: 400px) {
    padding: 24px 0px;
  }
`;
const Vediobox = styled.div`
  flex: 1;
  padding-right: 24px;
  padding-left: 24px;
  @media screen and (max-width: 810px) {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 400px) {
    padding: 0px;
  }
`;
const Vedio = styled.div`
  width: 100%;
  height: 500px;
  @media screen and (max-width: 1000px) {
    height: 400px;
  }
  @media screen and (max-width: 800px) {
    height: 300px;
  }
  @media screen and (max-width: 400px) {
    height: 200px;
  }
`;

const Watchvedio = () => {
  const [videoList, setvideoList] = useState(null);
  const [channelData, setchannelData] = useState(null);
  const [playVideo, setPlayVideo] = useState(null);
  const [playChannel, setPlayCahnnel] = useState(null);
  const [minivideo, setMinivideo] = useState(null);
  const [videos, channels, id, setparams, setShowMine, setShowsidebar] =
    useOutletContext();
  const params = useParams();
  // const url = useLocation();

  // const video = videoList.find((item) => item.id === params.id);
  // const channel = channelData.find(
  //   (item) => item.id === video.snippet.channelId
  // );
  // const minivideo = videoList.filter((item) => item.id !== params.id);

  useEffect(() => {
    if (!!videos === false && !!channels === false) {
      setvideoList(JSON.parse(localStorage.getItem("video")));
      setchannelData(JSON.parse(localStorage.getItem("channel")));
      console.log("load");
    } else if (!!videos === true && !!channels === true) {
      setvideoList(videos);
      setchannelData(channels);
      localStorage.setItem("video", JSON.stringify(videos));
      localStorage.setItem("channel", JSON.stringify(channels));
      console.log("save");
    }
    setShowMine(false);
    setShowsidebar(false);
  }, [params]);

  useEffect(() => {
    if (!!videoList === false && !!channelData === false) return;
    setPlayVideo(videoList.find((item) => item.id === params.id));
    setMinivideo(videoList.filter((item) => item.id !== params.id));
    console.log("플레이 비디오 & 미니리스트");
  }, [videoList, channelData, params]);

  useEffect(() => {
    console.log("채널데이터");
    if (!!playVideo === false) return;
    setPlayCahnnel(
      channelData.find((item) => item.id === playVideo.snippet.channelId)
    );
  }, [playVideo]);

  console.log("비디오 디테일");
  if (!!playVideo === false || !!playChannel === false) {
    return null;
  } else
    return (
      <Container>
        <Vediobox>
          <Vedio>
            {
              <iframe
                width="100%"
                height="100%"
                src={`//www.youtube.com/embed/${playVideo.id}`}
                frameBorder="none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            }
          </Vedio>
          <Videoinfo data={playVideo} channel={playChannel} />
          <Channelinfo data={playVideo} channel={playChannel} />
        </Vediobox>

        <Minilist data={minivideo} />
      </Container>
    );
};
export default Watchvedio;
