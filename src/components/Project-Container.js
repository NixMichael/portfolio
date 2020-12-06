import React from 'react'
import GreenOil from '../assets/site-examples/green-oil-shop.png'
import MACA from '../assets/site-examples/maca-home-page.png'
import RecordKeeper from '../assets/site-examples/recordkeeper/record-keeper-01.png'

const ProjectContainer = () => {
	return (
		<div>
			<div className='project-container'>
				<h3>GREEN OIL</h3>
				<div className='preview'>
					<img src={GreenOil} alt='React Project' />
				</div>
				<a target='_blank' className='live' href='https://elastic-lovelace-14cb3f.netlify.app/'>View Live</a>
				<a target='_blank' className='code' href='https://github.com/c0llid3r/green-oil'>View Code</a>
			</div>

			<div className='project-container'>
				<h3>RECORD KEEPER</h3>
				<div className='preview'>
					<img src={RecordKeeper} alt='React Project' />
				</div>
				<a target='_blank' className='live' href='https://distracted-liskov-55fae3.netlify.app/'>View Live</a>
				<a target='_blank' className='code' href='https://github.com/c0llid3r/recordkeeper'>View Code</a>
			</div>

			<div className='project-container'>
				<h3>MACA</h3>
				<div className='preview'>
					<img src={MACA} alt='React Project' />
				</div>
				<a target='_blank' className='live' href='https://pedantic-booth-dbf87d.netlify.app/'>View Live</a>
				<a target='_blank' className='code' href='https://github.com/c0llid3r/maca-website'>View Code</a>
			</div>
		</div>
	)
}

export default ProjectContainer