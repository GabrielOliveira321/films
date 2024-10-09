import axios from "axios";
import { Celebrity } from "../Interfaces/interfaces";

interface ApiResponse {
  total_pages: number;
  results: Celebrity[];
}

export const fetchCelebritiesTEST = async (): Promise<Celebrity[]> => {
  let api: Celebrity[] = [];
  let totalPages = 1;

  const initialResponse = await axios.get<ApiResponse>('https://api.themoviedb.org/3/trending/person/day', {
    params: {
      api_key: "a7fb42de14992ada410e9bb2ed8678f1",
      language: "pt-BR",
      page: 1,
    }
  });
  // totalPages = initialResponse.data.total_pages;
  totalPages = 2;
  api = [...initialResponse.data.results];

  for (let index = 2; index <= totalPages; index++) {
    const response = await axios.get<ApiResponse>('https://api.themoviedb.org/3/trending/person/day', {
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































// import axios from "axios";
// import { Celebrity } from "../Interfaces/interfaces";
// 
// interface ApiResponse {
  // results: Celebrity[];
// }
// 
// let api: Celebrity[] | PromiseLike<Celebrity[]>;
// 
// export const fetchCelebrities = async (): Promise<Celebrity[]> => {
  // const response = await axios.get<ApiResponse>('https://api.themoviedb.org/3/trending/person/day?language=en-US', {
    // params: {
      // api_key: "a7fb42de14992ada410e9bb2ed8678f1",
      // language: "pt-BR",
    // }
  // })
  // .then((response) => {
    // api = response.data.results;
  // })
// 
  // .catch((error) => {
    // console.log(error);
  // })
// 
  // return api;
// };


    // .then((response) => {
    //   api = response.data.results;
    // })
  // 
    // .catch((error) => {
    //   console.log(error);
    // })
  
    // return api;
