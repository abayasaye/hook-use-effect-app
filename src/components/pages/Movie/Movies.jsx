import "./movies.css";
import React from "react";
import { useContext } from "react";
import {MovieContext} from "../../../contexts/movie.context";
import MovieCards from "../MovieCards/MovieCards";

function Movies() {
  const {moviesArray , setMovieArray} = useContext(MovieContext);
  return (
      <MovieContext>
    <div className="movies">
      <h1>Movies</h1>
      {
      moviesArray?.map(movieItem=>
        <MovieCards moviesArray={movieItem}/>
        )
      }

    </div>
      </MovieContext>
  );
};

export default Movies;
