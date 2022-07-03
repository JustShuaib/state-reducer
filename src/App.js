import React, { useReducer } from "react";
import "./App.css";

import { Movieform, Movieslist, Search } from "./components";

const title = "Favorite Movie Directory";
const initialState = {
  error: false,
  emptySearch: false,
  movieName: "",
  rating: "",
  duration: "",
  searchTerm: "",
  movies: [],
  filteredList: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        [action.name]: action.payload,
        error: false,
      };
    case "SUBMIT":
      let newMovie = {};
      const { movieName: name, rating, duration } = state;
      if (name && rating && duration) {
        if (duration.endsWith("h")) {
          newMovie = {
            name,
            rating,
            duration: Number(duration.slice(0, duration.length - 1)),
          };
          const newMovieList = [...state.movies, newMovie];
          return {
            ...state,
            movies: newMovieList,
            filteredList: newMovieList,
            movieName: "",
            rating: "",
            duration: "",
          };
        } else if (duration.endsWith("m")) {
          newMovie = {
            name,
            rating,
            duration: (
              Number(duration.slice(0, duration.length - 1)) / 60
            ).toFixed(1),
          };
          const newMovieList = [...state.movies, newMovie];
          return {
            ...state,
            movies: newMovieList,
            filteredList: newMovieList,
            movieName: "",
            rating: "",
            duration: "",
          };
        } else return { ...state, searchTerm: "", error: true };
      } else return { ...state };
    case "SEARCH":
      state.searchTerm = action.payload;
      if (state.searchTerm.length >= 2) {
        const newMovies = state.movies.filter((m) =>
          m.name.toLowerCase().startsWith(state.searchTerm.toLowerCase())
        );
        if (newMovies.length === 0)
          return { ...state, filteredList: newMovies, emptySearch: true };
        return { ...state, filteredList: newMovies, emptySearch: false };
      }
      return { ...state, filteredList: state.movies, emptySearch: false };

    default:
      break;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <nav>{title}</nav>
      <div>
        <div>
          <Movieform onType={dispatch} state={state} />
        </div>
        <div>
          <Search onSearch={dispatch} searchTerm={state?.searchTerm} />
          {state?.filteredList.length > 0 && <Movieslist state={state} />}

          {state?.emptySearch && (
            <div>
              <h3 data-testid="noResult">No Results Found</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default App;
