import React, { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MoviesListHeading from './components/moviesListHeading';
import SearchBox from './components/SearchBox';
const App = () => {
  const [movies,setMovies] = useState([]);

  const [searchValue,setSearchValue] = useState('');

  const getMoviesRequest = async(searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=14f1c93e`

    const respone = await fetch(url);
    const responseJson = await respone.json();

    if(responseJson.Search){
    setMovies(responseJson.Search);
    }

  };

  useEffect(()=>{
    getMoviesRequest(searchValue);
  },[searchValue]);

  return <div className='container-fluid movie-app'>
    <div className='row d-flex align-items-center mt-4 mb-4'>
      <MoviesListHeading heading = "Movies"/>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
    </div>
    
    <MovieList movies={movies}/>
    
   
  </div>
}

export default App;
