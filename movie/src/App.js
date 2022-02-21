import React, { useEffect, useState } from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import MoviesListHeading from './components/moviesListHeading';
import SearchBox from './components/SearchBox';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import Count from './components/Count';
import MyContent from './components/MyContent';
const App = () => {
  const [movies,setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue,setSearchValue] = useState('');
  const [currentPage,setCurrentpage] = useState(1);
  const [postPerPage,setPostPerPage] = useState(5); 

  const getMoviesRequest = async(searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=14f1c93e`

    const respone = await fetch(url);
    //converts http request to json
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

  const addMyContent = (movie) => {
    const newContentList = [...favourites, movie];
    setFavourites(newContentList);
  }


  return <div className='container-fluid movie-app'>
    <div className='row d-flex align-items-center mt-4 mb-4'>
      <MoviesListHeading heading = "Movies"/>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
      <Count size = {movies.length}/>
    </div>
    <div className='row'>
    <Posts movies={movies} handleMyContentClick={addMyContent}  myContent = {MyContent}/>
    </div>
    <div className='row d-flex align-items-center mt-4 mb-4'>
      <MoviesListHeading heading = "MyContent"/>
     
    </div>
    <div className='row'>
    <Posts movies={favourites} handleMyContentClick={addMyContent}  myContent = {MyContent}/>
    </div>
    
    <Pagination postPerPage={ postPerPage } totalPosts={ movies.length } paginate={paginate}/>
    </div>
}

export default App;
