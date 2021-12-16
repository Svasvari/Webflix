import React from 'react'
import { connect } from 'react-redux'
import { authenticate } from '../store'
import { Link } from 'react-router-dom'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const { name, displayName, handleSubmit, error } = props

  return (
    <div className='login'>
      <form onSubmit={handleSubmit} name={name} className='login-form'>
        <h1 className='login-title'>{name === 'signup' ? 'Sign Up' : 'Sign In'}</h1>
        <div>
          <label htmlFor="username">
            {/* <small>Username</small> */}
          </label>
          <input className='input' name="username" type="text" placeholder='Username' />
        </div>
        <div>
          <label htmlFor="password">
            {/* <small>Password</small> */}
          </label>
          <input className='input' name="password" type="password" placeholder='Password' />
        </div>
        <div>
          <button type="submit" className='login-button'>{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
        <div className='signup-now'>
          <Link to={`/${name === 'signup' ? 'login' : 'signup'}`}>{name === 'signup' ? 'Already a Member? Sign In' : 'Sign Up Now'}</Link>
        </div>

      </form>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.auth.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.auth.error
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const formName = evt.target.name
      const username = evt.target.username.value
      const password = evt.target.password.value
      dispatch(authenticate(username, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(mapSignup, mapDispatch)(AuthForm)
