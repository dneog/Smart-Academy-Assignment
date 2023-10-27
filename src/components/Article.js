import React from 'react';
import './Article.css';
import a1 from '../assets/a1.png';
import a2 from '../assets/a2.png';
import a3 from '../assets/a3.png';
import Image from 'next/image';

const Article = () => {
  return (
    <div>
         <p className='t111'>Articles And Insight</p>
        
         <div className='art'>
            <div className='a1'>
            <Image className='im1' src={a1} alt='a1'/>
            <p className='a2'>The Benefits of Enrolling Kids in Online Courses</p>
            <p className='a3'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>

            <div className='butssss'>Read More</div>
            </div>

            <div className='a1'>
            <Image className='im1' src={a2} alt='a1'/>
            <p className='a2'>Unlock Your Child's Potential with Online Courses for Kids</p>

            <p className='a3'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>

            <div className='butssss'>Read More</div>
            </div>

            <div className='a1'>
            <Image className='im1' src={a3} alt='a1'/>
            <p className='a2'>Engage and Inspire The Power of Online Courses for Kids</p>
            
            <p className='a3'> Lorem ipsum dolor sit amet, consectetur adipiscing elit.  </p>

            <div className='butssss'>Read More</div>
            </div>
         </div>
    </div>
  )
}

export default Article