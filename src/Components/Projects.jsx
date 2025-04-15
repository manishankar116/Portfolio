import React from 'react'
import data from '../data'

const Projects = () => {
  return (
    <div>
      <h2 className=' font-bold text-4xl flex justify-center mt-10 h-max text-orange-500'>Projects</h2>
      <div className=' m-3 flex flex-wrap gap-5 justify-center mt-10'>
        {
          data.projects.map(project => (
            <section>
              <img src={project.imageLink} alt={project.projectName} className=' rounded-md w-[310px] h-[200px] object-cover' />
              <span className=' flex flex-col gap-2'>
                <p className=' font-bold mt-1'>{project.projectName}</p>
                <div className='  flex gap-2 w-[300px] flex-wrap'>
                  {
                    project.technologiesUsed.map(tech => (
                      <p className=' bg-orange-100 text-orange-700 font-semibold px-4 py-1 rounded-full text-[12px]'>{tech}</p>
                    ))
                  }
                </div>
              </span>
            </section>
          ))
        }
      </div>
    </div>

  )
}

export default Projects