import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import requests from '../Requests'

import Row from './Row'
import Banner from './Banner'


export const Home = props => {
  const {username} = props

  return (
    <div className='main'>
      <Banner fetchUrl={requests.fetchOriginals} />
      <Row title='Webflix Originals' fetchUrl={requests.fetchOriginals} isCover={false} />
      <Row title='Trending Today' fetchUrl={requests.fetchTrending} isCover={false} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRatedMovies} isCover={false} />
    </div>
  )
}

const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(Home)
