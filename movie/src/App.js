import React, { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MoviesListHeading from './components/moviesListHeading';
import SearchBox from './components/SearchBox';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
const App = () => {
  const [movies,setMovies] = useState([]);

  const [searchValue,setSearchValue] = useState('');
  const [currentPage,setCurrentpage] = useState(1);
  const [postPerPage,setPostPerPage] = useState(6); 

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

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = movies.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentpage(pageNumber);

  return <div className='container-fluid movie-app'>
    <div className='row d-flex align-items-center mt-4 mb-4'>
      <MoviesListHeading heading = "Movies"/>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
    </div>
    <Posts movies={currentPost}/>
    {/* <MovieList movies={movies}/> */}
    <Pagination postPerPage={ postPerPage } totalPosts={ movies.length } paginate={paginate}/>
    
   
  </div>
}

export default App;
