import React from "react";
import { movies } from "../data";
function Movies() {
  const displayMovies = movies.map((movie) => (
    <div key={movie.title}>
      <h2>{movie.title}</h2>
      <p>Runtime: {movie.time} min</p>
      <ul>
        {movie.genres.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  ));
  return (
    <div>
      <h1>Movies Page</h1>
      {displayMovies}
    </div>
  );
}
export default Movies;
