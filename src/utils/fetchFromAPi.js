import axios from "axios";

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'
;

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': '91454f189amsh53422da7e86ca25p113428jsn0307e0fb9a68',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

//'30fe5f8512msh69646cada7639fdp129c3ajsn2d2b52956874'
