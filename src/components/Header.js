import React from 'react'
import { Link } from 'react-router-dom'
import GitHubLogo from '../assets/github-logo.png'
import LinkedInLogo from '../assets/linkedin-logo.png'

const Header = () => {
	return (
		<div className='header'>
			<div className='links'>
				{/* <Link className='link' to='/'><span>Projects</span></Link>
				<Link className='link' to='/blog'><span>Contact</span></Link> */}
				<span>mpnix@protonmail.com</span>
				<img src={GitHubLogo} width='30px' alt='github: c0llid3r' />
				<img src={LinkedInLogo} width='30px' alt='LinkedIn: c0llid3r' />
			</div>
			{/* <div id='logo-container'>
			</div>
			<div className='links'>
				<Link className='link' to='/'><span>Blog</span></Link>
				<Link className='link' to='/blog'><span>Contact</span></Link>
			</div> */}
		</div>
	)
}

export default Header