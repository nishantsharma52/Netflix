import React from 'react'
import useMovieById from '../hooks/useMovieById'
import { useSelector } from 'react-redux'

const VideoBackground = ({ movieId, bool }) => {
    const trailerMovie = useSelector(store => store.movie.trailerMovie)
    useMovieById(movieId)

    if (!trailerMovie) return null;

    return (
        <div className='absolute top-0 left-0 w-full h-full -z-10'>
    <iframe
        className='w-full h-full'
       src={`https://www.youtube.com/embed/${trailerMovie.key}?autoplay=1&mute=1&loop=1&playlist=${trailerMovie.key}&controls=0&rel=0&modestbranding=1&origin=${window.location.origin}`}
        title="YouTube video player"
        frameBorder="0"
        allow=" autoplay; fullscreen "
        allowFullScreen
    />
</div>
    )
}

export default VideoBackground;