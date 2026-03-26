import React from 'react'

const ViedoBackground = () => {
    return (
        <div className='w-screen'>
            <iframe
            className='w-screen aspect-video'
               src="https://www.youtube.com/embed/xfGUoq56SxI?si=w4dViftqzWYxUTmj &autoplay=1&mute=1"
                title="YouTube video player"
                frameborder="0"
                allowfullscreen>
            </iframe>
        </div>
    )
}

export default ViedoBackground