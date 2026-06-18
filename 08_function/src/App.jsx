import React from 'react'

const App = () => {

  const onclick = () => {
    console.log("button is clicked")
  }
  const onchange = (val) => {
    console.log(val);
    
  }

  return (
    <div>
        <input onChange={(elem)=>{
          console.log(elem.target.value);
        }} type="text" name="" id="" placeholder='Enter Your Name' />
        <input onChange={(elem)=>{
          onchange(elem.target.value);
        }} type="text" name="" id="" placeholder='Enter Your last Name' />
        <button onClick={onclick}> Click me</button>
    </div>
  )
}

export default App
  