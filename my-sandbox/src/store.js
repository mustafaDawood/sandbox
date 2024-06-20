import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import seriesReducer from './seriesSlice'
import upComingReducer from './upComingSlice'

const Store = configureStore({
    reducer : {
        movies : movieReducer ,
        series : seriesReducer ,
        upComingMovies : upComingReducer

    }
})

export default Store