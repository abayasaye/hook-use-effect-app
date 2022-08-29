import {children, createContext ,useEffect,useState} from "react"
import movieService from "../services/movies.service"
export const MovieContext = createContext()
const MoviesContext = ()=>{
const [moviesArray , setMovieArray]=useState([])
useEffect(()=>{
    movieService()
    .then((res)=>setMovieArray(res))
},[])
return(
    <MovieContext.Provider value={{moviesArray , setMovieArray}}>
        <h1>{children}</h1>
    </MovieContext.Provider>
)
}
export default MoviesContext