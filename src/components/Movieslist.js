import React from "react";

function Movieslist({ state }) {
  return (
    <section>
      <ul data-testid="moviesList">
        {state.filteredList
          .sort((a, b) => b.duration - a.duration)
          .map((movie, index) => (
            <li key={index}>
              <div>
                {/* use this header for movie name */}
                <h3>{movie.name}</h3>
                {/* use this paragraph for movie ratings, for example: 'Ratings: 88/100' */}
                <p>Ratings: {movie.rating}/100</p>
              </div>
              <div>
                {/* use this paragraph for movie duration, for example: '2.5 Hrs' */}
                <p>{movie.duration} Hrs</p>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default Movieslist;
