import React, { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import MovieList from "./MovieList";

import AddFavourites from "./AddFavourites";
import RemoveFavourites from "./RemoveFavourites";
import Header from "./Header";
import Pagination from "./Pagination";
import Favourites from "./Favourites";
const Search = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  const getMovieRequest = async (searchValue, currentPage) => {
    const url = `http://www.omdbapi.com/?apikey=14f1c93e&s=${searchValue}&page=${currentPage}`;
    console.log(url);

    const response = await fetch(url);
    const responseJson = await response.json();
    debugger;
    const count = responseJson.totalResults;

    if (responseJson.Search) {
      //movies.concat(responseJson.Search)
      setMovies(responseJson.Search);

      setTotalCount(count);
    }
  };

  useEffect(() => {
    if (searchValue.trim()) {
      getMovieRequest(searchValue, currentPage);
    }
  }, [searchValue, currentPage]);

  useEffect(() => {
    const movieFavourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );

    if (movieFavourites) {
      setFavourites(movieFavourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
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
  const display =
    totalCount > 0
      ? `Total ${totalCount} results found for ${searchValue}`
      : "";

  const currentPost = movies;
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Header
        setMovies={setMovies}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        display={display}
        setTotalCount={setTotalCount}
      />

      <div className="movies">
        <MovieList
          movies={currentPost}
          handleFavouritesClick={addFavouriteMovie}
          favouriteComponent={AddFavourites}
        />
      </div>

      {/* <Favourites
        movies={favourites}
        handleFavouritesClick={removeFavouriteMovie}
        favouriteComponent={RemoveFavourites}
      /> */}

      <div className="page">
        <Pagination
          postPerPage={postPerPage}
          totalCount={totalCount}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default Search;
