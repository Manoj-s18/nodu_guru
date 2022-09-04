import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchMovies = createAsyncThunk('NoduGuru/fetchMovies',async (search='joker')=>{
    const response = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=94f8134b&s=${search}&type=movie`)
    console.log("api data",response.data);
    return response.data;
})

export const fetchShows = createAsyncThunk('NoduGuru/fetchShows',async (search='joker')=>{
    const response = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=94f8134b&s=${search}&type=series`)
    console.log("api data",response.data);
    return response.data;
})

export const fetchById = createAsyncThunk('NoduGuru/fetchById',async (id)=>{
    const response = await axios.get(`http://www.omdbapi.com/?apikey=94f8134b&i=${id}&Plot=full`)
    console.log("api data",response.data);
    return response.data;
})


const initialState = { 
    movies:{},
    shows:{},
    fetchedById:{}
}

const movieSlice = createSlice({
    name :"NoduGuru",
    initialState,
    reducers:{
       removeFetchedById:(state)=>{
            state.fetchedById={}
        }

    },
    extraReducers:{
        [fetchMovies.pending]:()=>{console.log("PENDING...")},
        [fetchMovies.fulfilled]:(state,{payload})=>{
            console.log("fetched movies");
            return {...state,movies:payload}
        },
        [fetchShows.fulfilled]:(state,{payload})=>{
            console.log("fetched shows");
            return {...state,shows:payload}
        },
        [fetchById.fulfilled]:(state,{payload})=>{
            console.log("fetched By ID");
            return {...state,fetchedById:payload}
        },
        [fetchMovies.rejected]:()=>{console.log("could not fetch data")}
    }

})

export const {removeFetchedById} = movieSlice.actions;
export const getAllMovies = (state)=>state.NoduGuru.movies;
export const getAllShows = (state)=>state.NoduGuru.shows;
export const getFetchedById = (state)=>state.NoduGuru.fetchedById;
export default movieSlice.reducer;