import React from 'react'
import HemantImg from '../assets/hemant_photo_size.png'
import {TbArrowRightTail} from "react-icons/tb";
import {Link} from 'react-scroll';

const Homes = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-700'>
        <div className='max-w-screen-lg mx-auto flex flex-col item-center justify-center h-full px-6 md:flex-row pt-32'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Front-End Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>I completed my bachelor's degree in 2017 from TIT&S college Bhiwani(127021 ).
                Currently, iI love to work on web application using technologies like <span>JavaScript,React,Tailwind,HTML-5,CSS.</span>
                </p>
                <div>
                    <button className='group text-white e-fit px-6 py-3 my-2 flex items-center roun bg-gradient-to-r from-cyan-500 to-blue cursor-pointer rounded-xl'>Portfolio
                    <span className='group-hover:rotate-90 duration-300'><TbArrowRightTail size={25} className='ml-2'/></span></button>
                </div>
            </div>
            <div>
                <img src={HemantImg} alt="myimg" className='rounded-2xl mx-auto w-2/3 md:w-full' />
            </div>
        </div>
    </div>
  )
}

export default Homes