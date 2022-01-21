import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../features/movies/moviesSlice';
import MovieCard from '../MovieCard/MovieCard';
import './movieListing.css';
export default function MovieListing() {
    const movies = useSelector(getAllMovies); // is the same as useSelector((state)=> state.movie.movies);
    console.log(movies.Response);
    let renderMovies = [];

    if (movies.Response === 'True') {
        renderMovies = movies.Search.map((movie, index) => {
            return <MovieCard key={index} data={movie} />;
        });
    } else {
        return <div className='movie-error'>Error</div>;
    }
    console.log(renderMovies);
    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h2>Movies</h2>
                <div className='movie-container'>{renderMovies}</div>
            </div>
        </div>
    );
}
