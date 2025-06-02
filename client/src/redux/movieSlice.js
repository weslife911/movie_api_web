import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { axiosInstance } from "../axios/axios"

export const fetchMovies = createAsyncThunk("movies/fetchActors", async() => {
    const response = await axiosInstance.get("/movies/get-movies");
    return response.data;
});

const initialState = {
    movies: [],
    status: "idle"
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    extraReducers(builder) {
        builder
        .addCase(fetchMovies.pending, (state) => {
            state.status = "pending";
        })
        .addCase(fetchMovies.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.movies = action.payload;
        })
    }
});

export const getMovies = (state) => state.movies.movies;
export const getMovieById = (state, movieId) => state.movies.movies.find(movie => movie._id === movieId);
export default movieSlice.reducer;