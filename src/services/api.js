// import axios from "axios";

// export const fetchArticles = async (page = 0, query) => {
//   const { data } = await axios.get(
//     `https://hn.algolia.com/api/v1/search?query=${query}&page=${page}&hitsPerPage=4`
//   );
//   return data;
// };

import axios from "axios";

axios.defaults.baseURL = `https://api.unsplash.com/`;
const ACCESS_KEY = `8qD0fg3zVKNsMrqLPyV2JQMBmsLdKbiOofss9NFZ-0w`;
// 8qD0fg3zVKNsMrqLPyV2JQMBmsLdKbiOofss9NFZ-0w
// jdFsQzgRj-bpAf-TGVs06VRUCz3eANHwVj2sl0iyJvA

export const fetchImages = async (page = 0, query) => {
  const response = await axios.get(`/search/photos`, {
    params: {
      client_id: ACCESS_KEY,
      query: query,
      page: page,
      per_page: 9,
    },
  });
  return response.data;
};
