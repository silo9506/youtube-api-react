import { useEffect, useState } from "react";
import styled from "styled-components";
import Topnav from "../modules/Topnav";
import Sidebar from "../modules/Sidebar";
import Minisidebar from "../modules/Minisidebar";
import { Outlet, useLocation } from "react-router-dom";
import {
  getChanneldata,
  getSearchVideoList,
  getVideoList,
} from "../data/youtube/apis";

const Container = styled.div`
  min-width: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  /* position: relative; */
  margin-top: 56px;
  background-color: black;
  overflow-y: scroll;
  /* margin-left: 72px; */
  margin-left: ${({ showSidebar }) => (showSidebar ? 246 : 72)}px;
  ${({ isWatch }) => isWatch && `margin-left:0px;`}

  &::-webkit-scrollbar {
    width: 10px;
    background-color: black;
  }
  &::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 10px;
  }
  @media screen and (max-width: 810px) {
    margin-left: 0px;
  }
`;
const Main = () => {
  const [videoList, setVideoList] = useState(null);
  const [params, setParams] = useState(null);
  const [showSidebar, setShowsidebar] = useState(false);
  const [channelData, setchannelData] = useState(null);
  const [searchData, setSearchData] = useState(null);
  const [showMine, setShowMine] = useState(true);
  const url = useLocation();
  // const isSearch = url.pathname.includes("/search");
  const isWatch = url.pathname.includes("/watch");
  const isMain = url.pathname === "/";

  useEffect(() => {
    const Popular = async () => {
      if (!isMain) return;
      const result = await getVideoList({ chart: "mostPopular" });
      setSearchData(null);
      setchannelData(null);
      setVideoList(result);
      console.log("인기비디오");
    };
    Popular();
    if (!isWatch) setShowMine(true);
  }, [url]);

  useEffect(() => {
    const getChannel = async () => {
      if (videoList === null) return;
      const channel = [];
      videoList.map((item) => {
        const data = [item.snippet.channelId];
        return channel.push(Object.values(data));
      });
      const params = { id: channel.join() };
      const result = await getChanneldata(params);
      setchannelData(result);
      console.log("채널데이터");
    };
    const getvideoDetail = async () => {
      if (searchData === null) return;
      const videos = [];
      searchData.map((item) => {
        const data = [item.id.videoId];
        return videos.push(Object.values(data));
      });

      const videoId = { id: videos.join() };
      const getVideo = await getVideoList(videoId);
      console.log("비디오디테일");
      setSearchData(null);
      setVideoList(getVideo);
    };
    getChannel();
    getvideoDetail();
  }, [videoList, searchData]);

  useEffect(() => {
    if (params === null) return;
    setVideoList(null);
    setchannelData(null);
    const searchVideos = async () => {
      const result = await getSearchVideoList(params);
      setSearchData(result);
      console.log("서치데이터");
    };
    searchVideos();
  }, [params]);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const onResize = () => {
    if (window.innerWidth < 810) {
      setShowsidebar(false);
    }
  };

  return (
    <Container showSidebar={showSidebar} isWatch={isWatch}>
      <Topnav
        showSidebar={showSidebar}
        setShow={(value) => setShowsidebar(value)}
        setParams={(value) => setParams(value)}
      />
      {showMine && !showSidebar && <Minisidebar />}
      {showSidebar && <Sidebar />}

      <Outlet
        context={[
          videoList,
          channelData,
          params,
          (value) => setParams(value),
          (value) => setShowMine(value),
          (value) => setShowsidebar(value),
        ]}
      />
    </Container>
  );
};

export default Main;
