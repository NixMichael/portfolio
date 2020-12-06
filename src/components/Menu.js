import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
	return (
		<div className='menu'>
			<NavLink className='menu-item' activeClassName='active' to='/' exact>HOME</NavLink>
			<NavLink className='menu-item' activeClassName='active' to='/projects'>PROJECTS&nbsp;</NavLink>
			<NavLink className='menu-item' activeClassName='active' to='/experience'>CV&nbsp;&nbsp;</NavLink>
			<NavLink className='menu-item' activeClassName='active' to='/contact'>CONTACT&nbsp;&nbsp;&nbsp;</NavLink>
		</div>
	)
}

export default Menu