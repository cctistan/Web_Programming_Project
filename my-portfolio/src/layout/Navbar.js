import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import navLinkData from '../data';
import resume from '../Resume.pdf';

const Navbar = () => {

  let [open, setOpen] = useState(false)
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <nav className='nav'>
        <Link to='/' className='nav-title'>
          Cole Tistan
        </Link>
        <div onClick={() => setOpen(!open)} className='nav-menu'>
          {open ? <HiX />: <HiMenu />}
        </div>
        <ul className={`nav-list ${open ? 'top-16 opacity-100': 'top-[-490px] md:opacity-100 opacity-0'}`}>
          {
            navLinkData.navLinks.map((data) => { 
              return (
              <li className='nav-item' key={data.id}>
                <Link to={`/${data.link}`} className='hover:text-gray-500 font-medium duration-300 p-2'>
                  {data.title}
                </Link>
              </li>
              )
            })
          }  
          <li className='nav-item'>
            <a href={resume} target='_blank' className='button rounded-md border-sky-600 hover:bg-sky-600 hover:text-gray-200'>
              My Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar