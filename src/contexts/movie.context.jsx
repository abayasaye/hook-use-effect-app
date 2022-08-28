import {children, createContext ,useState} from "react"

export const MovieContext = createContext({children})
const MoviesContext = ()=>{
const [moviesArray , setMovieArray]=useState([])
return(
    <MovieContext.Provider value={{moviesArray , setMovieArray}}>
        <h1>{children}</h1>
    </MovieContext.Provider>
)
}
export default MoviesContext