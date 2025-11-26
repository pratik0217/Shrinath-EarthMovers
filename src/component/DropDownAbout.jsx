import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router';

export default function DropDownAbout() {
    const [DropDown, setDropDown] = useState(false);

  const serviceDown = [
    {
      id: 1,
      tittle: "Our Company",
      path: '/our-company'
    },
    {
      id: 2,
      tittle: "Our Leadership",
      path: '/our-leadership'
    },
    {
      id: 3,
      tittle: "Our Location",
      path: '/our-location'
    }
  ]
  return (
    <div className='container absolute top-16'>
        <ul onClick={()=> setDropDown(!DropDown)} className={DropDown ? 'bg-blue-300 w-40 rounded-md flex-col justify-center items-center clicked' : 'bg-blue-300 w-40 rounded-md flex-col justify-center items-center'}>
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
