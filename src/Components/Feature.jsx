
import healthy from '../assets/images/health.avif'
import veg from '../assets/images/veg_mod.avif'
import party from '../assets/images/party.avif'
import gift from '../assets/images/gift.avif'
import Gourmet from '../assets/images/gourmet.avif'
import offer from '../assets/images/offer.avif'
import train from '../assets/images/train.avif'
import collection from '../assets/images/collections.avif'
import phone from '../assets/images/phone.avif'
import calander from '../assets/images/calender.avif'
import FeaturedCard from './FeaturedCard'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Feature = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className='w-full py-15 flex flex-col justify-center items-center bg-linear-to-b from-[#ffedef] to-red-50'>
      <div>
        <h1 className='text-[#ef4f5f] font-bold text-2xl lg:text-5xl text-center'>What’s waiting for you<br />
          on the app?</h1>
        <p className='text-center text-sm lg:text-xl text-[#596378] font-medium mt-6'>
          Our app is packed with features that<br /> enable you to experience food <br />delivery like never before
        </p>
      </div>
      <div className='sm:flex justify-center px-5 w-full mt-5 hidden sm:gap-6 '>
        <div className='flex gap-10 mt-10'>
          <div className='flex flex-col gap-4'>
            <FeaturedCard img={healthy} text='Healthy' />
            <FeaturedCard img={veg} text='Ved Mode' />
          </div>
          <div className='flex -translate-3 -translate-y-4 flex-col gap-4'>
            <FeaturedCard img={party} text='Plan a Party' />
            <FeaturedCard img={gift} text='Gift Cards' />
          </div>
        </div>
        <div data-aos="fade-up" className='hidden mt-8 sm:block'>
          <img className='relative sm:w-60 lg:w-72' src={phone} alt="Phone" />
          <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-transparent via-transparent to-[#ffedef]" />
          <div className='absolute left-[26%] top-[10%] flex items-center justify-center'>
            <div className='bg-white p-4 shadow-xl rounded-2xl translate-y-10'>
              <img className='sm:w-15 lg:w-25 mx-auto' src={calander} alt='calander' />
              <p className='text-center  text-sm text-[#596378] font-medium mt-6'>
                Schedule <br />
                your order
              </p>
            </div>
          </div>
        </div>
        <div className='flex gap-5 mt-10'>
          <div className='flex flex-col gap-4'>
            <FeaturedCard img={Gourmet} text='Gourmet' />
            <FeaturedCard img={offer} text='Offers' />
          </div>
          <div className='flex -translate-y-6 -translate-x-2 flex-col gap-4'>
            <FeaturedCard img={train} text='Food on Train' />
            <FeaturedCard img={collection} text='Collections' />
          </div>
        </div>
      </div>
      <div className='sm:hidden px-5 mt-5 grid grid-cols-3 gap-5'>
        <div className='mt-10 flex flex-col gap-6'>
          <FeaturedCard img={veg} text='Ved Mode' />
          <FeaturedCard img={healthy} text='Healthy' />
          <FeaturedCard img={collection} text='Collections' />
        </div>
        <div className='flex flex-col gap-6'>
          <FeaturedCard img={calander} text='Schedule
                your order' />
          <FeaturedCard img={party} text='Plan a Party' />
          <FeaturedCard img={offer} text='Offers' />
        </div>
        <div className='mt-10 flex flex-col gap-6'>
          <FeaturedCard img={train} text='Food on Train' />
          <FeaturedCard img={Gourmet} text='Gourmet' />
          <FeaturedCard img={gift} text='Gift Cards' />
        </div>

      </div>
    </div>

  )
}

export default Feature