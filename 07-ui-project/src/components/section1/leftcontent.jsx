import React from 'react'
import Herotext from './herotext'
import Arrow from './arrow'
import 'remixicon/fonts/remixicon.css'

const leftcontent = () => {
  return (
    <div className='w-1/3 h-full flex flex-col justify-between items-start'>
        <Herotext />
        <Arrow />
    </div>
  )
}

export default leftcontent
