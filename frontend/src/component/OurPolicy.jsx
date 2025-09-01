import React from 'react'
import Title from './Title'
import { RiExchangeFundsFill } from "react-icons/ri";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";

function OurPolicy() {
  return (
    <div className='w-full min-h-screen py-16 flex items-center justify-center flex-col bg-white gap-12'>
      
      {/* Header Section */}
      <div className='text-center mb-8 px-4'>
        <Title text1={"OUR"} text2={"POLICY"} />
        <p className='max-w-2xl mx-auto text-lg text-[#5d5959] mt-4'>
          Customer-Friendly Policy - Committed to Your Satisfaction and Safety.
        </p>
      </div>

      {/* Policy Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-6xl mx-auto'>
        
        {/* Exchange Policy Card */}
        <div className='bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 border border-purple-900/30 hover:border-purple-500/50'>
          <div className='w-20 h-20 rounded-full bg-purple-900/30 flex items-center justify-center mb-6'>
            <RiExchangeFundsFill className='w-10 h-10 text-purple-400' />
          </div>
          <h3 className='text-2xl font-bold text-purple-300 mb-4'>Easy Exchange Policy</h3>
          <p className='text-purple-100'>
            Exchange Made Easy - Quick, Simple, and Customer-Friendly Process.
          </p>
        
        </div>

        {/* Return Policy Card */}
        <div className='bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 border border-purple-900/30 hover:border-purple-500/50'>
          <div className='w-20 h-20 rounded-full bg-purple-900/30 flex items-center justify-center mb-6'>
            <TbRosetteDiscountCheckFilled className='w-10 h-10 text-purple-400' />
          </div>
          <h3 className='text-2xl font-bold text-purple-300 mb-4'>7 Days Return Policy</h3>
          <p className='text-purple-100'>
            Shop with Confidence - 7 Days Easy Return Guarantee.
          </p>
         
        </div>

        {/* Support Policy Card */}
        <div className='bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 border border-purple-900/30 hover:border-purple-500/50'>
          <div className='w-20 h-20 rounded-full bg-purple-900/30 flex items-center justify-center mb-6'>
            <BiSupport className='w-10 h-10 text-purple-400' />
          </div>
          <h3 className='text-2xl font-bold text-purple-300 mb-4'>Best Customer Support</h3>
          <p className='text-purple-100'>
            Trusted Customer Support - Your Satisfaction Is Our Priority.
          </p>
          
        </div>
      </div>

      {/* Additional Information */}
      <div className='max-w-4xl mx-auto px-4 mt-12 text-center'>
        <div className='bg-gray-800 p-6 rounded-xl border border-purple-700/30'>
          <h3 className='text-xl font-semibold text-purple-300 mb-3'>Our Commitment to You</h3>
          <p className='text-purple-100'>
            We believe in transparent, customer-first policies that ensure your shopping experience is 
            hassle-free and enjoyable. Our team is always ready to assist you with any questions or concerns.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OurPolicy