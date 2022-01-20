import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    movies: {},
};

export const moviesSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        addMovies: (state, action) => {
            state.movies = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addMovies } = moviesSlice.actions;
export const getAllMovies = (state) => state.movie.movies;
export default moviesSlice.reducer;
