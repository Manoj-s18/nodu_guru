import React, {  useEffect } from 'react'
import Movies from './../Movies/Movie'
// import axios from 'axios'
import './Home.scss'
import { useDispatch } from 'react-redux'
import {fetchMovies, fetchShows} from '../../Features/movies/movieSlice'

function Home() {

  const dispatch = useDispatch();
  // const fetchData = useCallback(async ()=>{
  //   axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=94f8134b&s=joker&type=movie')
  //   .then((response)=>{
  //     dispatch(addMovies(response.data));
  //     console.log('response from api ',response.data);
  //   })
  //   .catch((error)=>{
  //     console.log('error from api',error);
  //   })},[dispatch])
  

  useEffect(()=>{
    dispatch(fetchMovies());
    dispatch(fetchShows());
    console.log('apicall')
  },[dispatch])

  return (
    <div className='banner'>
      <Movies/>
    </div>
  )
}

export default Home