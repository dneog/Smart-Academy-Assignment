'use client'
import React, { useState } from 'react'
import './Heading.css';
import Link from 'next/link';

const Heading = () => {
  const [open, setOpen]= useState(false)

  return (
    <div className='heading'>
       <div className={`p1 ${open ? 'display' : 'close'}`}>
        <ul className='list'>
          <li><Link href={'#'}>Home</Link></li>
          <li><Link href={'#'}>About</Link></li>
          <li><Link href={'#'}>Course</Link></li>
        </ul>
      </div> 
      

      <div className='p2'>
      <li className='smart'><Link href={'#'}>Smart Academy</Link></li>
      </div>

      <div className='p3'>
        <button className='but'>Explore Couse</button>

        <svg className='icon' onClick={()=> setOpen(!open)} xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>
      </div>
    </div>
  )
}

export default Heading