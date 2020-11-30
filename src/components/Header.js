import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <h2>Header</h2>
            <div className='links'>
                <Link className='link' to='/'>Home</Link>
                <Link className='link' to='/blog'>Blog</Link>
            </div>
        </div>
    )
}

export default Header