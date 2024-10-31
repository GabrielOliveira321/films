import { create } from 'zustand';
import { Movies, LaststMovies, Celebrity, Person } from '../../Interfaces/interfaces';

interface StoreState {
  films: Movies[];
  celebrities: Celebrity[];
  recentlyViewed: Movies[];
  latest: LaststMovies[];
  searchFilms: string;
  completeSearch: Movies[];
  
  person: Person[];
  fetchFilms: Movies[];
  movie: Movies[];

  setFilms: (films: Movies[]) => void;
  setCelebrities: (celebrities: Celebrity[]) => void;
  setRecentlyViewed: (recentlyViewed: Movies[]) => void;
  setLatest: (latest: LaststMovies[]) => void;
  setSearchFilms: (searchFilms: string) => void;
  setCompleteSearch: (completeSearch: Movies[]) => void; 
  setPerson: (person: Celebrity[]) => void;
  setFetchFilms: (Fetchfilms: Movies[]) => void;
  setMovie: (movie: Movies[]) => void;

  addToRecentlyViewed: (item: Movies) => void;
  addFilm: (film: Movies) => void;
  addCelebrity: (celebrity: Celebrity) => void;
  addLatest: (item: LaststMovies) => void;
  setSearch: (item: string) => void;
  addCompleteSearch: (item: Movies) => void;
  addPerson: (person: Celebrity) => void;
  addFetchFilmes: (item: Movies) => void;
  addMovie: (item: Movies) => void;
}

const useStore = create<StoreState>((set) => ({
  films: [],
  celebrities: [],
  recentlyViewed: [],
  latest: [],
  searchFilms: '',
  completeSearch: [],
  person: [],
  fetchFilms: [],
  movie: [],


  setFilms: (films) => set({ films }),
  setCelebrities: (celebrities) => set({ celebrities }),
  setRecentlyViewed: (recentlyViewed) => set({ recentlyViewed }),
  setLatest: (latest) => set({ latest }),
  setSearchFilms: (searchFilms) => set({ searchFilms }),
  setCompleteSearch: (completeSearch) => set({ completeSearch }),
  setPerson: (person) => set({ person }),
  setFetchFilms: (fetchFilms) => set({ fetchFilms }),
  setMovie: (movie) => set({movie}),

  addToRecentlyViewed: (item) =>
    set((state) => ({ recentlyViewed: [...state.recentlyViewed, item] })),
  
  addFilm: (film) =>
    set((state) => ({ films: [...state.films, film] })),
  
  addCelebrity: (celebrity) =>
    set((state) => ({ celebrities: [...state.celebrities, celebrity] })),
  
  addLatest: (item) =>
    set((state) => ({ latest: [...state.latest, item] })),

  setSearch: (item) =>
    set((state) => ({ searchFilms: item })),

  addCompleteSearch: (completesearch) => 
    set((state) => ({ completeSearch: [...state.completeSearch, completesearch] })),

  addPerson: (person) => 
    set((state) => ({ person: [...state.person, person] })),

  addFetchFilmes: (fetchFilms) => {
    set((state) => ({fetchFilms : [...state.fetchFilms,fetchFilms ] }))
  },

  addMovie: (movie) => 
    set((state) => ({ movie: [...state.movie, movie] })),

}));

export default useStore;
