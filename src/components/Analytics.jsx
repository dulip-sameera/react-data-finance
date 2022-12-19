import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='mx-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={Laptop} alt='Laptop' className='w-[500px] mx-auto my-4' />
            <div className='flex flex-col justify-center'>
                <p className='text-green font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='text-2xl font-bold py-2 md:text-4xl sm:text-3xl'>Manage Data Analytics Centrally</h1>
                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptatibus eum asperiores velit, deleniti blanditiis dolor ipsum non ut, inventore consequatur. Voluptate praesentium neque laudantium. Minima mollitia soluta doloribus dolorum.
                </p>
                <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-green md:mx-0'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics