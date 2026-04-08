import React from 'react'
import logo from '../assets/images/logo.avif'
import linkdin from '../assets/images/linkedin.png'
import insta from '../assets/images/instagram.png'
import yotube from '../assets/images/youtube.png'
import facebook from '../assets/images/facebook.png'
import appstore from '../assets/images/app_store.avif'
import playstore from '../assets/images/gplay.avif'
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center bg-black'>
            <div className='border-2 w-[80%]  '>
                <img className='w-50' src={logo} alt="" />
                <div className='grid mt-12 grid-cols-5'>
                    <div className='flex flex-col'>
                        <h1 className='text-white  text-xl font-medium mb-4'>Eternal</h1>
                        <a className='text-gray-500 font-medium hover:text-white' target='_blank' href="https://www.zomato.com/">Zomato</a>
                        <a className='text-gray-500 font-medium hover:text-white' target='_blank' href="https://blinkit.com/">Blinkit</a>
                        <a className='text-gray-500 font-medium hover:text-white' target='_blank' href="https://blinkit.com/">District</a>
                        <a className='text-gray-500 font-medium hover:text-white' target='_blank' href="https://www.hyperpure.com/">Hyperpure</a>
                        <a className='text-gray-500 font-medium hover:text-white' target='_blank' href="https://www.feedingindia.org/">Feeding India</a>
                        <a className='text-gray-500 font-medium hover:text-white' target='_blank' href="https://www.eternal.com/investor-relations/">Investor Relations</a>
                    </div>
                    <div className=' flex flex-col'>
                        <h1 className='text-white  text-xl font-medium mb-4'>For Restaurants</h1>
                        <a className='text-gray-500 font-medium hover:text-white' target='_blank' href="https://www.zomato.com/partner-with-us/new/">Partner With Us</a>
                        <a className='text-gray-500 font-medium hover:text-white' target='_blank' href="https://play.google.com/store/apps/details?id=com.application.services.partner&amp;hl=en_IN&amp;gl=US">Apps For You</a>
                        <a className='text-gray-500 font-medium hover:text-white' target='_blank' href="https://www.zomato.com/restaurant-expansion-consulting-services/">Restaurant Consulting</a>
                      
                    </div>

                    <div className=' flex flex-col'>
                        <h1 className='text-white  text-xl font-medium mb-4'>For Delivery Partners</h1>
                        <a className='text-gray-500 font-medium hover:text-white' target='_blank' href="https://www.zomato.com/deliver-food/">Partner With Us</a>
                        <a className='text-gray-500 font-medium hover:text-white' target='_blank' href="https://play.google.com/store/apps/details?id=com.zomato.delivery&hl=en_IN&gl=US">Apps For You</a>
                    </div>
                    <div className=' flex flex-col'>
                        <h1 className='text-white  text-xl font-medium mb-4'>Learn More</h1>
                        <a className='text-gray-500 font-medium hover:text-white' target='_blank' href="https://www.zomato.com/policies/privacy/">Privacy</a>
                        <a className='text-gray-500 font-medium hover:text-white' target='_blank' href="https://www.zomato.com/policies/security/">Security</a>
                        <a className='text-gray-500 font-medium hover:text-white' target='_blank' href="https://www.zomato.com/policies/terms-of-service/">Terms of Service</a>
                        <a className='text-gray-500 font-medium hover:text-white' target='_blank' href="https://www.zomato.com/contact">Help & Support</a>
                        <a className='text-gray-500 font-medium hover:text-white' target='_blank' href="https://www.zomato.com/report-fraud">Report a Fraud</a>
                        <a className='text-gray-500 font-medium hover:text-white' target='_blank' href="https://www.zomato.com/blog/">Blog </a>
                    </div>
                    <div className=' flex flex-col'>
                        <h1 className='text-white text-xl font-medium mb-4'>Social Links</h1>
                        <div className='flex gap-2'>
                            <a target='_blank' href="https://in.linkedin.com/company/zomato"><img className='w-5' src={linkdin} alt="" /></a>
                            <a target='_blank' href="https://www.instagram.com/zomato/"><img className='w-5' src={insta} alt="" /></a>
                            <a target='_blank' href="https://www.youtube.com/zomato"><img className='w-5' src={yotube} alt="" /></a>
                            <a target='_blank' href="https://www.facebook.com/zomato"><img className='w-5' src={facebook} alt="" /></a>
                            <a target='_blank' href="https://x.com/zomato"><FaSquareXTwitter className='bg-white text-xl' /></a>
                        </div>
                        <div className='mt-5 space-x-6'>
                            <a target='_blank' href="https://play.google.com/store/apps/dev?id=7812834815367511165&hl=en_IN&pli=1&source_caller=ui&shortlink=iwz6g6kg&c=zomato_web_hp_android&pid=zomato_web_hp_android&deep_link_value=zomato%3A%2F%2Fhome&af_xp=social&af_force_deeplink=true"><img className='w-45  transition duration-300 hover:scale-110' src={playstore} alt="Download on Google Play" /></a>
                            <a target='_blank' href="https://apps.apple.com/in/app/zomato-food-delivery-dining/id434613896"><img className='w-45  transition duration-300 hover:scale-110' src={appstore} alt="Download on App Store" /></a>
                        </div>
                    </div>
                </div>
                <div className='border mt-7  w-full h-0.5 border-b-gray-400'></div>
                <h6 className='text-gray-500 mt-2 text-[10px] font-semibold'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners
                    2008-2026 © Zomato™ Ltd. All rights reserved.</h6>
            </div>
        </div>
    )
}

export default Footer