import React from 'react'

function Title({ text1, text2, accentColor = "#8B5CF6", hoverColor = "#7C3AED" }) {
  return (
    <div className="relative inline-block text-center mb-8 group">
      <div className="inline-flex gap-3 items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
          {text1} <span 
            className="transition-colors duration-300"
            style={{ color: accentColor }}
          >{text2}</span>
        </h2>
      </div>
      
      {/* Animated underline */}
      <div 
        className="h-1 w-20 mx-auto mt-3 rounded-full transition-all duration-500 group-hover:w-32"
        style={{ backgroundColor: accentColor }}
      ></div>
      
      {/* Decorative elements */}
      <div 
        className="absolute -top-2 -left-2 w-4 h-4 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"
        style={{ backgroundColor: accentColor }}
      ></div>
      <div 
        className="absolute -bottom-2 -right-2 w-4 h-4 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"
        style={{ backgroundColor: accentColor }}
      ></div>
    </div>
  )
}

export default Title