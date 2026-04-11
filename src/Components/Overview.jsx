import React from 'react'
import left from '../assets/images/left.avif'
import right from '../assets/images/right.avif'
import burger from '../assets/images/burgur.avif'
import momo from '../assets/images/momo.avif'
import leaf from '../assets/images/leaf.avif'
import pizza from '../assets/images/pizza.avif'
import tomato from '../assets/images/tomato.avif'
import OverviewCard from './OverviewCard'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import OverviewCardMoblie from './OverviewCardMoblie'


const Overview = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
        AOS.refresh();
    }, []);
    return (
        <div className='w-full min-h-150 sm:h-170 md:h-200 lg:h-250 py-10 flex-col justify-center items-center flex relative'>
            <div className='absolute inset-0'>
                <div className='w-full flex justify-between'>
                    <img className="object-contain hidden sm:block sm:h-80 md:h-150 lg:h-200" src={left} />
                    <img className="object-contain hidden sm:block sm:h-80 md:h-150 lg:h-200" src={right} />
                </div>
            </div>
            <div data-aos="fade-up" className='w-full justify-center items-center flex flex-col'>
                <h1 className='text-[#ef4f5f] font-bold text-2xl sm:text-3xl md:text-4xl text-center'>Better food for <br />
                    more people</h1>
                <p className='text-center text-sm md:text-xl text-[#596378] sm:font-normal md:font-normal font-medium mt-4'>
                    For over a decade, we’ve enabled our <br /> customers to discover new tastes, <br />delivered right to their doorstep
                </p>
            </div>
            <img className='absolute pointer-events-none top-1/10 left-2/10 lg:top-1/10 lg:left-3/10 md:top-2/10  w-5 sm:w-9 md:w-13 lg:w-15 z-10 ' src={leaf} alt="leaf" />
            <img className='absolute pointer-events-none top-3/10 left-1/10 -translate-x-8 lg:top-4/10 lg:left-2/10 md:left-2/10 md:-translate-x-28 w-20 sm:w-35 md:w-45 lg:w-60 z-10' data-aos="fade-down-right" src={burger} alt="burger" />
            <img className='absolute pointer-events-none top-8/10 left-1/10 sm:top-7/10 md:top-8/10  w-5 sm:w-9  md:w-10 lg:w-12 ' src={tomato} alt="tomato" />
            <img className='absolute pointer-events-none top-1/10 left-6/10 sm:left-7/10 w-25 md:w-40 lg:w-50 ' data-aos="fade-down-left" src={momo} alt="momo" />
            <img className='absolute pointer-events-none top-5/10 left-9/10 lg:top-5/10 lg:left-8/10 md:top-4/10 w-5 sm:w-9  md:w-10 lg:w-12 rotate-45' src={tomato} alt="tomato" />
            <img className='absolute pointer-events-none top-5/10 left-7/10 w-30 sm:w-35 md:w-40 lg:w-60 -translate-x-10 translate-y-12' src={pizza} data-aos="fade-down-left" alt="pizza" />

            <div className='absolute  bottom-10'>
                <OverviewCard />
                
            </div>
            <div className='absolute  bottom-0'>
                <OverviewCardMoblie/>
            </div>

        </div>
    )
}
export default Overview