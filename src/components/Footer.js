import React from 'react';
import './Footer.css';
import ft1 from '../assets/ft1.png';
import ft2 from '../assets/ft2.png';
import ft3 from '../assets/ft3.png';
import ft4 from '../assets/ft4.png';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='mfooter'>
        <div className='f11'>
            <p className='ft1'>Smart Academy</p>
            <p className='ft2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis dolor vel lacus laoreet tristique. Nunc bibendum justo</p>
            <div className='logos'>
            <Image src={ft1} alt='logo' />
            <Image src={ft2} alt='logo' />
            <Image src={ft3} alt='logo' />
            <Image src={ft4} alt='logo' />
            </div>
        </div>

        <div className='f22'>
            <p className='ft3'>Quick Links</p>
            <p className='ft4'>Course</p>
            <p className='ft5'>Our Service</p>
            <p className='ft5'>Contact us</p>
            <p className='ft5'>Blog</p>
        </div>

        <div className='f33'>
        <p className='ft3'>Course</p>
            <p className='ft4'>Music Course</p>
            <p className='ft5'>Art and Craft Course</p>
            <p className='ft5'>Aerobic Course</p>
            <p className='ft5'>Science Course</p>
        </div>
        </div>
       
    </div>
  )
}

export default Footer