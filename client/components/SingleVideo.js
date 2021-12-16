import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const SingleVideo = ({ location }) => {

    const [trailerUrl, setTrailerUrl] = React.useState(null)

    const [playing, setPlaying] = useState(false)

    React.useEffect(() => {
        const videoName = location.state.videoName
        console.log(videoName)
        movieTrailer(videoName || '')
            .then((url) => {
                console.log(url)
                const urlParams = new URLSearchParams(new URL(url).search)
                console.log(urlParams.get('v'))
                setTrailerUrl(urlParams.get('v'))
            })
            .catch((error) => console.log(error))
    }, []);

    function handlePlay() {
        setPlaying(!playing)
    }

    return (
        <div className='single-vid-container' >
            <div className={playing === true ? 'back-bar-closed' : 'back-bar'}>
                <Link className={playing === true ? 'back-button-closed' : 'back-button'} to='/home'>{'< Back'}</Link>
            </div>
            <Youtube videoId={trailerUrl || ''} className='youtube' onPlay={() => handlePlay()} onPause={() => handlePlay()}/>
        </div>
    )
}

export default SingleVideo