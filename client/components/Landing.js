import React from 'react'
import {Link} from 'react-router-dom'

export const Landing = () => {
    return (
        <div>
            <div>Landing</div>
            <Link to="/signup">Sign Up</Link>
        </div>
    )
}