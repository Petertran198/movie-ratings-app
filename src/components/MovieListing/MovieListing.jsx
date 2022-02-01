import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/movies/moviesSlice';
import MovieCard from '../MovieCard/MovieCard';
import Slider from 'react-slick';
import './movieListing.css';
import { settings } from './settings';

export default function MovieListing() {
    const movies = useSelector(getAllMovies); // is the same as useSelector((state)=> state.movie.movies);
    const shows = useSelector(getAllShows); // is the same as useSelector((state)=> state.movie.shows);
    let renderMovies = [];
    let renderShows = [];
    if (Object.keys(movies).length === 0) {
        return <div className='loading'>Loading.....</div>;
    }

    if (movies.Response === 'True') {
        renderMovies = movies.Search.map((movie, index) => {
            return <MovieCard key={index} data={movie} />;
        });
    } else {
        return <div className='movie-error'>Error...</div>;
    }

    if (shows.Response === 'True') {
        renderShows = shows.Search.map((show, index) => {
            return <MovieCard key={index} data={show} />;
        });
    } else {
        return <div className='movie-error'>Error...</div>;
    }

    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                <h1>Movies</h1>
                <Slider {...settings}>{renderMovies}</Slider>
                <br />

                <h1>Shows</h1>
                <Slider {...settings}>{renderShows}</Slider>
            </div>
        </div>
    );
}
