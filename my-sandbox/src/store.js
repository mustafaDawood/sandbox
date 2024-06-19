import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import seriesReducer from './seriesSlice'

const Store = configureStore({
    reducer : {
        movies : movieReducer ,
        series : seriesReducer

    }
})

export default Store