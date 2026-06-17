import React from 'react'
import 'remixicon/fonts/remixicon.css'

const cardcontent = (prop) => {
  return (
    <figcaption className='absolute flex flex-col justify-end items-start top-0 left-0 h-full w-full px-6 py-6'>
        <span style={{backgroundColor:prop.color}} className='text-white absolute top-[32px] rounded-full text-[16px] font-medium inline-flex items-center justify-center w-[32px] h-[32px]'>{prop.id+1}</span>
        <p className='text-white mb-[20px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit possimus qui placeat eveniet autem? 
        </p>
        <button style={{backgroundColor:prop.color}} className=' relative text-white h-[35px] px-[20px]   rounded-full cursor-pointer'>
            {prop.tag}
            <span className='h-[35px] w-[35px] bg-black flex items-center justify-center rounded-full absolute right-[-35px] top-0 '>
            <i className="ri-arrow-right-line"></i>
            </span>
        </button>
    </figcaption>
  )
}

export default cardcontent
