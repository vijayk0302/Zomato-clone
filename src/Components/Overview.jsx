import React from 'react'
import left from '../assets/images/left.avif'
import right from '../assets/images/right.avif'
import burger from '../assets/images/burgur.avif'
import momo from '../assets/images/momo.avif'
import leaf from '../assets/images/leaf.avif'
import pizza from '../assets/images/pizza.avif'
import tomato from '../assets/images/tomato.avif'
import OverviewCard from './OverviewCard'


const Overview = () => {
    return (
        <div className='w-full relative py-15'>
            <div className='absolute z-0 inset-0 flex justify-between'>
                <img className="object-contain hidden lg:block  lg:h-200" src={left} />
                <img className="object-contain hidden lg:block lg:h-200" src={right} />
                
            </div>
            <div className='z-40 inset-0 h-screen w-full justify-center items-center flex flex-col'>
                <h1 className='text-[#ef4f5f] font-bold text-2xl lg:text-5xl text-center'>Better food for <br />
                    more people</h1>
                <p className='text-center text-sm lg:text-xl text-[#596378] font-medium mt-6'>
                    For over a decade, we’ve enabled our <br /> customers to discover new tastes, <br />delivered right to their doorstep
                </p>
            </div>
            <img src={leaf} className='absolute z-10 w-5 lg:w-12 top-[4%] left-[14%] lg:top-[10%] lg:left-[30%]' alt="leaf image" />
            <img src={burger} className='absolute z-10 w-20 lg:w-70 top-[30%] left-[17%]' alt="leaf image" />
            <img src={tomato} className='absolute z-10 w-5 lg:w-12 left-[10%] top-[70%]' alt="leaf image" />
            <img src={momo} className='absolute z-10 w-30 lg:w-50 left-[60%] top-[5%]' alt="leaf image" />
            <img src={tomato} className='absolute z-10 rotate-45 w-5 lg:w-12 left-[90%] top-[35%]' alt="leaf image" />
            <img src={pizza} className='absolute z-10 w-30 lg:w-70 left-[70%] top-[50%] ' alt="leaf image" />

            <OverviewCard   />

        </div>
    )
}
export default Overview