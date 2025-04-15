import React from 'react'
import data from '../data'

const Hero = () => {
  return (
    <div className=' bg-gray-100'>
      <div className="container h-[90vh]">
        <section className='flex flex-col md:flex-row w-screen justify-center items-center h-full gap-10'>

          <img src="https://img.freepik.com/free-photo/close-up-portrait-caucasian-unshaved-man-eyeglasses-looking-camera-with-sincere-smile-isolated-gray_171337-630.jpg" alt="Portfolio" className=' w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-cover rounded-full bg-orange-400 p-[3px]' />
          
          <span>
            <p className=' text-4xl font-bold md:text-5xl'>Hello, I'm</p>
            <p className=' text-6xl font-extrabold md:text-8xl text-orange-500'>{data.name}</p>

            <span className=' flex gap-3 mt-3'>
              <button className=' border border-orange-600 outline-none p-1 px-5 rounded-4xl hover:bg-orange-500 transition duration-200 cursor-pointer hover:text-white'>Resume</button>
              <button className='border border-orange-600 outline-none p-1 px-5 rounded-4xl hover:bg-orange-500 transition duration-200 cursor-pointer hover:text-white'>Contact Me</button>
            </span>

            
          </span>

        </section>
      </div>
    </div>
  )
}

export default Hero