import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
	return (
		<div className='menu'>
			<Link className='menu-item' to='/'>HOME</Link>
			<Link className='menu-item' to='/projects'>PROJECTS</Link>
			<Link className='menu-item' to='/contact'>CONTACT</Link>
		</div>
	)
}

export default Menu