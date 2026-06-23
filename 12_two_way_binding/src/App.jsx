import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState('')

  const changeHandler = (e) => {
    setName(e.target.value) ;
    
  } 

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form is Submitted by" , name);
    setName('');

    
  }

  
  return (
    <div className='parent'>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }}>
        <input type="text" 
        placeholder='Enter You Name'
        value={name} 
        onChange={(e)=>{  
          changeHandler(e);
        }} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
