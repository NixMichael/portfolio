import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
	  // New scroll bar
	  useEffect(() => {
		window.addEventListener('resize', () => {
		  window.location.reload()
		})

		console.log(document.querySelectorAll('.scroller-bar')[0].style.top)
	
		const body = document.body
		const ht = document.documentElement
	
		let totalHeight = Math.max( body.scrollHeight, body.offsetHeight, 
					   ht.clientHeight, ht.scrollHeight, ht.offsetHeight );
	
		document.addEventListener('scroll', (e) => {
			document.querySelectorAll('.scroller-bar')[0].style.top = `${30 + (window.innerHeight * ((window.pageYOffset / totalHeight)))}px`
		})
	  })

	return (
		<div className='menu'>
			<NavLink className='menu-item' activeClassName='active' to='/' exact>HOME</NavLink>
			<NavLink className='menu-item' activeClassName='active' to='/projects'>PROJECTS</NavLink>
			<NavLink className='menu-item' activeClassName='active' to='/experience'>CV</NavLink>
			<NavLink className='menu-item' activeClassName='active' to='/contact'>CONTACT</NavLink>
			<div className='scroller-bar'></div>
		</div>
	)
}

export default Menu