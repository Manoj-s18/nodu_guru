import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './movies/movieSlice'

export const Store = configureStore({
    reducer:{
        NoduGuru:moviesReducer,
    },
})