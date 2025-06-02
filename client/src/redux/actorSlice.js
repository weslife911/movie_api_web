import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { axiosInstance } from "../axios/axios"

export const fetchActors = createAsyncThunk("actors/fetchActors", async() => {
    const response = await axiosInstance.get("/actors/get-actors");
    return response.data;
});

const initialState = {
    actors: [],
    status: "idle"
};

const actorSlice = createSlice({
    name: "actors",
    initialState,
    extraReducers(builder) {
        builder
        .addCase(fetchActors.pending, (state) => {
            state.status = "pending";
        })
        .addCase(fetchActors.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.actors = action.payload;
        })
    }
});

export const getActors = (state) => state.actors.actors;
export default actorSlice.reducer;