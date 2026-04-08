import React from 'react'
import appstore from '../assets/images/app_store.avif'
import playstore from '../assets/images/gplay.avif'
import phone from '../assets/images/phone.avif'
import qr from '../assets/images/qr.avif'
const QrcodeSection = () => {
  return (
    <div className='w-full p-10  h-fit overflow-hidden'>
      <div className='flex gap-10 rounded-4xl bg-linear-to-t from-[#fb9fa887] to-red-50 border-4 border-[#f1c8cb]'>
        <div className='p-20 mt-10'>
          <h1 className='text-4xl font-bold'>
            Download the app now!
          </h1>
          <p className='mt-7 text-3xl text-gray-600 font-medium'>
            Experience seamless online ordering <br />
            only on the Zomato app
          </p>
          <div className='flex mt-8 space-x-6'>
            <a target='_blank' href="https://play.google.com/store/apps/dev?id=7812834815367511165&hl=en_IN&pli=1&source_caller=ui&shortlink=iwz6g6kg&c=zomato_web_hp_android&pid=zomato_web_hp_android&deep_link_value=zomato%3A%2F%2Fhome&af_xp=social&af_force_deeplink=true"><img className='w-45  transition duration-300 hover:scale-110' src={playstore} alt="Download on Google Play" /></a>
            <a target='_blank' href="https://apps.apple.com/in/app/zomato-food-delivery-dining/id434613896"><img className='w-40  transition duration-300 hover:scale-110' src={appstore} alt="Download on App Store" /></a>
          </div>
        </div>
        <div className='relative'>
          <img className='w-105 mt-4' src={phone} alt="" />
          <p className='absolute top-[30%] left-[25%] text-xl text-gray-600 font-bold'>Scan the QR code to <br /> download the app</p>
          <img className='absolute top-[50%] left-[30%] w-40' src={qr} alt="" />
        </div>
      </div>
    </div>
  )
}

export default QrcodeSection