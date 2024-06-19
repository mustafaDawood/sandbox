import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";

const Store = configureStore({
    reducer : {
        movies : movieReducer ,

    }
})

export default Store