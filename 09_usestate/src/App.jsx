import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(20)
  const [name, setName] = useState("Shahrukh")

  const changeNum = () => {
    setNum(30)
    setName("Dawood")
  }

  const [num1, setNum1] = useState(0);
  const inc = () => {
    setNum1(num1+1);
  }
  const dec = () => {
    setNum1(num1-1);
  }
  const inc5 = () => {
    setNum1(num1+5);
  }


  return (
    <div>
        <h1> My Name is {name}, <br />  Value of Num is {num}   </h1>
        <button onClick={changeNum}>Click Me</button>
        <div className="incdec">
          <h3>
            {num1}
          </h3>
          <button onClick={inc}>Increase</button>
          <button onClick={dec}>Decrease</button>
          <button onClick={inc5}>Increase By 5</button>
        </div>
    </div>
  )
}

export default App
