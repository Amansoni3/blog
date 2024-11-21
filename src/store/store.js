import { configureStore } from '@reduxjs/toolkit'
import blogReducer from "../store/slice/blogSlice"

export const store = configureStore({
    reducer: {
        blogs: blogReducer
    },
})