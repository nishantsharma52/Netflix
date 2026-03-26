import React from 'react'
import MovieList from './MovieList'
import {useSelector} from "react-redux"


function MovieContainer() {
  const movie= useSelector((store)=>store.movie)
  
  
  return (
    <div className='bg-black'>
      <div className='relative z-10 -mt-52'>
     <MovieList title={"Popular Movies"} movies={movie.popularMovie}/>
     <MovieList title={"Now Playing Movies"} movies={movie.nowPlayingMovie}/>
     <MovieList title={"Top Rated Movie"} movies={movie. topRatedMovie}/>
     <MovieList title={"Upcoming Movie"} movies={movie. upcomingMovie}/>
      </div>
      console.log(movies);
      
     
    </div>
  )
}

export default MovieContainer
