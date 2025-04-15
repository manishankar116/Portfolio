import React from 'react'
import data from '../data'

const Hero2 = () => {
    
  return (
    <div>
        <main className=' h-[100vh] flex flex-col md:flex-row'>
            <div className={` w-screen md:w-1/2  flex justify-center  bg-orange-500 h-full items-center`}>
                <img src="https://img.freepik.com/free-photo/close-up-portrait-caucasian-unshaved-man-eyeglasses-looking-camera-with-sincere-smile-isolated-gray_171337-630.jpg" alt="Portfolio" className=' w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-cover rounded-full bg-white p-[3px]' />
            </div>

            <div className=' w-screen md:w-1/2  h-full justify-center items-center flex'>
                <span className=''>
                    <p className=' text-4xl font-bold md:text-5xl'>Hello, I'm</p>
                    <p className={`text-6xl font-extrabold md:text-8xl text-orange-500`}>{data.name}</p>
                    <span className=' flex gap-3 mt-3'>
                    <button className=' border border-orange-600 outline-none p-1 px-5 rounded-4xl hover:bg-orange-500 transition duration-200 cursor-pointer hover:text-white'>Resume</button>
                    <button className='border border-orange-600 outline-none p-1 px-5 rounded-4xl hover:bg-orange-500 transition duration-200 cursor-pointer hover:text-white'>Contact Me</button>
                    </span>

                </span>
            </div>
        </main>
    </div>
  )
}

export default Hero2