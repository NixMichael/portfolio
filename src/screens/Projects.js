import React from 'react'
import GreenOil from '../assets/site-examples/green-oil-shop.png'
import MACA from '../assets/site-examples/maca-home-page.png'

const Projects = () => {
    return (
      <div className='projects'>
				<div className='project-container'>
        	<div className='preview'>
						<img src={GreenOil} alt='React Project' />
					</div>
					<div className='live'><a target='_blank' href=''>Live &gt;</a></div>
					<div className='code'><a target='_blank' href='https://github.com/c0llid3r/green-oil'>Code &gt;</a></div>
				</div>
				<div className='project-container'>
        	<div className='preview'>
						<img src={MACA} alt='Vue Project' />
					</div>
					<div className='live'><a target='_blank' href=''>Live &gt;</a></div>
					<div className='code'><a target='_blank' href='https://github.com/c0llid3r/maca-website'>Code &gt;</a></div>
				</div>
      </div>
    )
}

export default Projects