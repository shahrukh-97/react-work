import React from 'react'
import Card from './card'

const rightcontent = (prop) => {
  return (
    <div className='w-2/3 h-full scrollbar-thin scrollbar-thumb-black flex flex-nowrap overflow-x-auto rounded-4xl gap-[20px] pb-[20px]'>
      {prop.users.map(function(elem,idx){
        return <Card key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag}/>;
      })}
        
    </div>
  )
}

export default rightcontent
