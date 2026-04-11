import React from 'react'

const FeaturedCard = ({ img, text }) => {
    return (
        <div className={`px-2 py-4 rounded-2xl bg-white flex flex-col shadow-lg text-center`}>
            <div className='flex justify-center'>
                <img className='w-12 sm:w-25' src={img} alt="healty" />
            </div>
            <p className='text-center text-sm text-[#596378] font-medium my-3'>
                {text}
            </p>
        </div>
    )
}

export default FeaturedCard