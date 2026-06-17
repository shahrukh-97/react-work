import React from 'react'
import Navbar from './navbar'
import Mainsection from './mainsection'

const section1 = (prop) => {
  return (
    <div className='h-screen w-full'>
        <Navbar />
        <Mainsection  users={prop.users} />
    </div>
  )
}

export default section1
