import React, { useEffect } from 'react'
import GreenOil from '../assets/site-examples/green-oil-shop.png'
import MACA from '../assets/site-examples/maca-home-page.png'
import RecordKeeper from '../assets/site-examples/recordkeeper/record-keeper-01.png'
import { projects } from '../assets/project-list'

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
		{
			projects.map(project => {
				return (
					<div className={`project-container ${project.fade && 'fader'}`}>
						<div className='project-description'>
							<h3>{project.title}</h3>
							<p>{project.description}</p>
						</div>
						<div className='prv'>
							<img src={project.image} alt='React Project' />
						</div>
						<a target='_blank' className='live' href={project.liveLink}>View Live</a>
						<a target='_blank' className='code' href={project.codeLink}>View Code</a>
					</div>
				)
			})
		}
		</div>
	)
}

export default ProjectContainer