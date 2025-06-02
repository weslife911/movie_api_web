import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { axiosInstance } from "../axios/axios"

export const fetchDirectors = createAsyncThunk("directors/fetchDirectors", async() => {
    const response = await axiosInstance.get("/directors/get-directors");
    return response.data;
});

const initialState = {
    directors: [],
    status: "idle"
};

const directorSlice = createSlice({
    name: "directors",
    initialState,
    extraReducers(builder) {
        builder
        .addCase(fetchDirectors.pending, (state) => {
            state.status = "pending";
        })
        .addCase(fetchDirectors.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.directors = action.payload;
        })
    }
});

export const getDirectors = (state) => state.directors.directors;
export default directorSlice.reducer;