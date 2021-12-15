import React, { useState, useEffect } from 'react'
import axios from '../Axios'

const Row = ({ title, fetchUrl, isCover }) => {

    const baseImageUrl = 'https://image.tmdb.org/t/p/original/'

    const [videos, setVideos] = useState([])

    const [isShown, setIsShown] = useState(false);
    const [shownId, setShownId] = useState(-1);

    const [videosOne, setVideosOne] = useState([])
    const [videosTwo, setVideosTwo] = useState([])
    const [videosThree, setVideosThree] = useState([])

    useEffect(() => {
        async function fetchVideos() {
            const res = await axios.get(fetchUrl)
            setVideos(res.data.results)

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

    return (
        <div className='row'>
            <h2 className={`row-title ${isCover && 'row-title-large'}`}>{title}</h2>
            <div className={`wrapper ${isCover && 'wrapper-large'}`}>
                    <section className={`${isCover && 'section-large'}`} id='section1'>
                        <a className='row-a' href="#section3" className="arrow__btn">‹</a>
                        {videosOne.map(video => {
                            if (video.id === shownId) {
                                return (
                                    <div key={video.id} className='row-modal' onMouseLeave={() => handleStopHover()}>
                                        <img className='row-modal-image' src={`${baseImageUrl}${video.backdrop_path}`} alt={video.name} />
                                    </div>
                                )
                            } else {
                                return (
                                    <img className={`row-image ${isCover && 'row-image-cover'}`} key={video.id} src={`${baseImageUrl}${isCover ? video.poster_path : video.backdrop_path}`} alt={video.name} onMouseEnter={() => handleHover(video.id)} onMouseLeave={() => setIsShown(false)} />
                                )
                            }
                        })}
                        <a className='row-a' href="#section2" className='arrow__btn'>›</a>
                    </section>

                <section id='section2'>
                    <a href="#section1" className="arrow__btn">‹</a>
                    {videosTwo.map(video => {
                        if (video.id === shownId) {
                            return (
                                <div key={video.id} className='row-modal' onMouseLeave={() => handleStopHover()}>
                                    <img className='row-modal-image' src={baseImageUrl + video.backdrop_path} alt={video.name} />
                                </div>
                            )
                        } else {
                            return (
                                <img className={`row-image ${isCover && 'row-image-cover'}`} key={video.id} src={`${baseImageUrl}${isCover ? video.poster_path : video.backdrop_path}`} onMouseEnter={() => handleHover(video.id)} onMouseLeave={() => setIsShown(false)} />
                            )
                        }
                    })}
                    <a href="#section3" className='arrow__btn'>›</a>
                </section>

                <section id='section3'>
                    <a href="#section2" className="arrow__btn">‹</a>
                    {videosThree.map(video => {
                        if (video.id === shownId) {
                            return (
                                <div key={video.id} className='row-modal' onMouseLeave={() => handleStopHover()}>
                                    <img className='row-modal-image' src={baseImageUrl + video.backdrop_path} alt={video.name} />
                                </div>
                            )
                        } else {
                            return (
                                <img className={`row-image ${isCover && 'row-image-cover'}`} key={video.id} src={`${baseImageUrl}${isCover ? video.poster_path : video.backdrop_path}`} alt={video.name} onMouseEnter={() => handleHover(video.id)} onMouseLeave={() => setIsShown(false)} />
                            )
                        }
                    })}
                    <a href="#section1" className='arrow__btn'>›</a>
                </section>
            </div>
        </div>
    )
}

export default Row