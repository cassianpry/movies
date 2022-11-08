/* eslint-disable import/no-anonymous-default-export */
const API_KEY = process.env.API_KEY;

export default {
  fetchTrending: {
    title: 'Trending',
    url: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
  },
  fetchTopRated: {
    title: 'Top Rated',
    url: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
  },
};
