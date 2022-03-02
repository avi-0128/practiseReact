import React from 'react'
import MovieList from './MovieList'
import RemoveFavourites from './RemoveFavourites';
const Favourites = ({favouriteComponent}) => {

    const removeFavouriteMovie = (movie) => {
        const newFavouriteList = favourites.filter(
          (favourite) => favourite.imdbID !== movie.imdbID
        );
    
        setFavourites(newFavouriteList);
        saveToLocalStorage(newFavouriteList);
      };

   const movies= JSON.parse(window.localStorage.getItem('react-movie-app-favourites'));

  return (
    <MovieList movies={movies}
    handleFavouritesClick={removeFavouriteMovie}
    favouriteComponent={RemoveFavourites}
					
    />
  )
}

export default Favourites