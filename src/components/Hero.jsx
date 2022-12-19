import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-green font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='text-4xl font-bold md:text-7xl md:py-6 sm:text-6xl'>Grow with data.</h1>
            <div className='flex justify-center items-center'>
                <p className='text-xl font-bold py-4 md:text-5xl sm:text-4xl'>Fast, Flexible financing for</p>
                <Typed 
                className='text-xl font-bold pl-2 md:text-5xl md:pl-4 sm:text-4xl'
                strings={
                    [
                        'BTB',
                        'BTC',
                        'SASS'
                    ]   
                }
                typeSpeed={120}
                backSpeed={140}
                loop
                />
            </div>
            <p className='text-xl font-bold text-gray-500 md:text-2xl'>
                Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.
            </p>
            <button className='bg-green w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero