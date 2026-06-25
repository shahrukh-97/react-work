import React, { useState } from 'react';
import { X } from 'lucide-react';

const App = () => {
  
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const [task, setTask] = useState([]);


  const submitHandler = (e) => {
    e.preventDefault();

    const copytask = [...task]
    copytask.push({title,details});
    setTask(copytask)
    
    setTitle('');
    setDetails('');
  } 

const deleteNote = (idx) => {

  const delCopyNote = [...task];
  delCopyNote.splice(idx,1);
  setTask(delCopyNote);
  
  
}
 
  return (
    <div className='w-full h-screen'>
      <div className='flex flex-col gap-[100px] justify-center overflow-hidden my-10 mx-30'>
          <h1 className='text-5xl block text-center font-bold uppercase underline'> Keep Your Notes </h1>
          <div className='flex gap-[30px] w-full'>
              <div className="w-1/2">
                <form onSubmit={(e)=>{submitHandler(e)}} className='flex gap-4 flex-col'>
                  <h2 className='text-3xl font-bold uppercase'>
                    Write a Note
                  </h2>
                  <input 
                    className='h-13 rounded font-medium py-2 px-5 border-2 border-gray-300 bg-gray-200 outline-none text-[18px]' 
                    type="text" 
                    placeholder='Enter Notes Heading...' 
                    value={title} 
                    onChange={(e)=>{
                      setTitle(e.target.value);
                    }}
                  />
                  <textarea 
                    className='h-30 rounded resize-none font-medium py-2 px-5 border-2 border-gray-300 bg-gray-200 outline-none text-[18px]' 
                    placeholder='Enter Details...' 
                    value={details}
                    onChange={(e)=>{
                      setDetails(e.target.value);
                    }}
                  >
                  </textarea>
                  <button 
                  className='h-13 rounded active:scale-95 font-medium cursor-pointer uppercase py-2 px-5 border-2 border-gray-300 text-white bg-gray-700 outline-none text-[18px]'
                  >
                    submit
                  </button>
                </form>
              </div>
              <div className="w-1/2 flex flex-wrap gap-3 overflow-y-auto py-5 px-5">
                {task.map((elem,idx)=>{
                  return (
                    <div key={idx} className="flex flex-wrap w-[calc(33.333%-8px)] min-h-70 relative py-5 px-6 flex-col items-start bg-black text-white rounded-2xl">
                      <h4 className='text-3xl break-all leading-tight mb-3 capitalize font-bold'> 
                        {elem.title}
                      </h4>
                      <p className='text-base leading-tight break-all font-medium mb-5 first-letter:capitalize '> 
                        {elem.details}
                      </p>
                      <button className='bg-red-500 px-1 py-1 absolute top-[-10px] left-[-10px] text-white uppercase text-base font-semibold rounded-full cursor-pointer'
                        onClick={()=>{
                          deleteNote(idx);
                        }}
                      >
                        <X color="#ffffff" strokeWidth={3} />
                      </button>
                  </div>
                  );
                })}
              </div>
          </div>
      </div>
    </div>
  )
}

export default App
