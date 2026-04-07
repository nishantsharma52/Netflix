import React, { useState } from 'react'
import ViedoTitle from './ViedoTitle'
import ViedoBackground from './ViedoBackground'
import { useSelector } from 'react-redux'

function MainContainer() {
  const movie = useSelector(store => store.movie?.nowPlayingMovie)
  
  if (!movie) return null;
  
  const { overview, title, id } = movie[0]

  return (
    <div 
      className='relative w-screen h-screen overflow-hidden'
      // Yeh div click hote hi browser "user interaction" maanta hai
      onClick={() => {}}  
    >
      <ViedoBackground key={id} movieId={id} />
      <ViedoTitle title={title} overview={overview} />
    </div>
  )
}

export default MainContainer