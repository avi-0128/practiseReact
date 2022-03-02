import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{props.movies.map((movie, index) => (
				// <div className='image-container d-flex justify-content-start m-4'>
				// 	<img src={movie.Poster} alt='movie'></img>
				// 	<div
				// 		onClick={() => props.handleFavouritesClick(movie)}
				// 		className='overlay d-flex align-items-center justify-content-center'>
				// 		<FavouriteComponent/>
				// 	</div>
				// </div>
			
				<div className=' d-inline-flex p-2 containerr '>
					<img src={movie.Poster} alt='movie' className='imagee'/>
					<div className='overlayy' onClick={() => props.handleFavouritesClick(movie)}>
						<FavouriteComponent/>
						<div className='d-inline '>{movie.Title}</div>
						<div >{movie.Year}</div>
						<div >{movie.imdbID}</div>
					</div>
				</div>
				
				


			))}
		</>
	);
};

export default MovieList;
