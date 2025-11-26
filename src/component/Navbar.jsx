import React from 'react'
import { Link } from 'react-router'
import { useState } from 'react';
import DropDownAbout from './DropDownAbout'
import DropDownServices from './DropDownServices'

export default function Navbar(props) {
  const [dropdown, setDropdown] = useState(false);

  const navItems = [
    {
      id: 1,
      tittle: "Home",
      path: "/"
    },
    {
      id: 2,
      tittle: "About",
      path: "/about"
    },
    {
      id: 3,
      tittle: "Services",
      path: "/services"
    },
    {
      id: 4,
      tittle: "Contact",
      path: "/contact",
    }
  ]
  return (
    <div className='container'>
      <nav id='navbar' className='h-[10vh] flex justify-between items-center text-[1.1rem]'>
          <Link to='/' className='text-white font-bold text-3xl'>Shrinath EarthMovers</Link>

          <ul className='flex justify-between items-center text-white font-medium w-[400px] text-[1.1rem]'>
            {
              navItems.map((item) => {
                // if (item.tittle === "About") {
                //   return (
                //     <li key={item.id} className='p-2 border-blue-300 rounded-md hover:bg-blue-300' onMouseEnter={() => setDropdown(true)}
                //       onMouseLeave={() => setDropdown(false)}>
                //       <Link to={item.path}>{item.tittle} <i className="fa-solid fa-caret-down"></i></Link>
                //       {
                //         dropdown && <DropDownAbout />
                //       }
                //     </li>
                //   )
                // } 
                // else if (item.tittle === "Services") {
                //   return (
                //     <li key={item.id} className='p-2 border-blue-300 rounded-md hover:bg-blue-300' onMouseEnter={() => setDropdown(true)}
                //       onMouseLeave={() => setDropdown(false)}>
                //       <Link to={item.path}>{item.tittle} <i className="fa-solid fa-caret-down"></i></Link>
                //       {
                //         dropdown && <DropDownServices />
                //       }
                //     </li>
                //   )
                // }
                return (
                  <li key={item.id} className='p-2 h-[2vh] border-blue-300 rounded-md'>
                    <Link to={item.path}>{item.tittle}</Link>
                  </li>
                )
              })
            }
          </ul>
      </nav>
    </div>
  )
}
