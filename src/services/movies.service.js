const movieService = async ()=>{
    try {
        return await fetch("https://my-json-server.typicode.com/Jeck99/movies-api/movies")
        .then(respone=>respone.json())
       
    } catch (error) {
        
    }finally{

    }
}
export default movieService