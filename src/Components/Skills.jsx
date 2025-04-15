import React from 'react'
import { AiFillCheckCircle } from "react-icons/ai";
import data from '../data';

const Skills = () => {
  return (
    <div className=' mt-10 h-max'>
      <h1 className=' font-bold text-4xl text-orange-500 flex justify-center mb-5'>Skills</h1>

      <div className=' p-5 flex smflex-col gap-5 justify-center flex-wrap md:flex-row'>
        {
          data.skills.map(skill => (
            <section className='  border border-amber-500 w-max p-5 text-lg rounded-xl flex flex-col gap-2 hover:ease-in-out duration-300 hover:tracking-wider'>

              <div>
                <h3 className=' font-bold'>{skill.domain}</h3>
              </div>

              <div className=''>
                {
                  skill.technologies.map(tech => (
                    <p className=' flex gap-3 items-center'><AiFillCheckCircle className=' text-orange-600' />{tech}</p>
                  ))
                }
              </div>

            </section>
          ))
        }

      </div>
    </div>
  )
}

export default Skills