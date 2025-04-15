import React from 'react'
import data from '../data'
import { FaFacebook, FaGithub, FaLinkedin, FaStackOverflow, FaWhatsapp } from 'react-icons/fa'

const About = () => {
  return (
    <div className=''>
      
      <h1 className=' flex justify-center -mb-6 mt-5 font-bold text-5xl text-orange-500'>About Me</h1>

      <div className="container mt-10  mx-auto flex flex-col  md:flex-row gap-6 md:mt-0 w-full justify-center items-center h-[70vh]">
        <p className=' pl-5 w-full md:w-[500px] md:pl-0'>{data.about}</p>
        <img src="https://img.freepik.com/free-photo/close-up-portrait-caucasian-unshaved-man-eyeglasses-looking-camera-with-sincere-smile-isolated-gray_171337-630.jpg" className=' w-[200px] h-[200px] rounded-full object-cover' alt="" />
        <span className=' flex flex-row md:flex-col text-2xl gap-5 mt-3 text-orange-500'>
          <FaGithub />
          <FaLinkedin />
          <FaFacebook />
          <FaStackOverflow />
          <FaWhatsapp />
        </span>
      </div>

    </div>
  )
}

export default About