import React from 'react'
import data from '../data'


const Experience = () => {

  return (
    <div className=' h-max flex flex-col items-center justify-center mt-10'>
      <h1 className=' w-screen font-bold text-4xl flex justify-evenly mb-10 text-orange-500'>Experience</h1>
      <section className='  flex w-screen justify-evenly'>
        <div className=' hidden md:block'>
          <img src=" https://img.freepik.com/free-vector/red-dart-arrow-hitting-target-center-dartboard_91128-1576.jpg?t=st=1744637141~exp=1744640741~hmac=172d44c5892f3623f14e7bce7438c3ba8e7a6a9466e1310508afc3bce2351035&w=900" alt="" className=' w-[300px] h-auto' />
        </div>
        <ol class="relative border-s border-gray-200 mt-10 mx-10">    
            {
              data && data.experience.map(experience => (
                <li class="mb-10 ms-6">            
                  <span class="absolute flex items-center justify-center w-6 h-6 bg-orange-100 rounded-full -start-3 ring-8 ring-white ">
                      <svg class="w-2.5 h-2.5 text-orange-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                      </svg>
                  </span>
                  <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 ">{experience.companyName}<span class="bg-orange-100 text-orange-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm  ms-3">{experience.role}</span></h3>
                  <time class="block mb-2 text-sm font-normal leading-none text-gray-400 ">Started on {experience.joinedOn.month} {experience.joinedOn.date}, {experience.joinedOn.year}</time>
                  <p class="mb-4 w-screen text-base font-normal text-gray-500 md:w-[500px]">{experience.jobDescription}</p>
                </li>
              ))
            }              
        </ol>
      </section>
    </div>
    
  )

}



export default Experience