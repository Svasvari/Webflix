import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const SingleVideo = ({ location }) => {

    const [trailerUrl, setTrailerUrl] = useState(null)
    const [video, setVideo] = useState({})
    const [videoName, setVideoName] = useState(null)

    const [playing, setPlaying] = useState(false)

    React.useEffect(() => {
        const video = location.state.video
        setVideo(video)
        const name = video?.title || video?.original_title || video?.name || video?.original_name
        setVideoName(name)

        movieTrailer(name || '')
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search)
                console.log(urlParams.get('v'))
                setTrailerUrl(urlParams.get('v'))
            })
            .catch((error) => console.log(error))
    }, []);

    function handlePlay() {
        setPlaying(!playing)
    }

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <div className='single-vid-container' >
            <div className={playing === true ? 'back-bar-closed' : 'back-bar'}>
                <Link className={playing === true ? 'back-button-closed' : 'back-button'} to='/home'>{'< Back'}</Link>
                <h1 className={playing === true ? 'play-title-closed' : 'play-title'}>{videoName}</h1>
                <h1 className={playing === true ? 'banner-desc-play-closed' : 'banner-desc-play'}>
                    {video?.overview}
                </h1>
            </div>
            <Youtube videoId={trailerUrl || ''} className='youtube' onPlay={() => handlePlay()} onPause={() => handlePlay()} />
        </div>
    )
}

export default SingleVideo