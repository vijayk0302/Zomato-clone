import React from 'react'
import stand from '../assets/images/stand.avif'
import loc from '../assets/images/location.avif'
import shop from '../assets/images/shop.webp'

const OverviewCardMoblie = () => {
    return (
        <div className='flex items-center min-h-50 py-20 sm:hidden  w-full'>
            <div className='relative w-full'>
                <div className='flex gap-10 w-fit bg-white z-0  p-3 shadow-lg rounded-2xl  border border-[#ef4f5f]/10 '>
                    <div className='flex justify-center flex-col '>
                        <p className='text-[#596378] font-bold text-[16px] sm:text-lg md:text-xl lg:text-4xl'>3,00,000+</p>
                        <p className='text-[#596378] font-medium text-[10px] sm:text-sm md:text-xl lg:text-lg'>restaurants</p>
                    </div>
                    <div className='flex justify-center'>
                        <img className='sm:w-10  w-9 lg:w-17' src={shop} alt="shop" />
                    </div>
                </div>
                <div className='flex absolute top-[80%] -right-18 z-10 bg-white rotate-15 gap-6 w-fit p-3 shadow-lg rounded-2xl  border border-[#ef4f5f]/10'>
                    <div className='flex justify-center flex-col '>
                        <p className='text-[#596378] font-bold text-[16px] sm:text-lg md:text-xl lg:text-4xl'>800+</p>
                        <p className='text-[#596378] font-medium text-[10px] sm:text-sm md:text-xl lg:text-lg'>cities</p>
                    </div>
                    <div className='flex justify-center'>
                        <img className='lg:w-12 sm:w-6 w-6' src={loc} alt="location" />
                    </div>
                </div>
                <div className='flex absolute -left-4 top-[110%] z-20 bg-white -rotate-5 gap-6 w-fit p-3 shadow-lg rounded-2xl border border-[#ef4f5f]/10'>
                    <div className='flex justify-center flex-col '>
                        <p className='text-[#596378] font-bold text-[16px] sm:text-lg md:text-xl lg:text-4xl'>3 billion+</p>
                        <p className='text-[#596378] font-medium text-[10px] sm:text-sm md:text-xl lg:text-lg'>orders delivered
                        </p>
                    </div>
                    <div className='flex justify-center'>
                        <img className='lg:w-18 sm:w-7 w-7' src={stand} alt="stand" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverviewCardMoblie