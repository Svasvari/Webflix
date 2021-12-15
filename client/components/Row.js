import React, { useState, useEffect } from 'react'
import axios from '../Axios'
import { Link, Redirect } from 'react-router-dom'

const Row = ({ title, fetchUrl, isCover, rowPosition, bg }) => {

    const baseImageUrl = 'https://image.tmdb.org/t/p/original/'

    const [videos, setVideos] = useState([])

    const [redirect, setRedirect] = useState(false)
    const [name, setName] = useState(null)
    const [id, setId] = useState(0)

    const [isShown, setIsShown] = useState(false);
    const [shownId, setShownId] = useState(-1);

    const [videosOne, setVideosOne] = useState([])
    const [videosTwo, setVideosTwo] = useState([])
    const [videosThree, setVideosThree] = useState([])

    useEffect(() => {
        async function fetchVideos() {
            const res = await axios.get(fetchUrl)

            const filteredRes = res.data.results.filter(video => {
                if(video.backdrop_path !== null) {
                    return video
                }
            })
            setVideos(filteredRes)

            const videosOne = videos.filter(video => videos.indexOf(video) < 7)
            setVideosOne(videosOne)

            const videosTwo = videos.filter(video => {
                if (videos.indexOf(video) > 5 && videos.indexOf(video) < 13) {
                    return video
                }
            })
            setVideosTwo(videosTwo)

            const videosThree = videos.filter(video => {
                if (videos.indexOf(video) > 11 && videos.indexOf(video) < 18) {
                    return video
                }
            })
            videosThree.push(res.data.results[0])
            setVideosThree(videosThree)

            return res
        }
        fetchVideos()
    }, [videos.length]);

    function handleHover(videoId) {
        setShownId(videoId)
        setIsShown(true)
    }

    function handleStopHover() {
        setShownId(-1)
        setIsShown(false)
    }

    function handleOnClick(name, id) {
        setRedirect(true)
        setName(name)
        setId(id)
    }

    if (redirect) {
        return <Redirect to={{ pathname: `/watch?video=${id}`, state: { videoName: name } }} />
    }

    return (
        <div className='row'>
            <h2 className={`row-title ${isCover && 'row-title-large'}`}>{title}</h2>
            <div className={`wrapper ${isCover && 'wrapper-large'}`}>
                <section className={`${isCover && 'section-large'}`} id={`${rowPosition}section1`} >
                    <a onClick={() => handleScroll()} className='row-a' href={`#${rowPosition}section3`} className="arrow__btn">‹</a>
                    {videosOne.map(video => {
                        console.log(video)
                        if (video.id === shownId) {
                            return (
                                <div
                                    key={video.id}
                                    className={videosOne.indexOf(video) === 0 ? 'row-modal-end' : 'row-modal'}
                                    onMouseLeave={() => handleStopHover()}
                                    onClick={() => handleOnClick(video?.title || video?.original_title || video?.name || video?.original_name, video.id)}
                                >
                                    <header
                                        className='modal-header'
                                        style={{ backgroundImage: `url(${baseImageUrl}${video?.backdrop_path})` }}
                                    >
                                        <div className='title-container'>
                                            <h1 className='modal-title'>
                                                {video?.title || video?.original_title || video?.name || video?.original_name}
                                            </h1>
                                        </div>
                                    </header>
                                </div>
                            )
                        } else {
                            return (
                                <img
                                    className={`row-image ${isCover && 'row-image-cover'}`}
                                    key={video.id}
                                    src={`${baseImageUrl}${isCover ? video.poster_path : video.backdrop_path}`}
                                    alt={video.name}
                                    onMouseEnter={() => handleHover(video.id)}
                                    onMouseLeave={() => setIsShown(false)}
                                />
                            )
                        }
                    })}
                    <a className='row-a' href={`#${rowPosition}section2`} className='arrow__btn'>›</a>
                </section>

                <section id={`${rowPosition}section2`}>
                    <a href={`#${rowPosition}section1`} className="arrow__btn">‹</a>
                    {videosTwo.map(video => {
                        if (video.id === shownId) {
                            return (
                                <div
                                    key={video.id}
                                    className={videosTwo.indexOf(video) === 0 ? 'row-modal-end' : 'row-modal'}
                                    onMouseLeave={() => handleStopHover()}
                                    onClick={() => handleOnClick(video?.title || video?.original_title || video?.name || video?.original_name, video.id)}
                                >
                                    <header
                                        className='modal-header'
                                        style={{ backgroundImage: `url(${baseImageUrl}${video?.backdrop_path})` }}
                                    >
                                        <h1 className='modal-title'>
                                            {video?.title || video?.original_title || video?.name || video?.original_name}
                                        </h1>
                                    </header>
                                </div>
                            )
                        } else {
                            return (
                                <img
                                    className={`row-image ${isCover && 'row-image-cover'}`}
                                    key={video.id}
                                    src={`${baseImageUrl}${isCover ? video.poster_path : video.backdrop_path}`}
                                    alt={video.name}
                                    onMouseEnter={() => handleHover(video.id)}
                                    onMouseLeave={() => setIsShown(false)}
                                />
                            )
                        }
                    })}
                    <a href={`#${rowPosition}section3`} className='arrow__btn'>›</a>
                </section>

                <section id={`${rowPosition}section3`}>
                    <a href={`#${rowPosition}section2`} className="arrow__btn">‹</a>
                    {videosThree.map(video => {
                        if (video.id === shownId) {
                            return (
                                <div
                                    key={video.id}
                                    className={videosThree.indexOf(video) === 0 ? 'row-modal-end' : 'row-modal'}
                                    onMouseLeave={() => handleStopHover()}
                                    onClick={() => handleOnClick(video?.title || video?.original_title || video?.name || video?.original_name, video.id)}
                                >
                                    <header
                                        className='modal-header'
                                        style={{ backgroundImage: `url(${baseImageUrl}${video?.backdrop_path})` }}
                                    >
                                        <h1 className='modal-title'>
                                            {video?.title || video?.original_title || video?.name || video?.original_name}
                                        </h1>
                                    </header>
                                </div>
                            )
                        } else {
                            return (
                                <img
                                    className={`row-image ${isCover && 'row-image-cover'}`}
                                    key={video.id}
                                    src={`${baseImageUrl}${isCover ? video.poster_path : video.backdrop_path}`}
                                    alt={video.name}
                                    onMouseEnter={() => handleHover(video.id)}
                                    onMouseLeave={() => setIsShown(false)}
                                />
                            )
                        }
                    })}
                    <a href={`#${rowPosition}section1`} className='arrow__btn'>›</a>
                </section>
            </div>
        </div>
    )
}

export default Row