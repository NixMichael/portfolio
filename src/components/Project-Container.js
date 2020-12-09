import React, { useEffect } from 'react'
import GreenOil from '../assets/site-examples/green-oil-shop.png'
import MACA from '../assets/site-examples/maca-home-page.png'
import RecordKeeper from '../assets/site-examples/recordkeeper/record-keeper-01.png'

const ProjectContainer = () => {

	useEffect(() => {
		const faders = document.querySelectorAll('.fader')
		const appearOptions = {
			threshold: 0,
			rootMargin: "-250px"
		}

		const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
			entries.forEach(entry => {
				if (!entry.isIntersecting) {
					return
				} else {
					entry.target.classList.add('appear')
					appearOnScroll.unobserve(entry.target)
				}
			})
		}, appearOptions)

		faders.forEach(fader => {
			appearOnScroll.observe(fader)
		})
	})
	
	return (
		<div>
			<div className='project-container'>
				<div className='project-description'>
					<h3>GREEN OIL</h3>
					<p>New e-commerce website for an eco focused bicycle oil company.</p>
				</div>
				<div className='prv'>
					<img src={GreenOil} alt='React Project' />
				</div>
				<a target='_blank' className='live' href='https://elastic-lovelace-14cb3f.netlify.app/'>View Live</a>
				<a target='_blank' className='code' href='https://github.com/c0llid3r/green-oil'>View Code</a>
			</div>

			<div className='project-container fader'>
				<div>
					<h3>RECORD KEEPER</h3>
					<p>A database system for a Clinical Photography department</p>
				</div>
				<div className='prv'>
					<img src={RecordKeeper} alt='React Project' />
				</div>
				<a target='_blank' className='live' href='https://distracted-liskov-55fae3.netlify.app/'>View Live</a>
				<a target='_blank' className='code' href='https://github.com/c0llid3r/recordkeeper'>View Code</a>
			</div>

			<div className='project-container fader'>
				<div>
					<h3>MACA</h3>
					<p>A new website for Manchester Animal Climate Action.</p>
				</div>
				<div className='prv'>
					<img src={MACA} alt='React Project' />
				</div>
				<a target='_blank' className='live' href='https://pedantic-booth-dbf87d.netlify.app/'>View Live</a>
				<a target='_blank' className='code' href='https://github.com/c0llid3r/maca-website'>View Code</a>
			</div>
		</div>
	)
}

export default ProjectContainer