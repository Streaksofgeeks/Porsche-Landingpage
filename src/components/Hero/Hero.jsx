import React from 'react';
import './Hero.css';
import CarPng from "../../assets/porsche.png";
import BuildingImage from "../../assets/background.jpg";
import Navbar from '../Navbar/Navbar';
import { motion } from "framer-motion"

const bgImage = {
  backgroundImage: `url(${BuildingImage})`, // Correct usage of template literal
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Hero = () => {
  return (
    <main style={bgImage}>
      <div className="bg-gradient-to-r from-primary to bg-primaryDark/70">
        <div className="container text-white">
          {/* Navbar components here */}
          <Navbar />
          {/* Hero Section Here */}
          <section className="grid grid-cols-1 md:grid-cols-2 place-items-center min-h-[800px] ">
            {/* Text Section Here */}
            <div className='space-y-8'>
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1,
                  duration: 0.4,


                }} className="space-y-6">
                <h1
                  className='text-5xl lg-text-7xl font-bold leading-tight uppercase'>
                  Volkswagen <br /><span className=' text-transparent text-outline'>
                    Porsche SE</span>
                </h1>
                <button
                  className="btn flex justify-center items-center gap-4 group ">
                  <i className="animation"></i>
                  Explore <svg xmlns=" http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    stroke="currentColor" stroke-width="2"
                    class="size-4  " >
                    <path fill-rule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                  </svg>
                  <i className="animation"></i>
                </button>

              </motion.div>


              {/*features section here*/}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.2,
                  duration: 0.4,


                }} className='bg-gradient-to-r from-primaryDark to bg-primary/20 p-6 space-y-2 lg:max-w-[350px] !mt-[60px] shadow-md shadow-primary'>
                <h1 className='text-xl uppercase'>Vehicle Features</h1>
                <p className="text-xs leading-loose">Porsche is renowned for its iconic design, blending timeless elegance with aerodynamic efficiency. It features advanced engineering, including powerful engines and cutting-edge technology, ensuring an exhilarating driving experience.</p>

              </motion.div>
            </div>


            <div className='relative'>
              <motion.img
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0, scale: 1.2 }}
                transition={{

                  duration: 1,
                }}
                src={CarPng} alt="Car" className="w-full relative z-30" />

              {/*glowing circle*/}
              <motion.div
                initial={{ opacity: 0, y: 0, scale: 1 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 0.8,
                  duration: 0.8,
                }}
                className='border-[20px] border-green-300 rounded-full h-[300px] w-[300px]  md:w-[300px] absolute -top-3 left-1/2 glowing-shadow '>

              </motion.div>

              {/*Bg text here*/}
              <motion.div initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  delay: 1.4,
                  duration: 0.8,
                }}
                className='absolute -top-40 left-0 z-[1]'>
                <h1 className='text-[180px] font-bold text-green-100/5 leading-none'>{""}Luxury</h1>
              </motion.div>

            </div>
          </section>
        </div>
      </div >
    </main >
  )
}

export default Hero;
