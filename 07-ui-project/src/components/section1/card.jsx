import React from 'react'
import Cardcontent from './cardcontent'

const card = (prop) => {
  return (
    <div className='relative w-1/3 shrink-0 overflow-hidden rounded-4xl before:bg-black/30 before:w-full before:h-full before:absolute before:top-0 before:left-0'>
        <img className='w-full h-full object-cover' src={prop.img} alt="" />
        <Cardcontent id={prop.id} img={prop.img} color={prop.color} tag={prop.tag} />
    </div>
  )
}

export default card
    