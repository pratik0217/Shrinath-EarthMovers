import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router';

export default function DropDownServices() {
    const [dropDown, setDropDown] = useState(false);

  const serviceDown = [
    {
      id: 1,
      tittle: "Earth Movers",
      path: '/our-company'
    },
    {
      id: 2,
      tittle: "Land Development",
      path: '/our-leadership'
    }
  ]
  return (
    <div className='container absolute top-16'>
        <ul onClick={()=> setDropDown(!dropDown)} className={dropDown ? 'bg-blue-300 w-40 rounded-md flex-col justify-center items-center clicked' : 'bg-blue-300 w-40 rounded-md flex-col justify-center items-center'}>
            {
              serviceDown.map((item) => {
                return (
                  <li key={item.id} className='p-2 rounded-md hover:bg-blue-500'><Link to={item.path}>{item.tittle}</Link></li>
                )   
              })
            }
        </ul>
    </div>
  )
}
