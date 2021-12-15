import React, { useState } from 'react'
import axios from '../Axios'
import { Link, Redirect } from 'react-router-dom'

const Banner = ({ fetchUrl }) => {

    const baseImageUrl = 'https://image.tmdb.org/t/p/original/'

    const [currentBanner, setCurrentBanner] = useState([])

    const [redirect, setRedirect] = useState(false)
    const [name, setName] = useState(null)
    const [id, setId] = useState(0)

    React.useEffect(() => {
        async function fetchVideos() {
            const res = await axios.get(fetchUrl)
            const selection = [res.data.results[Math.floor(Math.random() * res.data.results.length)]]
            setCurrentBanner(selection)

            return res
        }
        fetchVideos()
    }, [currentBanner.length]);

    function handleOnClick(name, id) {
        setRedirect(true)
        setName(name)
        setId(id)
    }

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    if (redirect) {
        return <Redirect to={{ pathname: `/watch?video=${id}`, state: { videoName: name } }} />
    }

    return (
        <header className='banner' style={{ backgroundImage: `url(${baseImageUrl}${currentBanner[0]?.backdrop_path})` }}>
            <div className='banner-info'>
                <h1 className='banner-title'>
                    {currentBanner[0]?.name || currentBanner[0]?.original_name || currentBanner[0]?.title || currentBanner[0]?.original_title}
                </h1>
                <div>
                    <button
                        className='banner-button-play'
                        onClick={() => handleOnClick(currentBanner[0]?.name || currentBanner[0]?.original_name || currentBanner[0]?.title || currentBanner[0]?.original_title, currentBanner[0].id)}
                    >
                        Play
                    </button>
                    <button className='banner-button'>More Info</button>
                </div>
                <h1 className='banner-desc'>
                    {truncate(currentBanner[0]?.overview, 150)}
                </h1>
            </div>
            <div className='fade-out'></div>
        </header>
    )
}

export default Banner