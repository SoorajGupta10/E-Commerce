import React from 'react'
import back1 from '../assets/download.jfif'
import back2 from '../assets/bac.webp'
import back3 from '../assets/back3.jpg'
import back4 from '../assets/back4.jpg'

const Background = ({ heroCount }) => {
  const backgrounds = [back1, back2, back3, back4];

  return (
    <div className="w-full h-full relative">
      <img 
        src={backgrounds[heroCount % backgrounds.length]} 
        alt="Background" 
        className="w-full h-full object-cover"
      />
      {/* Reduce overlay opacity to 0.1 */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-gray-900/10"></div>
    </div>
  )
}

export default Background
