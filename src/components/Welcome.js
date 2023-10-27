import React from 'react'
import boy from '../assets/boy.png';
import './Home.css';
import Image from 'next/image';

const Welcome = () => {
  return (
    <div className='boy'>

        <div className='ones'>
           
            <p className='sma'>Welcome to Smart Academy</p>
    <p className='sms'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis dolor</p>
    <button className='butss'>Read More</button>
           
            
       
        </div>

        <div className='twos'>
        <Image className='by' src={boy} alt='boy image'/>
        </div>

        <div className='threes'>
    <p className='miss'>Our Mission</p>
    <p  className='smss'>Lorem ipsum dolor sit amet, consectetur elit. Etiam condimentum leo sed nisi vehicula, fringilla ante tincidunt. Sed sit amet </p>

    <div className='exp'>

    <div>
    <p className='ten'>10+</p>
        <p>Years <br /> Experience</p>
    </div >
    <div>
    <p className='ten'>29+</p>
        <p>Total <br /> Course</p>
    </div >
    <div>
    <p className='ten'>50K+</p>
        <p>Student <br /> Active</p>
    </div >
    
       
    </div>
     
        </div>

    </div>
  )
}

export default Welcome