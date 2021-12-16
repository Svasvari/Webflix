import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'

const Navbar = ({ handleClick, isLoggedIn }) => {

  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, []);

  return (
    <div className={`navbar ${visible && 'navbar-solid'}`}>
      <h1 className='logo'>WEBFLIX</h1>
      <nav>
        {isLoggedIn ? (
          <div className='nav-inner-container'>
            <div>
              {/* The navbar will show these links after you log in */}
              <Link className='nav-a' to="/home">Home</Link>
              <Link className='nav-a' to="/browse/tvShows">TV Shows</Link>
              <Link className='nav-a' to="/browse/movies">Movies</Link>
            </div>
            <div>
              <a className='nav-a' href="#" onClick={handleClick}>
                Logout
              </a>
            </div>
          </div>
        ) : (
          <div className='nav-inner-container'>
            <div ></div>
            <Link className='login-button-nav nav-a' to="/login">Sign In</Link>
          </div>
        )}
      </nav>
      <hr />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.auth.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)
