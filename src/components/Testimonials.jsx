import React from 'react';
import './Testimonials.css';

import pic1 from '../assets/pic1.png';
import pic2 from '../assets/pic2.png';
import pic3 from '../assets/pic3.png';
import pic4 from '../assets/pic4.png';
import pic5 from '../assets/pic5.png';
import pic6 from '../assets/pic6.png';
import Image from 'next/image';


const Testimonials = () => {

    const data1 = [
        {
            id: 1,
            pic: pic1,
            name: 'Park Jee',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  lacus laoreet tristique.'
        },
        {
            id: 2,
            pic: pic2,
            name: 'Jasmine Vandervort',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  lacus laoreet tristique.'
        },
        {
            id: 3,
            pic: pic3,
            name: 'Jasmine Vandervort',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  lacus laoreet tristique.'
        },
    ]

    const data2 = [
        {
            id: 4,
            pic: pic4,
            name: 'Jon Lakin',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  lacus laoreet tristique.'
        },
        {
            id: 5,
            pic: pic5,
            name: 'Husna mawadus',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  lacus laoreet tristique.'
        },
        {
            id: 6,
            pic: pic6,
            name: 'Jacob Kozey',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.  lacus laoreet tristique.'
        },
    ]


  return (
    <>
    <p className='t11'>Our Testimonial at <br /> Smart Academy</p>
   
    <div className='t1'>
        
        <div className='outer'>
            
                {data1.map((data)=> (
                   <div className='inner'>
                    <Image className='imgs' src={data.pic}/>
                    <div className='text'>
                    <p className='t2'>{data.name}</p>
                    <p className='t22'>{data.desc}</p>
                    </div>
                   </div>
                ))}
           
        </div>
        <div className='outer'>
            
                {data1.map((data)=> (
                   <div className='inner'>
                    <Image className='imgs' src={data.pic}/>
                    <div className='text'>
                    <p className='t2'>{data.name}</p>
                    <p className='t22'>{data.desc}</p>
                    </div>
                   </div>
                ))}
           
        </div>
      
    </div>

    <div className='t1'>
        
        <div className='outer2'>
            
                {data2.map((data)=> (
                   <div className='inner'>
                    <Image className='imgs' src={data.pic}/>
                    <div className='text'>
                    <p className='t2'>{data.name}</p>
                    <p className='t22'>{data.desc}</p>
                    </div>
                   </div>
                ))}
           
        </div>
        <div className='outer2'>
            
                {data2.map((data)=> (
                   <div className='inner'>
                    <Image className='imgs' src={data.pic}/>
                    <div className='text'>
                    <p className='t2'>{data.name}</p>
                    <p className='t22'>{data.desc}</p>
                    </div>
                   </div>
                ))}
           
        </div>
    </div>


    </>
  )
}

export default Testimonials