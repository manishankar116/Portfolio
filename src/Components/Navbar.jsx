import React, { useState } from 'react'
import data from '../data'
import { IoMenuSharp } from "react-icons/io5";
const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let theme = 'green';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  console.log(isMenuOpen);

  return (
    <div className=' w-screen fixed top-0 left-0 backdrop-filter backdrop-blur-sm bg-opacity-10 '>
      <header className='  '>
        <nav className=' flex justify-between h-10 items-center px-10 '>
          <p className=' font-bold text-lg'>Portfolio</p>

          <div className="md:hidden">
            <IoMenuSharp className=' cursor-pointer' onClick={toggleMenu} />
          </div>

          <ul className=' hidden md:flex gap-5'>
            <li className={`hover:text-orange-500 text-orange-500 cursor-pointer duration-300`}>Home</li>
            <li className=' hover:text-orange-500 cursor-pointer duration-300'>About</li>
            <li className=' hover:text-orange-500 cursor-pointer duration-300'>Experience</li>
            <li className=' hover:text-orange-500 cursor-pointer duration-300'>Skills</li>
            <li className=' hover:text-orange-500 cursor-pointer duration-300'>Projects</li>
            <li className=' hover:text-orange-500 cursor-pointer duration-300'>Contact</li>
          </ul>
        </nav>

        {
            isMenuOpen ?  
            <div className={`transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full '}`}>
              <ul className=' flex-col md:hidden gap-5 backdrop-filter backdrop-blur-sm bg-opacity-10   py-3 pl-10'>
              <li className=' py-1'>Home</li>
              <li className=' py-1'>About</li>
              <li className=' py-1'>Experience</li>
              <li className=' py-1'>Skills</li>
              <li className=' py-1'>Projects</li>
              <li className=' py-1'>Contact</li>
            </ul>
            </div>
            : null
          }
      </header>
    </div>
  )
}

export default Navbar