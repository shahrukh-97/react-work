import React, { useState } from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form is Submitted");
    
  }
  

  return (
    <div className='parent'>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
        <input type="text" placeholder='Enter You Name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
