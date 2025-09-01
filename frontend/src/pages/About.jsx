import React from 'react'
import Title from '../component/Title'
import about from '../assets/about.webp'
import NewLetterBox from '../component/NewLetterBox'
import Footer from '../component/Footer'

function About() {
  return (
    <div className='w-full min-h-screen bg-[white] pt-20 '>
      {/* Header Section */}
      <div className='text-center py-12 px-4'>
        <Title text1={"ABOUT"} text2={"US"} />
        <p className='max-w-2xl mx-auto text-lg text-[#212020] mt-4'>
          Learn more about our story, mission, and what makes us different
        </p>
      </div>

      {/* Main Content Section */}
      <div className='max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-12 mb-16'>
        {/* Image Section */}
        <div className='lg:w-1/2 w-full flex justify-center relative'>
          <div className='relative'>
            <img 
              src={about} 
              alt="About E-Commerce" 
              className='w-full max-w-md rounded-xl shadow-2xl shadow-purple-900/50'
            />
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-purple-600 opacity-80 blur-sm"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-purple-500 opacity-80 blur-sm"></div>
            <div className="absolute top-8 -right-8 w-6 h-6 rounded-full bg-purple-400 opacity-60"></div>
            <div className="absolute bottom-8 -left-8 w-6 h-6 rounded-full bg-purple-400 opacity-60"></div>
          </div>
        </div>
        
        {/* Text Content */}
        <div className='lg:w-1/2 w-full space-y-6'>
          <p className='text-lg text-[#212020] leading-relaxed'>
            E-Commerce was born for smart, seamless shopping—created to deliver quality products, 
            trending styles, and everyday essentials in one place. With reliable service, fast delivery, 
            and great value, E-Commerce makes your online shopping experience simple, satisfying, and stress-free.
          </p>

          <p className='text-lg text-[#212020] leading-relaxed'>
            We're built for modern shoppers—combining style, convenience, and affordability. 
            Whether it's fashion, essentials, or trends, we bring everything you need to one trusted 
            platform with fast delivery, easy returns, and a customer-first shopping experience you'll love.
          </p>

          <div className='pt-4'>
            <h3 className='text-3xl font-bold text-[#212020] mb-3'>Our Mission</h3>
            <p className='text-lg text-[#212020] leading-relaxed'>
              Our mission is to redefine online shopping by delivering quality, affordability, and convenience. 
              E-Commerce connects customers with trusted products and brands, offering a seamless, 
              customer-focused experience that saves time, adds value, and fits every lifestyle and need.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='max-w-6xl mx-auto px-4 mb-16'>
        <div className='text-center mb-12'>
          <Title text1={"WHY"} text2={"CHOOSE US"} />
          <p className='max-w-2xl mx-auto text-lg text-[#212020] mt-4'>
            Discover what sets us apart from the competition
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Quality Assurance Card */}
          <div className='bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-8 text-center transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 border border-purple-900/30 hover:border-purple-500/50'>
            <div className='w-16 h-16 rounded-full bg-purple-900/30 flex items-center justify-center mx-auto mb-6'>
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className='text-xl font-bold text-purple-300 mb-4'>Quality Assurance</h3>
            <p className='text-purple-100'>
              We guarantee quality through strict checks, reliable sourcing, and a commitment to 
              customer satisfaction always.
            </p>
          </div>

          {/* Convenience Card */}
          <div className='bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-8 text-center transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 border border-purple-900/30 hover:border-purple-500/50'>
            <div className='w-16 h-16 rounded-full bg-purple-900/30 flex items-center justify-center mx-auto mb-6'>
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className='text-xl font-bold text-purple-300 mb-4'>Convenience</h3>
            <p className='text-purple-100'>
              Shop easily with fast delivery, simple navigation, secure checkout, and everything 
              you need in one place.
            </p>
          </div>

          {/* Customer Service Card */}
          <div className='bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-8 text-center transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 border border-purple-900/30 hover:border-purple-500/50'>
            <div className='w-16 h-16 rounded-full bg-purple-900/30 flex items-center justify-center mx-auto mb-6'>
              <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
              </svg>
            </div>
            <h3 className='text-xl font-bold text-purple-300 mb-4'>Exceptional Customer Service</h3>
            <p className='text-purple-100'>
              Our dedicated support team ensures quick response, helpful solutions, and a smooth 
              shopping experience every time.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className='max-w-4xl mx-auto px-4 mb-16 '>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          {[
            { number: '10K+', label: 'Happy Customers' },
            { number: '500+', label: 'Products' },
            { number: '24/7', label: 'Support' },
            { number: '98%', label: 'Satisfaction Rate' }
          ].map((stat, index) => (
            <div key={index} className='bg-gray-800 bg-opacity-50 rounded-lg p-6 text-center border border-purple-700/20'>
              <p className='text-3xl font-bold text-purple-300 mb-2'>{stat.number}</p>
              <p className='text-purple-100'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <NewLetterBox />
      <Footer/>
    </div>
  )
}

export default About