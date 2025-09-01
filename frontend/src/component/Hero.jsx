import React from 'react'
import { FaCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Hero = ({ heroCount, setHeroCount, heroData }) => {
  let navigate = useNavigate();
  return (
    <div className="absolute top-0 w-full h-full flex justify-center items-center bg-purple-600">
      <div className="text-center text-white z-10 px-4 max-w-4xl">
        <p className="text-lg md:text-xl font-light text-purple-300 mb-2 animate-fade-in">
          {heroData.text1}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
          {heroData.text2}
        </h1>
        <button className="px-8 py-3 bg-purple-900 hover:bg-purple-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-700/50" onClick={() => navigate("/collection")}>
        
          Shop Collection
        </button>
        
        {/* Social proof bar */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 text-purple-200 text-sm">
          <div className="flex items-center">
            <span className="text-xl mr-2">⭐</span>
            <span>4.8/5 Customer Reviews</span>
          </div>
          <div className="flex items-center">
            <span className="text-xl mr-2">🚚</span>
            <span>Free Shipping Over $50</span>
          </div>
          <div className="flex items-center">
            <span className="text-xl mr-2">↩️</span>
            <span>30-Day Returns</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
