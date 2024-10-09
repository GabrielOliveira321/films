import axios from "axios";
import { Movies, LaststMovies } from "../Interfaces/interfaces";
import { useMemo } from "react";

interface ApiResults {
  page(page: any): unknown;
  total_pages: number;
  results: Movies[];
}

interface ApiLastst {
  results: LaststMovies[];
}

export const fetchFilms = async (): Promise<Movies[]> => {

  let apiFilms: Movies[] = [];
  let filmsTotalPages = 2;

  // const response = await axios.get<ApiResults>('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', {
  //   params: {
  //     api_key: "a7fb42de14992ada410e9bb2ed8678f1",
  //     language: "pt-BR",
  //     page: 1,
  //   }
  // }); só é apenas necessario para ter o numero de pages, mas devido a 46975 pages trava, então reduzi dastricamente esse numero
  
  // filmsTotalPages = response.data.total_pages muitas pages ai o site não carrega;
  filmsTotalPages = 1;

  // console.log(apiFilms);
  // console.log(filmsTotalPages);

  for (let index = 1; index <= filmsTotalPages; index++) {
    const response = await axios.get<ApiResults>("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc", {
      params: {
        api_key: "a7fb42de14992ada410e9bb2ed8678f1",
        language: "pt-BR",
        page: index,
      }
    });

    // if (response.data.total_pages) {
      // console.log(response.data.page);
    // }

    apiFilms = [...apiFilms, ...response.data.results];
  }
  return apiFilms;
};
      
export const fetchLatest = async (): Promise<LaststMovies[]> => {
  const responseLatest = await axios.get<ApiLastst>('https://api.themoviedb.org/3/trending/movie/day?language=en-US', {
    params: {
      api_key: "a7fb42de14992ada410e9bb2ed8678f1",
      language: "pt-BR",
      page: 2,
    }
  })
  
  return responseLatest.data.results;
}









// Novas ideias pegar essas pages e os numero pares de page ser os ultimos lançados e os impares serem os recomendados
// Crira uma function para os dois mesmo com apis diferentes para economizar tempo e espaço na memoria gastanto menos recursos







// export const fetchFilms = async (): Promise<Movies[]> => {

  // let apiFilms: Movies[] = [];
  // let filmsTotalPages = 2;

  // const response = await axios.get<ApiResults>('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', {
  //   params: {
  //     api_key: "a7fb42de14992ada410e9bb2ed8678f1",
  //     language: "pt-BR",
  //     page: 1,
  //   }
  // }); só é apenas necessario para ter o numero de pages, mas devido a 46975 pages trava, então reduzi dastricamente esse numero
  
  // filmsTotalPages = response.data.total_pages muitas pages ai o site não carrega;
  // filmsTotalPages = 5;

  // console.log(apiFilms);
  // console.log(filmsTotalPages);

  // for (let index = 1; index <= filmsTotalPages; index++) {
    // const response = await axios.get<ApiResults>("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc", {
      // // params: {
        // // api_key: "a7fb42de14992ada410e9bb2ed8678f1",
        // // language: "pt-BR",
        // // page: index,
      // // }
    // });

    // console.log(response.data.results);
    // apiFilms = [...apiFilms, ...response.data.results];
  // }

  // return apiFilms;

  // return response.data.results;
// };