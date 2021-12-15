import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import requests from '../Requests'

import Row from './Row'


export const Home = props => {
  const {username} = props

  return (
    <div className='main'>
      <h3>Watch It Again</h3>
      <Row title='Trending Today' fetchUrl={requests.fetchTrending} />
      <Row title='Webflix Originals' fetchUrl={requests.fetchOriginals} />
      <h3>Top 10 Movies Today</h3>
      <h3>Popular on Webflix</h3>
    </div>
  )
}

const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(Home)
