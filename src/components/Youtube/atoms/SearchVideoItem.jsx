import styled from "styled-components";
import Icon from "./Icon";
import { ReactComponent as Dotmenu } from "../../../assets/svg/youtube/dotmenu02.svg";

const Container = styled.div`
  cursor: pointer;
  color: white;
  display: flex;
  margin-top: 16px;
  margin-bottom: 8px;
  @media screen and (max-width: 650px) {
    flex-direction: column;
  }
`;
const Thumbnail = styled.img`
  width: 360px;
  margin-right: 16px;
  @media screen and (max-width: 650px) {
    width: 100%;
    min-width: 240px;
    padding-bottom: 40px;
  }
`;
const Videoinfo = styled.div`
  position: relative;
  flex: 1;
  /* @media screen and (max-width: 810px) {
    width: 0px;
  } */
`;

const Channelinfo = styled.div`
  display: flex;
  padding: 12px 0;
`;
const Avater = styled.img`
  height: 24px;
  border-radius: 50%;
  margin-right: 8px;
`;
const Textbox = styled.div`
  padding-right: 24px;
  font-size: 14px;
  width: 100%;
`;
const Iconwrapper = styled.div`
  border-radius: 50%;
  position: absolute;
  padding: 6px;
  top: 0px;
  right: 0px;
  transform: translate(50%, -6px);
`;
const Title = styled.div`
  margin-bottom: 6px;
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  width: 95%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const Metadata = styled.div`
  font-size: 13px;
  color: #aaa;
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;
const SearchVideoItem = ({ data, channel }) => {
  const publishedAt = () => {
    const now = () => {
      let date = new Date();
      let year = date.getFullYear();
      let month =
        date.getMonth() + 1 > 9
          ? date.getMonth() + 1
          : "0" + (date.getMonth() + 1);
      let day = date.getDate();
      return `${year}-${month}-${day}`;
    };
    const date1 = new Date(now());
    const date2 = new Date(data.snippet.publishedAt.split("T")[0]);

    const caldate = date1.getTime() - date2.getTime();
    const at = Math.abs(caldate / (1000 * 3600 * 24));
    if (at < 7) {
      return `${at}일전`;
    } else if (at > 365) {
      return `${Math.floor(at / 365)}년전`;
    } else if (at > 30) {
      return `${Math.floor(at / 30)}개월전`;
    } else if (7 < at < 365) {
      return `${Math.floor(at / 7)}주전`;
    }
  };
  return (
    <Container>
      <Thumbnail src={data.snippet.thumbnails.medium.url} />
      <Videoinfo>
        <Textbox>
          <Title>{data.snippet.title}</Title>
          <Metadata>
            조회수 {data.statistics.viewCount} 회 • {publishedAt()}
          </Metadata>
        </Textbox>
        <Channelinfo>
          <Avater src={channel.snippet.thumbnails.medium.url} />
          <Metadata>{data.snippet.channelTitle}</Metadata>
        </Channelinfo>
        <Metadata>{data.snippet.localized.description}</Metadata>
        <Iconwrapper>
          <Icon>
            <Dotmenu />
          </Icon>
        </Iconwrapper>
      </Videoinfo>
    </Container>
  );
};

export default SearchVideoItem;
