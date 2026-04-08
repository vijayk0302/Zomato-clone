import bgVideo from '../assets/video/bgVideo.mp4'
import logo from '../assets/images/logo.avif'
import appstore from '../assets/images/app_store.avif'
import playstore from '../assets/images/gplay.avif'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";


const Hero = () => {
    return (
        <div className='w-full h-screen overflow-hidden relative'>
            <video className='absolute top-0 left-0 w-full h-full object-cover z-0 ' playsInline autoPlay muted loop src={bgVideo}></video>
            <div className='absolute inset-0 bg-linear-to-b from-black/10 to-black/90 z-10' >
            </div>
            <div className='z-20 mt-35 absolute inset-0 flex flex-col justify-center h-full items-center'>
                <img className='w-50 mb-5' src={logo} alt="logo" />
                <h1 className='text-white font-bold text-5xl'>India’s #1</h1>
                <h1 className='text-white font-bold text-5xl mb-5'>food delivery app</h1>
                <p className='text-white font-semibold text-xl '>Experience fast & easy online ordering
                </p>
                <p className='text-white font-semibold text-xl mb-10 '>on the Zomato app</p>
                <div className='flex space-x-6'>
                    <a target='_blank' href="https://play.google.com/store/apps/dev?id=7812834815367511165&hl=en_IN&pli=1&source_caller=ui&shortlink=iwz6g6kg&c=zomato_web_hp_android&pid=zomato_web_hp_android&deep_link_value=zomato%3A%2F%2Fhome&af_xp=social&af_force_deeplink=true"><img className='w-45  transition duration-300 hover:scale-110' src={playstore} alt="Download on Google Play" /></a>
                    <a target='_blank' href="https://apps.apple.com/in/app/zomato-food-delivery-dining/id434613896"><img className='w-40  transition duration-300 hover:scale-110' src={appstore} alt="Download on App Store" /></a>
                </div>
                <div className='flex animate-bounce space-x-2'>
                    <p className='text-white font-medium text-base mt-10' >Scroll down</p>
                    <MdKeyboardDoubleArrowDown  className='text-white font-medium text-xl mt-10'/>
                </div>
            </div>
        </div>
    )
}

export default Hero