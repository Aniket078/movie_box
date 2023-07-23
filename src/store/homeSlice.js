import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        url: {},
        genres: {},
        fav:{movies:[]},
    },
    reducers: {
        getApiConfigurations: ( state, action) => {
            state.url = action.payload
        },
        getGenres: ( state, action) => {
            state.genres = action.payload
        },  
        getFav: (state, action) => {
            state.fav.movies =  action.payload 
            // state.fav = action.payload
        },
        removeFav: (state, action) => {
            state.fav.movies.filter(movie => movie.id != action.payload)
        }
    },
})

// Action creators are generated for each case reducer function
export const { getApiConfigurations, getGenres, getFav, removeFav } = homeSlice.actions

export default homeSlice.reducer