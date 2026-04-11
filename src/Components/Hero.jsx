import bgVideo from '../assets/video/bgVideo.mp4'
import logo from '../assets/images/logo.avif'
import appstore from '../assets/images/app_store.avif'
import playstore from '../assets/images/gplay.avif'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";


const Hero = () => {
    return (
        <section className='w-full min-h-screen overflow-hidden relative'>
            {/* video layer */}
            <video className='absolute inset-0 w-full h-full object-cover' playsInline autoPlay muted loop src={bgVideo}></video>
            {/* graditent layer */}
            <div className='absolute inset-0 bg-linear-to-b from-black/10 via-black/40 to-black' />

            {/* content starts fom here */}
            <div className='z-10 relative flex flex-col items-center justify-end sm:justify-center w-full min-h-screen  '>
                <img className='w-25 sm:w-50 mb-5' src={logo} alt="logo" />
                <h1 className='text-white font-bold text-lg sm:text-3xl lg:text-5xl'>India’s #1</h1>
                <h1 className='text-white font-bold text-lg sm:text-3xl lg:text-5xl mb-14'>food delivery app</h1>
                <p className='text-white font-semibold text-lg sm:text-xl lg:text-2xl'>Experience fast & easy online ordering
                </p>
                <p className='text-white font-semibold text-lg sm:text-xl lg:text-2xl mb-10 '>on the Zomato app</p>

                <div className='hidden sm:flex space-x-6'>
                    <a target='_blank' href="https://play.google.com/store/apps/dev?id=7812834815367511165&hl=en_IN&pli=1&source_caller=ui&shortlink=iwz6g6kg&c=zomato_web_hp_android&pid=zomato_web_hp_android&deep_link_value=zomato%3A%2F%2Fhome&af_xp=social&af_force_deeplink=true"><img className='w-45  transition duration-300 hover:scale-110' src={playstore} alt="Download on Google Play" /></a>
                    <a target='_blank' href="https://apps.apple.com/in/app/zomato-food-delivery-dining/id434613896"><img className='w-41   transition duration-300 hover:scale-110' src={appstore} alt="Download on App Store" /></a>
                </div>
                <div className='w-full block sm:hidden p-4 '>
                    <a target='_blank' href="https://www.zomato.com/mobile">
                        <button className='w-full p-2 rounded-lg text-white bg-red-600'>Order on app</button>
                    </a>
                </div>
                <div className='hidden sm:flex animate-bounce space-x-2'>
                    <p className='text-white font-medium text-base mt-10' >Scroll down</p>
                    <MdKeyboardDoubleArrowDown className='text-white font-medium text-xl mt-10' />
                </div>
            </div>
        </section>
    )
}

export default Hero