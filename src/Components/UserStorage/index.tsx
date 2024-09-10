import { create } from 'zustand';
import { Movies, LaststMovies, Celebrity } from '../../Interfaces/interfaces';

interface StoreState {
  films: Movies[];
  celebrities: Celebrity[];
  recentlyViewed: Movies[];
  latest: LaststMovies[];
  searchFilms: string;
  completeSearch: Movies[];
  person: Celebrity[];

  setFilms: (films: Movies[]) => void;
  setCelebrities: (celebrities: Celebrity[]) => void;
  setRecentlyViewed: (recentlyViewed: Movies[]) => void;
  setLatest: (latest: LaststMovies[]) => void;
  setSearchFilms: (searchFilms: string) => void;
  setCompleteSearch: (completeSearch: Movies[]) => void; 
  setPerson: (person: Celebrity[]) => void;
  
  addToRecentlyViewed: (item: Movies) => void;
  addFilm: (film: Movies) => void;
  addCelebrity: (celebrity: Celebrity) => void;
  addLatest: (item: LaststMovies) => void;
  setSearch: (item: string) => void;
  addCompleteSearch: (item: Movies) => void;
  addPerson: (person: Celebrity) => void;
}

const useStore = create<StoreState>((set) => ({
  films: [],
  celebrities: [],
  recentlyViewed: [],
  latest: [],
  searchFilms: '',
  completeSearch: [],
  person: [],

  setFilms: (films) => set({ films }),
  setCelebrities: (celebrities) => set({ celebrities }),
  setRecentlyViewed: (recentlyViewed) => set({ recentlyViewed }),
  setLatest: (latest) => set({ latest }),
  setSearchFilms: (searchFilms) => set({ searchFilms }),
  setCompleteSearch: (completeSearch) => set({ completeSearch }),
  setPerson: (person) => set({ person }),

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

}));

export default useStore;
