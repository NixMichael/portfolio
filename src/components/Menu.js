import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
	  // New scroll bar
	  useEffect(() => {
		window.addEventListener('resize', () => {
		  window.location.reload()
		})
	
		const body = document.body
		const ht = document.documentElement
	
		let totalHeight = Math.max( body.scrollHeight, body.offsetHeight, 
					   ht.clientHeight, ht.scrollHeight, ht.offsetHeight);

		document.addEventListener('scroll', (e) => {
			document.querySelectorAll('.scroller-bar')[0].style.top = `${20 + (window.innerHeight * ((window.pageYOffset / totalHeight)))}px`
		})
	  })

	return (
		<div className='menu-wrap'>
			<div className='faded-header'></div>
			<input type='checkbox' className='toggler'/>
			<div className='burger-menu'>
				<div></div>
			</div>
			<div className='menu'>
				<div className='menu-items'>
					<NavLink className='menu-item' activeClassName='active' to='/' exact>HOME</NavLink>
					<NavLink className='menu-item' activeClassName='active' to='/projects'>PROJECTS</NavLink>
					<NavLink className='menu-item' activeClassName='active' to='/experience'>CV</NavLink>
					<NavLink className='menu-item' activeClassName='active' to='/contact'>CONTACT</NavLink>
					<div className='scroller-bar'></div>
				</div>
			</div>
		</div>
	)
}

export default Menu