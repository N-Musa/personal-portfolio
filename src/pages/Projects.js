import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { GoLinkExternal } from 'react-icons/go'
import { projectsData } from '../components/ProjectsData'
const Projects = () => {
    if (!projectsData.length) return null

    return (
        <div className="container mt-14 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full ">
        <section className="w-full">
        <h2 className="text-2xl font-bold text-center p-2">My Projects</h2>
            <p className='font-Quicksand p-1 text-center text-xl'>Some of the stuff I've done so far..</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                
                {projectsData.map((project, index) => (
                    <div className='transform duration-500 hover:-translate-y-1 cursor-pointer shadow-lg text-center 
                    h-80 pb-3 p-3'>
                    <h1 className='text-center font-bold text-xl p-2'>{project.name}</h1>
                    <h4 className='mt-4 font-Quicksand p-2'>{project.description}</h4>
                    <div className='leading-relaxed'>
                    <p className='p-2'>{`Stack : ${project.stack}`}</p>
                    </div>
                    <div className='text-right space-x-6 text-xl'>
                    <a className='inline-block text-2xl text-Orange'  href={project.sourceCode} target='_blank' rel='noopener noreferrer'>
                        <FiGithub />
                    </a>
                    <a className='inline-block text-2xl text-Orange' href={project.livePreview} target='_blank' rel='noopener noreferrer'>
                        <GoLinkExternal />
                    </a>
                    </div>
                    </div>
                ))}
               
                
            </div>
       
        </section>
    </div>
          
          
    )
   
}

export default Projects
