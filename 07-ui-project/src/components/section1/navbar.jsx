import React from 'react'

const navbar = () => {
  return (
    <div className='flex items-center justify-between px-[40px] py-[20px] h-[10vh]'>
        <h4 className='bg-black text-white px-[20px] py-[8px] text-base rounded-full'>
            Target Audience
        </h4>
        <button className='bg-gray-200 tracking-widest text-black px-[20px] py-[8px] text-base rounded-full'>
            Digital Banking Platform
        </button>
    </div>
  )
}

export default navbar
