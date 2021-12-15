import React from 'react'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const SingleVideo = ({ location }) => {

    const [trailerUrl, setTrailerUrl] = React.useState(null)

    React.useEffect(() => {
        const videoName = location.state.videoName
        console.log(videoName)
        movieTrailer(videoName || '')
            .then((url) => {
                console.log(url)
                const urlParams = new URLSearchParams( new URL(url).search)
                console.log(urlParams.get('v'))
                setTrailerUrl(urlParams.get('v'))
            })
            .catch((error) => console.log(error))
    }, []);

    return (
        <div className='single-vid-container'>
            <Youtube videoId={trailerUrl || ''} className='youtube' />
        </div>
    )
}

export default SingleVideo