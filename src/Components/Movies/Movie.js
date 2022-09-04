import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard';
import Slider from 'react-slick';
import { settings } from './CarouselSettings';
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
        <div className='searchParam'>
        <h2>Movies</h2>
        <div className='searchDiv'>
          <i className='fa fa-search'></i>
          <input type='text'></input>
        </div>
        </div>
        <div className='movieContainer'>
           <Slider {...settings}  >{renderMovies} </Slider> 
        </div>
      </div>
      <div className='movieList'>
      <div className='searchParam'>
        <h2>Series</h2>
        <div className='searchDiv'>
          <i className='fa fa-search'></i>
          <input type='text'></input>
        </div>
        </div>
        <div className='movieContainer'>
           <Slider {...settings}> {renderShows} </Slider>
        </div>
      </div>

    </div>
  )
}

export default Movie