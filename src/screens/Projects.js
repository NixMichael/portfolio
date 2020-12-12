import React from 'react'
import ProjectContainer from '../components/Project-Container'

const Projects = () => {

    const scrollTop = () =>{
      window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
      <div className='projects'>
				<ProjectContainer />
        <div className='text-center'>
          <h4 onClick={scrollTop}>Back to the top</h4>
        </div>
      </div>
    )
}

export default Projects