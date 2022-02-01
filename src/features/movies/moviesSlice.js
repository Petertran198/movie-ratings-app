import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import MovieApi from '../../common/API/MovieApi';
import MovieApiKey from '../../common/API/MovieApiKey';

const initialState = {
    movies: {},
    shows: {},
    selectedMoviesOrShows: {},
};

export const fetchMovies = createAsyncThunk('movie/fetchMovies', async (term) => {
    const response = await MovieApi.get(`?apiKey=${MovieApiKey}&s=${term}`);
    return response.data;
});

export const fetchShows = createAsyncThunk('movie/fetchShows', async (term) => {
    const response = await MovieApi.get(
        `?apiKey=${MovieApiKey}&type=series&s=${term}`
    );
    return response.data;
});

export const fetchSelectedMoviesOrShows = createAsyncThunk(
    'movie/fetchMoviesOfShows',
    async (imdb) => {
        const response = await MovieApi.get(`?apiKey=${MovieApiKey}&i=${imdb}`);
        return response.data;
    }
);
export const moviesSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        removeOldSelectedMoviesOrShow: (state) => {
            state.selectedMoviesOrShows = {};
        },
    },
    extraReducers: {
        [fetchMovies.fulfilled]: (state, action) => {
            return { ...state, movies: action.payload };
        },
        [fetchMovies.rejected]: () => {
            console.error('failed - fetchMovies-');
        },
        [fetchShows.fulfilled]: (state, action) => {
            return { ...state, shows: action.payload };
        },
        [fetchShows.rejected]: () => {
            console.error('failed - fetchShows-');
        },
        [fetchSelectedMoviesOrShows.fulfilled]: (state, action) => {
            return { ...state, selectedMoviesOrShows: action.payload };
        },
        [fetchSelectedMoviesOrShows.rejected]: () => {
            console.error('failed - fetchSelectedMoviesOrShows-');
        },
    },
});

// Action creators are generated automatically for each case reducer function
export const { removeOldSelectedMoviesOrShow } = moviesSlice.actions;
// movie is the name of the reducer called in the store
export const getAllMovies = (state) => state.movie.movies;
export const getAllShows = (state) => state.movie.shows;
export const getSelectedMoviesOrShow = (state) => state.movie.selectedMoviesOrShows;
export default moviesSlice.reducer;
