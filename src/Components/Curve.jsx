import React from 'react'
import gold from '../assets/images/zomatoGlod.avif'
import discount from '../assets/images/discountcard.avif'
import scooter from '../assets/images/scooter.avif'
import leftoverlay from '../assets/images/leftOverlay.avif'
import rightoverlay from '../assets/images/rightOverley.avif'
import { FaStar } from "react-icons/fa";

const Curve = () => {
    return (
        <div className='bg-black relative overflow-hidden flex flex-col items-center justify-center w-full pt-30'>
            <div>
                <img className='w-80 my-auto' src={gold} alt="" />
                <h1 className='bg-clip-text text-transparent mt-8 font-bold text-xl text-center bg-linear-to-r from-[#8C6115] via-[#E9C789] to-[#996F25]'>India’s Top Savings </h1>
                <h1 className='bg-clip-text text-transparent font-bold text-xl text-center bg-linear-to-r from-[#8C6115] via-[#E9C789] to-[#996F25]'>Program for Food Lovers </h1>
            </div>
            <div className='flex gap-3 mt-5'>
                <span >
                    <FaStar className='bg-linear-to-br  leading-5 text-xl mt-1 from-[#8C6115] via-[#E9C789] to-[#996F25]' />
                </span>
                <div>
                    <span className='text-white tracking-widest font-bold text-2xl'>GOLD BENIFITS</span>
                </div>
                <span >
                    <FaStar className='bg-linear-to-br  leading-5 text-xl mt-1 from-[#8C6115] via-[#E9C789] to-[#996F25]' />
                </span>
            </div>
            <div className='flex mt-4 gap-7'>
                <div className='flex gap-3'>
                    <img className='w-20' src={discount} alt="" />
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-white font-bold text-xl'>Free Delivery</h1>
                        <h1 className='bg-clip-text text-transparent font-bold text-xl text-center bg-linear-to-r from-[#8C6115] via-[#E9C789] to-[#996F25]'>At all restaurents within 7km</h1>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <img className='w-20' src={scooter} alt="" />
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-white font-bold text-xl'>Up to 30% extra off </h1>
                        <h1 className='bg-clip-text text-transparent font-bold text-xl text-center bg-linear-to-r from-[#8C6115] via-[#E9C789] to-[#996F25]'>At 20,000+ partner restaurents</h1>
                    </div>
                </div>
            </div>
            <div className='flex'>
                <div className=' bottom-0 left-0 w-2/3' >
                    <img src={leftoverlay} alt="" />
                </div>
                <div className=' bottom-0 right-0 w-2/3'>
                    <img src={rightoverlay} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Curve