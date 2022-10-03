import axios from "axios";

const Instance = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});

export const getSearchVideoList = async (params) => {
  const result = await Instance({
    url: "search",
    params: {
      ...params,
      part: "snippet",
      maxResults: 16,
      method: "Get",
      type: "video",
      regionCode: "Kr",
    },
  });

  return result.data.items;
};
export const getChanneldata = async (params) => {
  const result = await Instance({
    url: "channels",
    params: {
      ...params,
      part: "snippet,statistics",
      maxResults: 16,
      method: "Get",
    },
  });
  return result.data.items;
};

// export const getPopularVideoList = async (params) => {
//   const { data } = await Instance({
//     url: "videos",
//     params: {
//       ...params,
//       part: "snippet,statistics",
//       chart: "mostPopular",
//       maxResults: 4,
//       method: "Get",
//       regionCode: "Kr",
//     },
//   });
//   return data.items;
// };
export const getVideoList = async (params) => {
  const { data } = await Instance({
    url: "videos",
    params: {
      ...params,
      part: "snippet,statistics,contentDetails",
      maxResults: 16,
      method: "Get",
      regionCode: "Kr",
    },
  });
  return data.items;
};
