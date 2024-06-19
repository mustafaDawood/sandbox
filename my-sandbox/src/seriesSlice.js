import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const API_Key = "c2e626c815d3a852846d380a6dfd8c5e"
const BASE_URL = "https://api.themoviedb.org/3"

 export const fetchPopularSeries = createAsyncThunk(
    'series/fetchPopularSeries' ,
    async () => {
        try {
            const response =  await axios.get("https://api.themoviedb.org/3/tv/popular" , {
                params : {
                    api_key : API_Key,
                },
            })
            console.log(response.data.results)
            return response.data.results
        } catch (error) {
            console.error(error)
        }
    }
) 

const seriesSlice = createSlice({
    name : 'series' ,
    initialState : {
        loading : false ,
        series : [] ,
        error : ''
    } ,
    reducers : {} ,
    extraReducers : (builder) => {
        builder 
        .addCase(fetchPopularSeries.pending , (state)=> {
            state.loading = true
        })
        .addCase(fetchPopularSeries.fulfilled , (state , action) => {
            state.loading = false
            state.series = action.payload
            state.error = ''
        })
        .addCase(fetchPopularSeries.rejected , (state , action) => {
            state.loading = false
            state.series = []
            state.error = action.payload
        })
    }
})

export default seriesSlice.reducer