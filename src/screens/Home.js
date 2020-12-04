import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home-page'>
            <div>
                <Link className='link' to='/projects'><div id='projects-button'>Projects</div></Link>
            </div>
            <div>
                <Link className='link' to='/contact'><div id='contact-button'>Contact</div></Link>
            </div>
        </div>
    )
}

export default Home