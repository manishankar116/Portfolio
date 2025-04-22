import React from 'react'
import data from '../data'
import { FaFacebook, FaGithub, FaLinkedin, FaStackOverflow, FaWhatsapp } from 'react-icons/fa'

const About = () => {
  return (
    <div className=' mt-5 lg:mt-10'>
      
      <h1 className=' flex justify-center mb-10 lg:mb-0 font-bold text-5xl text-orange-500'>About Me</h1>

      <div className="container  mx-auto flex flex-col  md:flex-row gap-6 md:mt-0 w-full justify-center items-center h-[70vh]">
        <p className=' pl-5 w-full md:w-[500px] md:pl-0'>{data.about}</p>
        <img src={data.profileImageLink} className=' w-[200px] h-[200px] rounded-full object-cover' alt="" />
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