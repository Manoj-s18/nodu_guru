import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {fetchById,getFetchedById,removeFetchedById} from './../../Features/movies/movieSlice'
import './MovieDetail.scss'

function MovieDetail() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getFetchedById)
  console.log(data);
  
  useEffect(()=>{
    dispatch(fetchById(id));
    return (()=>{
      dispatch(removeFetchedById())
    })
  },[dispatch,id])

  return (
    <div className='movieSection'>
      <div className='sectionLeft'>
        <div className='movieTitle'>{data.Title}</div>
        <div className='movieRating'>
          <span>
            IMDB Rating <i className='fa fa-star'></i>: {data.imdbRating}
          </span>
          <span>
            IMDB Votes <i className='fa fa-thumbs-up'></i>: {data.imdbVotes}
          </span>
          <span>
            Runtime <i className='fa fa-film'></i>: {data.Runtime}
          </span>
          <span>
            Year <i className='fa fa-calendar'></i>: {data.Year}
          </span> 
        </div>
        <div className='moviePlot'>{data.Plot}        </div>
        <div className='movieInfo'>
          <div>
            <span>Director</span>
            <span>{data.Director}</span>
          </div>
          <div>
            <span>Stars</span>
            <span>{data.Actors}</span>
          </div>
          <div>
            <span>Generes</span>
            <span>{data.Genere}</span>
          </div>
          <div>
            <span>Language</span>
            <span>{data.Language}</span>
          </div>
          <div>
            <span>Awards</span>
            <span>{data.Awards}</span>
          </div>
        </div>
        
      </div>
      <div className='sectionRight'>
          <img src={data.Poster} alt = {data.Title} />
        </div>
      
    </div>
  )
}

export default MovieDetail