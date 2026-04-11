import React from 'react'
import gold from '../assets/images/zomatoGlod.avif'
import discount from '../assets/images/discountcard.avif'
import scooter from '../assets/images/scooter.avif'
import leftoverlay from '../assets/images/leftOverlay.avif'
import rightoverlay from '../assets/images/rightOverley.avif'
import { FaStar } from "react-icons/fa";

const Curve = () => {
    return (
        <div className='bg-black relative flex flex-col items-center justify-center w-full pt-30'>
            <div>
                <div className='w-full flex justify-center '>
                    <img className='w-40 md:w-60 lg:w-80 my-auto' src={gold} alt="Zomato gold" />
                </div>
                <h1 className='bg-clip-text text-transparent mt-8 font-bold text-sm md:textlg lg:text-xl text-center bg-linear-to-r from-[#8C6115] via-[#E9C789] to-[#996F25]'>India’s Top Savings </h1>
                <h1 className='bg-clip-text text-transparent font-bold text-sm md:textlg lg:text-xl text-center bg-linear-to-r from-[#8C6115] via-[#E9C789] to-[#996F25]'>Program for Food Lovers </h1>
            </div>
            <div className='flex gap-3 mt-5'>
                <span >
                    <FaStar className='bg-linear-to-br leading-5 text-sm md:text:lg lg:text-xl mt-3 md:mt-2 lg:mt-1 from-[#8C6115] via-[#E9C789] to-[#996F25]' />
                </span>
                <div>
                    <span className='text-white tracking-widest font-bold text-xl md:text-lg lg:text-2xl'>GOLD BENIFITS</span>
                </div>
                <span >
                    <FaStar className='bg-linear-to-br leading-5 text-sm md:text:lg lg:text-xl mt-3 md:mt-1.5 lg:mt-1 from-[#8C6115] via-[#E9C789] to-[#996F25]' />
                </span>
            </div>
            <div className='flex mt-4 px-8 lg:w-[80%] gap-6 justify-center items-center'>
                <div className='flex flex-col p-4 md:border-none rounded-2xl border border-amber-200 :justify-center lg:w-full  md:flex-row gap-3'>
                    <img className='lg:size-19 size-15' src={discount} alt="discount card" />
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-white font-bold text-sm md:text-lg lg:text-xl'>Free Delivery</h1>
                        <h1 className='bg-clip-text text-transparent font-bold text-sm md:text-lg lg:text-2xl  bg-linear-to-r from-[#8C6115] via-[#E9C789] to-[#996F25]'>At all restaurents within 7km</h1>
                    </div>
                </div>
                <div className='flex flex-col p-4 md:border-none rounded-2xl border border-amber-200 md:justify-center lg:w-full  md:flex-row gap-3'>
                    <img className='lg:size-19 size-15' src={scooter} alt="vhicle" />
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-white font-bold text-sm md:text-lg lg:text-xl'>Up to 30% extra off </h1>
                        <h1 className='bg-clip-text text-transparent font-bold text-sm md:text-lg lg:text-2xl  bg-linear-to-r from-[#8C6115] via-[#E9C789] to-[#996F25]'>At 20,000+ partner restaurents</h1>
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
            <div className="absolute hidden md:block top-0 left-0 w-full ">
                <svg viewBox="0 0 1440 150" className="w-full h-full">
                    <path fill="#fff" d="M0,0 C480,150 960,150 1440,0 L1440,0 L0,0 Z" />
                </svg>
            </div>
            <div className="absolute hidden md:block bottom-0 left-0 w-full rotate-180">
                <svg viewBox="0 0 1440 150" className="w-full h-full">
                    <path fill="#fff" d="M0,0 C480,150 960,150 1440,0 L1440,0 L0,0 Z" />
                </svg>
            </div>
        </div>
    )
}

export default Curve