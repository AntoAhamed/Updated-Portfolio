import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <div className="border rounded-lg bg-white p-5">
      <p className="text-xl font-bold mb-3 border-b pb-3">Projects</p>
      <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-4'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  )
}

export default Projects
