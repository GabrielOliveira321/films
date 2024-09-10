import axios from "axios";
import { Celebrity } from "../Interfaces/interfaces";

interface ApiResponse {
  results: Celebrity[];
}

export const fetchCelebrities = async (): Promise<Celebrity[]> => {
  const response = await axios.get<ApiResponse>('https://api.themoviedb.org/3/trending/person/day?language=en-US', {
    params: {
      api_key: "a7fb42de14992ada410e9bb2ed8678f1",
      language: "pt-BR",
      page: 1,
    }
  })

  // .then((response) => setAPi(response.data.results))
  // .catch((error) => {setAPi(error)})

  return response.data.results
};