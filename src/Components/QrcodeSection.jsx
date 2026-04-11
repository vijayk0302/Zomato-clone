import React from 'react'
import appstore from '../assets/images/app_store.avif'
import playstore from '../assets/images/gplay.avif'
import phone from '../assets/images/phone.avif'
import qr from '../assets/images/qr.avif'
import moblie from '../assets/images/mobliezomato.avif'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const QrcodeSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className='w-full p-0 sm:p-10  h-fit'>
      <div className='flex justify-center gap-10 rounded-4xl bg-linear-to-b sm:bg-linear-to-t from-[#fb9fa887] to-red-50 border-none sm:border-4 border-[#f1c8cb]'>
        <div className='flex flex-col sm:px-5 overflow-hidden justify-center' >
          <img className='h-50 sm:hidden' src={moblie} alt="Mobile" />
          <h1 className='text-xl text-center sm:text-left md:text-2xl lg:text-4xl mt-5 font-bold'>
            Download the app now!
          </h1>
          <p className='mt-3 text-center sm:text-left text-sm md:text-lg lg:text-3xl text-gray-600 sm:font-medium font-normal'>
            Experience seamless online ordering <br />
            only on the Zomato app
          </p>
          <div className='flex justify-center md:justify-start w-full my-8 space-x-6'>
            <a target='_blank' href="https://play.google.com/store/apps/dev?id=7812834815367511165&hl=en_IN&pli=1&source_caller=ui&shortlink=iwz6g6kg&c=zomato_web_hp_android&pid=zomato_web_hp_android&deep_link_value=zomato%3A%2F%2Fhome&af_xp=social&af_force_deeplink=true"><img className='w-33 sm:w-33 lg:w-45  transition duration-300 hover:scale-110' src={playstore} alt="Download on Google Play" /></a>
            <a target='_blank' href="https://apps.apple.com/in/app/zomato-food-delivery-dining/id434613896"><img className='w-30 sm:w-33 lg:w-45  transition duration-300 hover:scale-110' src={appstore} alt="Download on App Store" /></a>
          </div>
        </div>
        <div data-aos="fade-up" className='relative hidden sm:block'>
          <img className='sm:w-70 lg:w-105 mt-4' src={phone} alt="" />
          <p className='absolute sm:top-[30%] sm:left-[20%] lg:top-[30%] lg:left-[25%] sm:text-sm lg:text-xl text-gray-600 font-bold'>Scan the QR code to <br /> download the app</p>
          <img className='absolute sm:top-[50%] sm:left-[27%] lg:top-[50%] lg:left-[30%] sm:w-30 lg:w-40' src={qr} alt="Qr code" />
        </div>
      </div>
    </div>
  )
}

export default QrcodeSection