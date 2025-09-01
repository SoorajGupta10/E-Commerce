import React, { useEffect, useState } from 'react'
import Background from '../component/Background'
import Hero from '../component/Hero'
import Product from './Product'
import OurPolicy from '../component/OurPolicy'
import NewLetterBox from '../component/NewLetterBox'
import Footer from '../component/Footer'

const Home = () => {
  let heroData = [
    {text1:"30% OFF Limited offer",text2:"Style that Speaks Volumes"},
    {text1:"Discover the Best of Bold Fashion",text2:"Limited Time Only!"},
    {text1:"Explore Our Best Collection",text2:"Shop Now!"},
    {text1:"Choose your Perfect Fashion Fit",text2:"Now on Sale!"}
  ]

  let [heroCount,setHeroCount] = useState(0)
  useEffect(()=>{
    let interval = setInterval(()=>{
      setHeroCount(prevCount => (prevCount === 3 ? 0 : prevCount + 1))
    },3000)
    return ()=> clearInterval(interval)
  },[])
  
  return (
    <div className='overflow-x-hidden relative top-[70px] bg-gradient-to-b from-gray-50 to-purple-50'>
      {/* Hero Section */}
      <div className='w-full lg:h-screen md:h-[60vh] h-[50vh] relative'>
        <Background heroCount={heroCount} />
        <div className="absolute inset-0  opacity-10"></div>
        <Hero heroCount={heroCount} setHeroCount={setHeroCount} heroData={heroData[heroCount]} />
        
        {/* Hero indicator dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {[0, 1, 2, 3].map((index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                heroCount === index ? 'bg-purple-600 scale-110' : 'bg-white bg-opacity-50'
              }`}
              onClick={() => setHeroCount(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <Product />
      <OurPolicy />
      
      {/* Newsletter Section with Purple Accent */}
      <div className="relative py-16 bg-gradient-to-br from-purple-900 to-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-full h-full bg-purple-800 opacity-10 transform rotate-12"></div>
        </div>
        <NewLetterBox />
      </div>
      
      <Footer />
    </div>
  )
}

export default Home