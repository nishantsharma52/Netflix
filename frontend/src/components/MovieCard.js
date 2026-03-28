import React from 'react'
import { Banner_Url } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { getId, setOpen } from '../redux/movieSlice'

const MovieCard = ({ posterPath, movieId }) => {
    const dispatch = useDispatch()

    if (posterPath === null) return null
    const handleOpen = () => {
        dispatch(getId(movieId))
        dispatch(setOpen(true))

    }
    return (
        <div onClick={handleOpen} className='w-48 pr-2 '>
            <img src={`${Banner_Url}/${posterPath}`} alt="movie" />
        </div>
    )
}

export default MovieCard