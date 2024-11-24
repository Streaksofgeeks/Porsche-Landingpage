import React from 'react'
import Logo from "../../assets/logo.png"
import { menu, title } from 'framer-motion/client'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaSearch } from 'react-icons/fa'
import "./navbar.css"
import { motion } from "framer-motion"

const NavMenu = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "About us",
    link: "#",
  },
  {
    id: 3,
    title: "Bikes",
    link: "#",
  },
  {
    id: 4,
    title: "Cars",
    link: "#",
  },

]

const Navbar = () => {
  return (
    <main
      className='absolute top-0 left-0 w-full pt-6 z-20 text-white'>
      <motion.div
        initial={{ opacity: 0, }}
        whileInView={{ opacity: 1, y: 10 }}

        className="container">
        <div className='flex justify-between items-center'>
          {/*Logo section*/}
          <div >
            <a href="https://www.porsche.com/middle-east/_india_/" target="_blank" rel="noopener noreferrer">
              <img src={Logo} alt="" className=' logo w-[100px] transform scale-x-[-1] ml-20' /></a>
          </div>
          {/*Nav Menu section*/}
          <div className='hidden md:block font-poppins font-bold mr-20'>
            <ul className='flex gap-4'>

              {NavMenu.map((menu) => (
                <li key={menu.id} >
                  <a href={menu.link} className='inline-block px-6 py-2 uppercase hover:bg-primary duration-200 rounded-md hover:shadow-[0px_0px_10px_4px_#d2e6ff]'>{menu.title}</a>
                </li>
              ))}
            </ul>

          </div>

          {/*Hamburger menu*/}
          <div className='flex items-center gap-6 mr-8'>
            <div className='rounded-icons'>
              <GiHamburgerMenu className='text-xl' />
            </div>
            <div className='rounded-icons'>
              <FaSearch className='text-xl' />
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  )
}

export default Navbar
