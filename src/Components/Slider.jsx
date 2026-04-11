import React, { useState, useEffect } from 'react'
import zomato from '../assets/images/zomato.avif'
import blink from '../assets/images/blink.avif'
import district from '../assets/images/district.avif'
import hyperpure from '../assets/images/hyperpure.avif'
import { FaCaretRight } from "react-icons/fa";

const Slider = () => {

    const slide = [{
        img: zomato,
        title: "Zomato",
        p: "Get the app now to start ordering your favorite dishes!",
        des: "Order now"

    }, {
        img: blink,
        title: "Blinkit",
        p: "Choose from 30,000+ products & get them delivered at your doorstep",
        des: "Order now"

    }, {
        img: district,
        title: "district",
        p: "The best of events, movies, dining, and everything you love!",
        des: "Check it Out"

    }, {
        img: hyperpure,
        title: "hyperpure",
        p: "Offering complete supply chain solution for your restaurant",
        des: "Check it Out"

    }]
    const [count, setCount] = useState(0)

    useEffect(() => {
        const interval = setCount(() => {
            setCount((prev) => (prev + 1) % slide.length);
        }, 1000);

        return () => clearInterval(interval);
    }, []);



    return (
        <div className="relative mt-5 bg-red-300 overflow-hidden">

        </div>
    )
}

export default Slider