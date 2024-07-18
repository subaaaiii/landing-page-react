import React from 'react'
import laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto md:grid-cols-2 grid'>
            <img className='w-[500px] mx-auto my-4' src={laptop} alt="laptop" />
            <div className='flex flex-col justify-center '>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente voluptatum eos sit similique pariatur harum facere explicabo ut quidem unde numquam nulla dolores vero, earum laborum. Enim commodi deleniti fugiat.</p>
                <button className="bg-[#000300] w-[200px] mx-auto md:mx-0 px-8 py-3 m-4 rounded-md text-[#00df9a] font-medium">Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics