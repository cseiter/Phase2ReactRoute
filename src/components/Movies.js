import React from "react";
import { movies } from "../data";

function Movies() {
  const indMovie = movies.map((movie) => (
    <div key={movie.title}>
      <h2>{movie.title}</h2>
    </div>
  ));
  return (
    <div>
      <h1> Movies Page</h1>
      {indMovie}
    </div>
  );
}

export default Movies;
