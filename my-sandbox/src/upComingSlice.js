import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_Key = "c2e626c815d3a852846d380a6dfd8c5e"

export const fetchUpComingMovies = createAsyncThunk(
    "upComingMovies/fetchUpComingMovies",
    async () => {
        try {
            const response = await axios.get("https://api.themoviedb.org/3/movie/upcoming", {
                params: {
                    api_key: API_Key
                }
            })
            console.log(response.data.results)
            return response.data.results
        } catch (error) {
            console.error('error', error)
        }
    }
)

const upComingSlice = createSlice({
    name: 'upComingMovies',
    initialState: {
        loading: false,
        upComingMovies: [],
        error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUpComingMovies.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchUpComingMovies.fulfilled, (state, action) => {
                state.loading = false
                state.upComingMovies = action.payload
                state.error = ''
            })
            .addCase(fetchUpComingMovies.rejected, (state, action) => {
                state.loading = false
                state.upComingMovies = []
                state.error = action.payload
            })
    }
})

export default upComingSlice.reducer
