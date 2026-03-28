import React from 'react'
import ViedoTitle from './ViedoTitle'
import ViedoBackground from './ViedoBackground'
import { useSelector } from 'react-redux'

function MainContainer() {
  const movie = useSelector(store=>store.movie?.nowPlayingMovie)
  if(!movie) return;

  console.log(movie);
  
  const {overview, title, id} = movie[0]

  return (
    <div className=' overflow-x-hidden'>
        <ViedoTitle title={title} overview={overview}/>
        <ViedoBackground movieId={id}/>
      
    </div>
  )
}

export default MainContainer
