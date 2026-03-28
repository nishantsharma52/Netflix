import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies, searchMovie=false}) => {
  return (
    <div className='px-8'>
        <h1 className={`text-3xl ${searchMovie ? "text-black" :" text-white"} py-3`}>{title}</h1>
        <div className=' flex cursor-pointer overflow-x-auto  no-scrollbar'>
            <div className=' flex items-center'>
                {
                    movies?.map((movie) =>{
                        return(
                            <MovieCard movieId={movie.id} posterPath={movie.poster_path}/>
                        )
                    })
                }
               
                
            </div>
        </div>

    </div>
  )
}

export default MovieList