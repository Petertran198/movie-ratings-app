import React from 'react';
import MovieListing from '../MovieListing/MovieListing';
import { useEffect } from 'react';
import movieApi from '../../common/API/MovieApi';
import MovieApiKey from '../../common/API/MovieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies, getAllMovies } from '../../features/movies/moviesSlice';
export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMovies = async () => {
            const searchTerm = 'Harry';
            const response = await movieApi
                .get(`?apiKey=${MovieApiKey}&s=${searchTerm}`)
                .catch((error) => {
                    console.error(error, 'fetchMovies method');
                });
            dispatch(addMovies(response.data));
        };

        fetchMovies();
    }, []);

    return (
        <div>
            <div className='banner-image'></div>
            <MovieListing />
        </div>
    );
}
