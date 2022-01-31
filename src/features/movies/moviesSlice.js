import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import MovieApi from '../../common/API/MovieApi';
import MovieApiKey from '../../common/API/MovieApiKey';

const initialState = {
    movies: {},
    shows: {},
};

export const fetchMovies = createAsyncThunk('movie/fetchMovies', async () => {
    const searchTerm = 'Harry';
    const response = await MovieApi.get(`?apiKey=${MovieApiKey}&s=${searchTerm}`);
    return response.data;
});

export const fetchShows = createAsyncThunk('movie/fetchShows', async () => {
    const searchTerm = 'Harry';
    const response = await MovieApi.get(
        `?apiKey=${MovieApiKey}&type=series&s=${searchTerm}`
    );
    return response.data;
});

export const moviesSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchMovies.pending]: () => {
            console.log('pending.... -fetchMovies-');
        },
        [fetchMovies.fulfilled]: (state, action) => {
            return { ...state, movies: action.payload };
        },
        [fetchMovies.rejected]: () => {
            console.error('failed - fetchMovies-');
        },
        [fetchShows.pending]: () => {
            console.log('pending.... -fetchShows-');
        },
        [fetchShows.fulfilled]: (state, action) => {
            return { ...state, shows: action.payload };
        },
        [fetchShows.rejected]: () => {
            console.error('failed - fetchShows-');
        },
    },
});

// Action creators are generated automatically for each case reducer function
export const { addMovies } = moviesSlice.actions;
// movie is the name of the reducer called in the store
export const getAllMovies = (state) => state.movie.movies;
export const getAllShows = (state) => state.movie.shows;
export default moviesSlice.reducer;
