import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='text-2xl font-bold py-2 md:text-3xl sm:text-3xl'>Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col items-center justify-between sm:flex-row'>
                    <input type="email" placeholder='Enter Email' className='p-3 flex w-full rounded-md text-black focus:outline-none'/>
                    <button className='bg-green w-[200px] rounded-md font-medium  my-6 mx-auto py-3 text-black md:ml-4 sm:ml-4'>Notify Me</button>
                </div>
                <p>
                    We care about the protection of your data. Read our{' '}
                    <span className='text-green hover:underline hover:underline-offset-4'><a href='#'>Privacy Policy.</a></span>
                </p>
            </div>

        </div>
    </div>
  )
}

export default Newsletter