import Article from '@/components/Article'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Home from '@/components/Home'
import Search from '@/components/Search'
import Service from '@/components/Service'
import Testimonials from '@/components/Testimonials'
import Welcome from '@/components/Welcome'
import React from 'react'

const page = () => {
  return (
    <div>
      
      <div className='bg'>
      <Home />
      <Welcome />
      <Service />
      <Features />
      <Testimonials />
      <Article />
      <Search />
      <Footer />
      </div>
      
    </div>
  )
}

export default page