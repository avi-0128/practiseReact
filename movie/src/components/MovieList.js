import { React } from "react";
const MovieList = (props) => {
    return(
        <>
        {props.movies.map((movie,index) => 
        <div className="image-container d-flex justify-conent-start">
            
          
            <img src = {movie.Poster} alt="movie" className="center"></img>
          
            <div className="overlay d-flex align-items-center justify-content-center" >
               
                    <h1>{movie.Title}</h1>
                    <h3> Type - {movie.Type}</h3>
                    <h3> Release year - {movie.Year}</h3>
                    <button>Add to My Content</button>
               
            </div>
          
        
           
        </div>)}
        </>
    );
};

export default MovieList;