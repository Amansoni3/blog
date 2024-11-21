import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    blogs: JSON.parse(localStorage.getItem('blogs')) || [], // Parse data from localStorage
};

export const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        addBlogs: (state, action) => {
            const newBlog = {
                id: Date.now(), // Unique ID for the blog
                ...action.payload,
            };
            state.blogs.push(newBlog);
            localStorage.setItem('blogs', JSON.stringify(state.blogs)); // Save to localStorage
        },

        updateBlog: (state, action) => {
            const { id, updatedData } = action.payload;
            const index = state.blogs.findIndex((blog) => blog.id === id);
            if (index !== -1) {
                state.blogs[index] = { ...state.blogs[index], ...updatedData };
                localStorage.setItem('blogs', JSON.stringify(state.blogs)); // Update localStorage
            }
        },
        deleteBlog: (state, action) => {
            state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
            localStorage.setItem('blogs', JSON.stringify(state.blogs)); // Update localStorage
        },
    },
});

export const { addBlogs, updateBlog, deleteBlog } = blogSlice.actions;

export default blogSlice.reducer;
