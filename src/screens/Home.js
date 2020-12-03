import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home-page'>
            <Link className='link' to='/projects'><div id='projects-button'>Projects</div></Link>
            <Link className='link' to=''><div id='contact-button'>Contact</div></Link>
        </div>
    )
}

export default Home