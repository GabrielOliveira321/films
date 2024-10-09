import axios from "axios";
import { Movies } from "../Interfaces/interfaces";

interface ApiMovies {
  total_pages: number;
  results: Movies[];
}

export const fetchMovies = async (): Promise<Movies[]> => {
  let api: Movies[] = [];
  let totalPages = 1;

  const initialResponse = await axios.get<ApiMovies>('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', {
    params: {
      api_key: "a7fb42de14992ada410e9bb2ed8678f1",
      language: "pt-BR",
      page: 1,
    }
  });
  totalPages = initialResponse.data.total_pages;
//   totalPages = 2;
  api = [...initialResponse.data.results];

  for (let index = 2; index <= totalPages; index++) {
    const response = await axios.get<ApiMovies>('https://api.themoviedb.org/3/trending/person/day', {
      params: {
        api_key: "a7fb42de14992ada410e9bb2ed8678f1",
        language: "pt-BR",
        page: index,
      }
    });

    api = [...api, ...response.data.results];
  }
  return api;
}
