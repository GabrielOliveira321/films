export interface Movies {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  
  export interface LaststMovies {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  
  export interface Celebrity {
    adult: boolean;
    gender: number;
    id: number;
    known_for: number[];
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
  }

  export interface Person {
    adult: boolean;
    gender: number;
    id: number;
    known_for: number[];
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
  }