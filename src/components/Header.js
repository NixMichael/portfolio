import React from 'react'
import GitHubLogo from '../assets/github-logo.png'
import LinkedInLogo from '../assets/linkedin-logo.png'

const Header = () => {
	return (
		<div className='header'>
			<div className='links'>
				<span id='email'>mpnix@protonmail.com</span>
				<a target='_blank' href='https://github.com/c0llid3r'><img src={GitHubLogo} width='30px' alt='github: c0llid3r' /></a>
				<a target='_blank' href='https://github.com/c0llid3r'><img src={LinkedInLogo} width='30px' alt='LinkedIn: c0llid3r' /></a>
			</div>
		</div>
	)
}

export default Header