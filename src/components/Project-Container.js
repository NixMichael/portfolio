import React, { useEffect } from 'react'
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
	}, [])
	
	return (
		<div>
		{
			projects.map(project => {
				return (
					<div key={project.title} className=
					// 'project-container'
					{`project-container ${project.fade && 'fader'}`}
					>
						<div className='project-description'>
							<h3>{project.title}</h3>
							<p>{project.description}</p>
						</div>
						<div className='preview'>
							<img src={project.image} alt='React Project' />
						</div>
						<div className='project-links'>
							<a target='_blank' rel="noreferrer noopener" className='live' href={project.liveLink}>View Live</a>
							<a target='_blank' rel="noreferrer noopener" className='code' href={project.codeLink}>View Code</a>
						</div>
					</div>
				)
			})
		}
		</div>
	)
}

export default ProjectContainer