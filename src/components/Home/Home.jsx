import React from 'react';
import MovieListing from '../MovieListing/MovieListing';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies, fetchShows } from '../../features/movies/moviesSlice';

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies('Harry'));
        dispatch(fetchShows('Friends'));
    }, [dispatch]);

    return (
        <div>
            <MovieListing />
        </div>
    );
}
