import React from 'react';
import './Features.css';
import Image from 'next/image';
import k1 from '../assets/k1.png';
import k2 from '../assets/k2.png';
import k3 from '../assets/k3.png';
import k4 from '../assets/k4.png';
import k5 from '../assets/k5.png';
import k6 from '../assets/k6.png';
import k7 from '../assets/k7.png';
import k8 from '../assets/k8.png';

const Features = () => {
  return (
    <div className='f1'>
        <p className='t111'>Our Featured Course <br /> 
at Smart Academy</p>

    <div className='features'>
        <div>
            <Image src={k1} alt='images' />
            <p className='k2'>Kids Science Course</p>

        </div>
        <div>
            <Image src={k2} alt='images' />
            <p className='k2'>Kids Chef Course</p>

        </div>
        <div>
            <Image src={k3} alt='images' />
            <p className='k2'>Kids Music Course</p>

        </div>
        <div>
            <Image src={k4} alt='images' />
            <p className='k2'>Kids Swimming Course</p>

        </div>


    </div>


    <div className='features'>
        <div>
            <Image src={k5} alt='images' />
            <p className='k2'>Kids Science Course</p>

        </div>
        <div>
            <Image src={k6} alt='images' />
            <p className='k2'>Kids Chef Course</p>

        </div>
        <div>
            <Image src={k7} alt='images' />
            <p className='k2'>Kids Music Course</p>

        </div>
        <div>
            <Image src={k8} alt='images' />
            <p className='k2'>Kids Swimming Course</p>

        </div>


    </div>


    </div>
  )
}

export default Features