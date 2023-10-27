import React from 'react';
import './Service.css';
import t1 from '../assets/t1.png';
import t2 from '../assets/t2.png';
import t3 from '../assets/t3.png';
import t4 from '../assets/t4.png';
import Image from 'next/image';

const Service = () => {
  return (
    <div>
        <p className='t11'>Smart Academy offers <br /> services like</p>

        <div className='card'>
        <div className='c1'>
        <Image src={t1}  alt='t1'/>
        <p className='tt1'>Teachers <br /> Prefesional</p>
        <p className='tt2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>

        <div className='c1'>
        <Image src={t2}  alt='t1'/>
        <p className='tt1'>Online <br /> Course</p>
        <p className='tt2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>

        <div className='c1'>
        <Image src={t3}  alt='t1'/>
        <p className='tt1'>Certificate <br /> Course</p>
        <p className='tt2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>

        <div className='c1'>
        <Image src={t4}  alt='t1'/>
        <p className='tt1'>Better <br /> Value</p>
        <p className='tt2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        </div>

        <button className='butsss'>Read More</button>
    </div>
  )
}

export default Service