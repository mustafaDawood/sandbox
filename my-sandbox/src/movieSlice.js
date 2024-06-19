import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const API_Key = "79a6bbcee2beaf243b64b6967053abda"
const BASE_URL = "https://api.themoviedb.org/3"

export const fetchPopularMovies = createAsyncThunk(
    "movies/fetchPopulatMovies",
    async () => {
        try {
            const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
                params: {
                    api_key: API_Key,
                },
            })
            console.log(JSON.stringify(response.data.results)) ;
            return response.data.results;
        } catch (error) {
            console.error('error' , error)
        }
       
    }
)

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        loading: false,
        movies: [],
        error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPopularMovies.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchPopularMovies.fulfilled , (state , action) => {
                console.log('Fetch successful:', action.payload);
                state.loading = false 
                state.movies = action.payload
                state.error = ''
            })
            .addCase(fetchPopularMovies.rejected , (state , action) => {
                console.log('Fetch failed:', action.payload);
                state.loading = false
                state.movies = []
                state.error = action.payload
            })

    }
})

export default movieSlice.reducer