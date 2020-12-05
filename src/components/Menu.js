import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
	return (
		<div className='menu'>
			<NavLink className='menu-item' activeClassName='active' to='/' exact>HOME</NavLink>
			<NavLink className='menu-item' activeClassName='active' to='/projects'>PROJECTS</NavLink>
			<NavLink className='menu-item' activeClassName='active' to='/contact'>CONTACT</NavLink>
		</div>
	)
}

export default Menu