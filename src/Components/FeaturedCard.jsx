import React from 'react'

const FeaturedCard = ({img,text}) => {
    return (
        <div className={`bg-white p-2 rounded-2xl shadow-lg text-center`}>
            <img className='w-25' src={img} alt="healty" />
            <p className='text-center text-sm text-[#596378] font-medium mt-5'>
                {text}
            </p>
        </div>
    )
}

export default FeaturedCard