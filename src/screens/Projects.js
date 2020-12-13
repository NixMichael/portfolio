import React from 'react'
import ProjectContainer from '../components/Project-Container'

const Projects = () => {

    const scrollTop = () =>{
      window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
      <div className='projects'>
				<ProjectContainer />
          <div className='scroll-top' onClick={scrollTop}></div>
      </div>
    )
}

export default Projects