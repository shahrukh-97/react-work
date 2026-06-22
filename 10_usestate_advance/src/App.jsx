import React, { useState } from 'react'

const App = () => {


  const [num, setNum] = useState([10,20,30])
  const [num2, setNum2] = useState({user:'shahrukh',age:28})

  const changeNum = () => {
     setNum(prev=>[...prev,50])
    
    setNum2(prev => ({...prev, user:'Ali'}))
    
    setNum(prev =>
      prev.map((item, idx) => idx === 1 ? 60 : item
      )
    );

  }

  const changeNum2 = () =>{
    const newNum2 = {...num2};
    newNum2.user = 'Dawood';
    setNum2(newNum2);

    const newNum = [...num];
    newNum.pop();
    newNum[2] = '40';
    setNum(newNum)

  }


  
  const [num1, setNum1] = useState(0)
  const changeNum1 = () =>{
    setNum1(prev => (prev + 1))
    setNum1(prev => (prev + 1))
    setNum1(prev => (prev + 1))
    setNum1(prev => (prev + 1))
    setNum1(prev => (prev + 1))
  }


  return (
    <div>
        <h4>
          {num} , {num2.user} , {num2.age}
        </h4>
        <h2>{num1}</h2>
        <button onClick={changeNum1}>Click to change by </button>
        <button onClick={changeNum}>Click Me</button>
        <button onClick={changeNum2}>Click 2</button>
    </div>
  )
}

export default App
