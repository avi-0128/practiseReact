import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourites from './components/AddFavourites';
import RemoveFavourites from './components/RemoveFavourites';
import Header from './components/Header';
import Pagination from './components/Pagination';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [favourites, setFavourites] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [totalCount,setTotalCount] = useState(0);
	const [currentPage,setCurrentPage] = useState(1);
    const [postPerPage] = useState(10);
    
	const getMovieRequest = async (searchValue,currentPage) => {
		//console.log(currentPage);
		debugger
		const url = `http://www.omdbapi.com/?apikey=14f1c93e&s=${searchValue}&page=${currentPage}`;
		console.log(url);
		
		const response = await fetch(url);
		const responseJson = await response.json();
		debugger
		const count = responseJson.totalResults;
		
		if (responseJson.Search) {
			setMovies(movies.concat(responseJson.Search));
			debugger
			setTotalCount(count);
		}
	};

	useEffect(() => {
		if(searchValue.trim()){
		
		getMovieRequest(searchValue,currentPage);
		}
	}, [searchValue,currentPage]);
   

	useEffect(() => {
		const movieFavourites = JSON.parse(
			localStorage.getItem('react-movie-app-favourites')
		);

		if (movieFavourites) {
			setFavourites(movieFavourites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
	};

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...favourites, movie];
		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = favourites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavourites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};
	const display = totalCount>0 ? `Total ${totalCount} results found for ${searchValue}` : '';

	const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = movies.slice(indexOfFirstPost, indexOfLastPost);
// const currentPost = movies;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  
 
	return (
		
		<div className='container-fluid movie-app'>
			 <nav className='navbar navbar-dark bg-dark justify-content-between text-align-center'>
        	<a className='navbar-brand'>Movies</a>
			<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
			<a className='navbar-brand'>{display}</a>
			
   		</nav>
		   <div className='row'>
		   <div className='col-6'>
		 		<MovieList
		 			movies={currentPost}
		 			handleFavouritesClick={addFavouriteMovie}
		 			favouriteComponent={AddFavourites}
		 		/>
		 	</div>
			 <div className='col-6'>
				<h1>Favourites</h1>
				<div className='row'>
				<MovieList
		 			movies={favourites}
		 			handleFavouritesClick={removeFavouriteMovie}
		 			favouriteComponent={RemoveFavourites}
		 		/>
		 	</div>
		</div>
		   </div>
		   <Pagination postPerPage={ postPerPage } totalCount={ totalCount } paginate={paginate}/>
		</div>

		// <div className='container-fluid movie-app'>
		// 	<div className='row d-flex align-items-center mt-4 mb-4'>
		// 		<MovieListHeading heading='Movies' />
		// 		<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
		// 	</div>
		// 	<div className='row'>
		// 		<MovieList
		// 			movies={movies}
		// 			handleFavouritesClick={addFavouriteMovie}
		// 			favouriteComponent={AddFavourites}
		// 		/>
		// 	</div>
		// 	<div className='row d-flex align-items-center mt-4 mb-4'>
		// 		<MovieListHeading heading='Favourites' />
		// 	</div>
		// 	<div className='row'>
		// 		<MovieList
		// 			movies={favourites}
		// 			handleFavouritesClick={removeFavouriteMovie}
		// 			favouriteComponent={RemoveFavourites}
		// 		/>
		// 	</div>
		// </div>
	);
};

export default App;
