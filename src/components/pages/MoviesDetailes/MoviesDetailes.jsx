import "./MoviesDetailes.css";
import { useContext } from "react";
import {MovieContext} from "../../../contexts/movie.context";

function MoviesDetailes() {
  const {moviesArray , setMoviesArray} = useContext(MovieContext);


  return (
    <div className="movies-detailes">
      <h1>MoviesDetailes</h1>
    </div>
  );
};

export default MoviesDetailes;
