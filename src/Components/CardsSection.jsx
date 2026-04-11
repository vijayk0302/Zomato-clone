import eternal from '../assets/images/eternal.avif'
import zomato from '../assets/images/zomato.avif'
import blink from '../assets/images/blink.avif'
import district from '../assets/images/district.avif'
import hyperpure from '../assets/images/hyperpure.avif'
import { FaCaretRight } from "react-icons/fa";
import Slider from './Slider'

const CardsSection = () => {

    const card = [{
        img: zomato,
        title: "Zomato",
        p: "Get the app now to start ordering your favorite dishes!",
        border: "border-[#f9abb3]",
        backgorund: "bg-linear-to-b from-[#fb9fa8] to-red-50"
    }, {
        img: blink,
        title: "Blinkit",
        p: "Choose from 30,000+ products & get them delivered at your doorstep",
        border: "border-[#e7d42d]",
        backgorund: "bg-linear-to-b from-[#f1df6d] to-red-50"
    }, {
        img: district,
        title: "district",
        p: "The best of events, movies, dining, and everything you love!",
        border: "border-[#7d81f9]",
        backgorund: "bg-linear-to-b from-[#b1a9ee] to-red-50"
    }, {
        img: hyperpure,
        title: "hyperpure",
        p: "Offering complete supply chain solution for your restaurant",
        border: "border-[#f9abb3]",
        backgorund: "bg-linear-to-b from-[#fb9fa8] to-red-50"
    }]

    return (
        <div className='w-full py-15 '>
            <div className='w-full flex flex-col  items-center justify-center '>
                <img className='lg:w-60 md:w-45 sm:w-35 w-25' src={eternal} alt="" />
                <div className='flex mt-5'>
                    <div className='h-0.5 w-28 mt-10 bg-linear-to-r from-transparent to-[#d2d2d2]'></div>
                    <p className='text-center mt-4 text-sm sm:text-xl lg:text-2xl font-semibold text-[#596378]'>POWERING INDIA’S <br />
                        CHANGING LIFESTYLES</p>
                    <div className='h-0.5 w-28 mt-10 bg-linear-to-l from-transparent to-[#d2d2d2]'></div>
                </div>
            </div>
            <div className='sm:flex w-full px-10 flex-wrap hidden gap-10 justify-around mt-10'>
                {
                    card.map((item, i) => (
                        <div key={i} className={`${item.backgorund} rounded-4xl transition duration-300 hover:scale-110 p-10 w-65 border-3 ${item.border}`}>
                            <div className='w-full flex justify-center'>
                                <img className={`rounded-4xl  w-30`} src={item.img} alt="" />
                            </div>
                            <p className='text-center text-gray-900 mt-4 font-bold text-lg'>{item.title}</p>
                            <p className='text-center text-gray-500 font-semibold'>{item.p}</p>
                            <div className='flex justify-center space-x-4 items-center' >
                                <p className='text-center mt-5 text-gray-500 font-medium'>Check it Out </p>
                                <FaCaretRight className='text-red-700 mt-5' />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='sm:hidden flex w-full justify-center  '>
                <Slider/>
            </div>
        </div>
    )
}

export default CardsSection