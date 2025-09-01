import React, { useContext } from 'react'
import { shopDataContext } from '../context/ShopContext'
import { useNavigate } from 'react-router-dom'

function Card({ name, image, id, price, isNew = true }) {
  let { currency } = useContext(shopDataContext)
  let navigate = useNavigate()
  
  return (
    <div 
      className="group w-full max-w-[300px] bg-[white] dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 dark:border-gray-700"
      onClick={() => navigate(`/productdetail/${id}`)}
    >
      <div className="relative overflow-hidden border-[1px] border-[white]">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-auto object-cover group-hover:scale-110 border-transition-transform duration-500"
        />
        {isNew && (
          <div className="absolute top-3 right-3 bg-violet-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            New
          </div>
        )}
      </div>
      
      <div className="p-5">
        <h3 className="text-gray-900 dark:text-gray-100 font-semibold text-lg mb-3 line-clamp-2 h-14">
          {name}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-violet-600 dark:text-violet-400 font-bold text-xl">
            {currency} {price}
          </span>
          <button 
            className="text-white bg-violet-500 hover:bg-violet-600 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 font-medium rounded-lg text-sm px-4 py-2 transition-colors duration-200 shadow-md hover:shadow-violet-500/30"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/productdetail/${id}`);
            }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card