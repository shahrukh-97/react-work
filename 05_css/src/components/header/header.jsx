import React from 'react'
import headstyle from './header.module.css'

const header = () => {
  return (
    <>
        <div className={headstyle.header}>
            <h2 className={headstyle.logoname}>
                shahrukh
            </h2>
            <button className={headstyle.btn}>
                Get Started
            </button>
        </div>
    </>
  )
}

export default header
