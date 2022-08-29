import "./MoviesDetailes.css";
import { useContext } from "react";
import {MovieContext} from "../../../contexts/movie.context";

function MoviesDetailes() {
  const {moviesArray , setMoviesArray} = useContext(MovieContext);


  return (
    <MovieContext>
    <div className="movies-detailes">
      <h1>MoviesDetailes</h1>
    </div>
    </MovieContext>
  );
};

export default MoviesDetailes;
