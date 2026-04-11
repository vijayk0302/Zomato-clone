import React from 'react'
import stand from '../assets/images/stand.avif'
import loc from '../assets/images/location.avif'
import shop from '../assets/images/shop.webp'

const OverviewCard = () => {
  return (
    <div className='w-full h-fit hidden sm:flex  justify-center'>
      <div className='flex shadow-lg rounded-4xl p-5 border border-[#ef4f5f]/10  space-x-5'>
        <div className='flex space-x-4 border-r px-4 border-[#596378]/10 '>
          <div className='flex justify-center flex-col '>
            <p className='text-[#596378] font-bold sm:text-lg md:text-xl lg:text-4xl'>3,00,000+</p>
            <p className='text-[#596378] font-medium sm:text-sm md:text-xl lg:text-lg'>restaurants</p>
          </div>
          <div className='flex justify-center'>
            <img className='sm:w-10 md:w-15 lg:w-17' src={shop} alt="shop" />
          </div>
        </div>

        <div className='flex space-x-4 border-r px-4 border-[#596378]/10 '>
          <div className='flex justify-center flex-col '>
            <p className='text-[#596378] font-bold sm:text-lg md:text-xl lg:text-4xl'>800+</p>
            <p className='text-[#596378] font-medium sm:text-sm md:text-xl lg:text-lg'>cities</p>
          </div>
          <div className='flex justify-center'>
            <img className='lg:w-12 md:w-9 sm:w-5' src={loc} alt="location" />
          </div>
        </div>

        <div className='flex space-x-4'>
          <div className='flex justify-center flex-col '>
            <p className='text-[#596378] font-bold sm:text-sm md:text-xl lg:text-4xl'>3 billion+</p>
            <p className='text-[#596378] font-medium sm:text-sm md:text-xl lg:text-lg'>orders delivered
            </p>
          </div>
          <div className='flex justify-center'>
            <img className='lg:w-18 md:w-15 sm:w-7' src={stand} alt="stand" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverviewCard