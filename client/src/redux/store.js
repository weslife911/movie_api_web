import { configureStore } from "@reduxjs/toolkit"
import directorSlice from "./directorSlice"
import actorSlice from "./actorSlice"
import movieSlice from "./movieSlice"

export const store = configureStore({
    reducer: {
        directors: directorSlice,
        actors: actorSlice,
        movies: movieSlice
    }
});