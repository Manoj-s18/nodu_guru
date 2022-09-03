import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard';
import {getAllMovies, getAllShows} from './../../Features/movies/movieSlice'
import './Movies.scss'

function Movie() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  console.log(shows);

  // console.log(" movies before api call",movies);
  let renderMovies = movies.Response==='True' ? 
  (movies.Search.map((value,index)=>{
   return  <MovieCard key={index} data={value}/>
  })
  )  : (  
  <div className='movieError'>
  <h3>{movies.Error}</h3>
  </div>
  )
  let renderShows = shows.Response==='True' ? 
  (shows.Search.map((value,index)=>{
   return  <MovieCard key={index} data={value} />
  })
  )  : (  
  <div className='movieError'>
  <h3>{shows.Error}</h3>
  </div>
  )
  return (
    <div className='movieWrapper'>
      <div className='movieList'>
        <h2>Movies</h2>
        <div className='movieContainer'>
            {renderMovies}
        </div>
      </div>
      <div className='movieList'>
        <h2>Series</h2>
        <div className='movieContainer'>
            {renderShows}
        </div>
      </div>

    </div>
  )
}

export default Movie