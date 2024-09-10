import axios from "axios";
import { Movies, LaststMovies } from "../Interfaces/interfaces";

interface ApiResults {
  results: Movies[];
}

interface ApiLastst {
  results: LaststMovies[];
}

export const fetchFilms = async (): Promise<Movies[]> => {
  const response = await axios.get<ApiResults>('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', {
    params: {
      api_key: "a7fb42de14992ada410e9bb2ed8678f1",
      language: "pt-BR",
      page: 1,
    }
  })
  return response.data.results;
};
      
export const fetchLatest = async (): Promise<LaststMovies[]> => {
  const responseLatest = await axios.get<ApiLastst>('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', {
    params: {
      api_key: "a7fb42de14992ada410e9bb2ed8678f1",
      language: "pt-BR",
      page: 4,
    }
  })
  
  return responseLatest.data.results;
}
