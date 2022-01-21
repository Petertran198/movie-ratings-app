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

// Action creators are generated automatically for each case reducer function
export const { addMovies } = moviesSlice.actions;
// movie is the name of the reducer called in the store
export const getAllMovies = (state) => state.movie.movies;
export default moviesSlice.reducer;
