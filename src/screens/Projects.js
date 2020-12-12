import React from 'react'
import ProjectContainer from '../components/Project-Container'
import scrollTopImage from '../assets/github-logo.png'

const Projects = () => {

    const scrollTop = () =>{
      window.scrollTo({top: 0, behavior: 'smooth'});
    }

    return (
      <div className='projects'>
				<ProjectContainer />
        {/* <div className='scroll-top'> */}
          <div className='scroll-top' onClick={scrollTop}></div>
        {/* </div> */}
      </div>
    )
}

export default Projects