import React from 'react'
import {Bookmark} from 'lucide-react'

const card = (prop) => {
  return (
    <>
        <div className="card">
            <div className="top">
                <img src={prop.brnlogo} alt="" />
                <button>Save <Bookmark /> </button>
            </div>
            <div className="center">
                <h3>
                    {prop.cn} <span> {prop.datepost} </span>
                </h3>
                <h2>
                    {prop.post}
                </h2>
                <ul>
                    <li>
                        {prop.tag1}
                    </li>
                    <li>
                        {prop.tag2}
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <h5>
                    {prop.pay}
                    <span>{prop.loc}</span>
                </h5>
                <button>Apply Now</button>
            </div>
        </div>
    </>
  )
}

export default card
