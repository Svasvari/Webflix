import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import requests from '../Requests'

import Row from './Row'
import Banner from './Banner'


export const Movies = props => {

  return (
    <div className='main'>
        <Banner fetchUrl={requests.fetchTrendingMovies} />
      <Row title='Webflix Originals' fetchUrl={requests.fetchOriginalMovies} isCover={false} rowPosition={'1'} />
      <Row title='Trending Today' fetchUrl={requests.fetchTrendingMovies} isCover={false} rowPosition={'2'}/>
      <Row title='Top Rated' fetchUrl={requests.fetchTopRatedTv} isCover={false} rowPosition={'3'}/>
      {/* <Row title='Action' fetchUrl={requests.fetchActionMovies} isCover={false} rowPosition={'4'}/>
      <Row title='Comedy' fetchUrl={requests.fetchComedyMovies} isCover={false} rowPosition={'5'}/>
      <Row title='Horror' fetchUrl={requests.fetchHorrorMovies} isCover={false} rowPosition={'6'}/>
      <Row title='Romance' fetchUrl={requests.fetchRomanceMovies} isCover={false} rowPosition={'7'}/>
      <Row title='Documentaries' fetchUrl={requests.fetchDocuMovies} isCover={false} rowPosition={'8'}/>
      <Row title='Animation' fetchUrl={requests.fetchAnimeMovies} isCover={false} rowPosition={'9'}/>
      <Row title='Fantasy' fetchUrl={requests.fetchFantasyMovies} isCover={false} rowPosition={'10'}/> */}
    </div>
  )
}

export default Movies
