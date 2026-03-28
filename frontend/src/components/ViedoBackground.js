import React from 'react'
import useMovieById from '../hooks/useMovieById'
import { useSelector } from 'react-redux'

const ViedoBackground = ({ movieId, bool }) => { // Typo fixed to 'VideoBackground'
    const trailerMovie = useSelector(store => store.movie.trailerMovie)
    useMovieById(movieId)

    if (!trailerMovie) return null;

    return (
        // --- YE WALA BADLAV SABSE ZAROORI HAI ---
        // 'bool' check karke width class set karo. 
        // Agar bool true hai (Dialog ke andar), toh width 'w-full' rakho takki ye apne container mein fit ho jaye.
        // Agar bool false hai (Main page par), toh width 'w-screen' rakho takki ye full-screen background video bane.
        // overflow-hidden safety ke liye add kiya hai.
        <div className={`${bool ? 'w-full' : 'w-screen'} overflow-hidden`}>
            <iframe
                // Iframe hamesha parent container ke size par scale karega aur aspect ratio maintain rakhega.
                // className ko simplify kiya hai.
                className='w-full aspect-video' 
                src={`https://www.youtube.com/embed/${trailerMovie.key}?si=w4dViftqzWYxUTmj&autoplay=1&mute=1`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default ViedoBackground;