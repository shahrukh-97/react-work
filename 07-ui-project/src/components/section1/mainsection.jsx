import React from 'react'
import Leftcontent from './leftcontent'
import Rightcontent from './rightcontent'

const mainsection = (prop) => {
  console.log(prop.users);
  return (
    <div className='flex items-center gap-[30px] h-[90vh] py-[40px]'>
        <Leftcontent />
        <Rightcontent users={prop.users}/>
    </div>
  )
}

export default mainsection
