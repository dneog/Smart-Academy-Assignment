import React from 'react';
import './Home.css';
import Heading from './Heading';


const Home = () => {
  return (
    <div className='home'>
      <Heading />
      <div className='in'>
      <h2 className='ac'>Achieve your future <br />
With Smart Academy</h2>
  <p className='ac1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tristique sem ut lacinia <br /> pellentesque. Donec in nulla faucibus, tincidunt velit vel, ultricies dolor.</p>

  <button className='buts'>Explore Couse</button>
      </div>
   
    </div>
  )
}

export default Home