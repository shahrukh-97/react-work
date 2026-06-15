import React from 'react'

const card = (prop) => {
  return (
    <>
      <div className="card">
        <img src={prop.img} alt="" />
        <h4>
            {prop.user}, {prop.age}
        </h4>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aut facere ipsam!
        </p>
        <button>View Profile</button>
      </div>
    </>
  )
}

export default card
