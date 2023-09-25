import React from 'react'
import Weather from "../assets/w_report.png";
import Shoes from "../assets/shoes.png";
import Blub from "../assets/blub_on_off.png";

const Portfolio = () => {
    const prots=[
        {
            id:1,
            src:Weather
        },
        {
            id:2,
            src:Shoes
        },
        {
            id:3,
            src:Blub
        },
    ]
  return (
    <div name='protfolio' className='w-full h-screen bg-gradient-to-b from-black to-gray-600 text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6'>check out some of my work right here</p>
        </div>
        <div className='grid sm:grid-col-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {
            prots.map(({id,src})=>(
                <div key={id} className='shadow-md shodow-gray-600 rounded-lg'>
                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
               
                <div className='flex items-center justify-center'>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >Code </button>
                </div>
            </div>
            ))
        }
            
        </div>
        </div>
    </div>
  )
}

export default Portfolio