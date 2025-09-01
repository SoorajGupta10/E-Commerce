import React, { useContext, useEffect, useState } from 'react'
import { FaChevronRight, FaChevronDown, FaFilter } from "react-icons/fa";
import Title from '../component/Title';
import { shopDataContext } from '../context/ShopContext';
import Card from '../component/Card';
import Footer from '../component/Footer';

function Collections() {
  let [showFilter, setShowFilter] = useState(false)
  let {products, search, showSearch} = useContext(shopDataContext)
  let [filterProduct, setFilterProduct] = useState([])
  let [category, setCategory] = useState([])
  let [subCategory, setSubCategory] = useState([])
  let [sortType, setSortType] = useState("relavent")

  const toggleCategory = (e) => {
    if(category.includes(e.target.value)){
      setCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productCopy = products.slice()
    if(showSearch && search){
      productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length > 0){
      productCopy = productCopy.filter(item => category.includes(item.category))
    }
    if(subCategory.length > 0){
      productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
    }
    setFilterProduct(productCopy)
  }

  const sortProducts = (e) => {
    let fbCopy = filterProduct.slice()

    switch (sortType) {
      case 'low-high':
        setFilterProduct(fbCopy.sort((a,b) => (a.price - b.price)))
        break;
      case 'high-low':
        setFilterProduct(fbCopy.sort((a,b) => (b.price - a.price)))
        break;
      default:
        applyFilter()
        break;
    }
  }

  useEffect(() => {
    sortProducts()
  }, [sortType])

  useEffect(() => {
    setFilterProduct(products)
  }, [products])

  useEffect(() => {
    applyFilter()
  }, [category, subCategory, search, showSearch])

  return (
    <>
    <div className='w-full min-h-screen flex flex-col md:flex-row justify-start pt-20 bg-gradient-to-b from-gray-50 to-purple-50 pb-24'>
      {/* Filter Sidebar */}
      <div className={`md:w-80 w-full md:min-h-screen md:sticky md:top-20 md:self-start transition-all duration-300 ${showFilter ? "h-auto" : "h-16"} p-5 bg-white md:bg-transparent md:border-r border-purple-200 shadow-md md:shadow-none`}>
        {/* Filter Header - Mobile */}
        <div 
          className='flex items-center justify-between p-3 bg-purple-100 rounded-lg md:bg-transparent md:p-0 md:rounded-none cursor-pointer md:cursor-auto'
          onClick={() => setShowFilter(prev => !prev)}
        >
          <div className='flex items-center gap-2'>
            <FaFilter className='text-purple-600' />
            <p className='text-xl font-semibold text-purple-800'>FILTERS</p>
          </div>
          {!showFilter && <FaChevronRight className='text-purple-600 md:hidden' />}
          {showFilter && <FaChevronDown className='text-purple-600 md:hidden' />}
        </div>

        {/* Filter Content */}
        <div className={`mt-6 space-y-6 ${showFilter ? "block" : "hidden md:block"}`}>
          {/* Categories Filter */}
          <div className='border border-purple-200 p-5 rounded-lg bg-white shadow-sm'>
            <p className='text-lg font-semibold text-purple-800 mb-3'>CATEGORIES</p>
            <div className='space-y-2'>
              {['Men', 'Women', 'Kids'].map((cat) => (
                <label key={cat} className='flex items-center gap-3 cursor-pointer group'>
                  <input 
                    type="checkbox" 
                    value={cat} 
                    className='w-4 h-4 text-purple-600 bg-gray-100 border-purple-300 rounded focus:ring-purple-500 focus:ring-2'
                    onChange={toggleCategory}
                  />
                  <span className='text-gray-700 group-hover:text-purple-600 transition-colors'>{cat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Sub-Categories Filter */}
          <div className='border border-purple-200 p-5 rounded-lg bg-white shadow-sm'>
            <p className='text-lg font-semibold text-purple-800 mb-3'>SUB-CATEGORIES</p>
            <div className='space-y-2'>
              {['TopWear', 'BottomWear', 'WinterWear'].map((subCat) => (
                <label key={subCat} className='flex items-center gap-3 cursor-pointer group'>
                  <input 
                    type="checkbox" 
                    value={subCat} 
                    className='w-4 h-4 text-purple-600 bg-gray-100 border-purple-300 rounded focus:ring-purple-500 focus:ring-2'
                    onChange={toggleSubCategory}
                  />
                  <span className='text-gray-700 group-hover:text-purple-600 transition-colors'>{subCat}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Clear Filters Button */}
       
        </div>
      </div>

      {/* Products Section */}
      <div className='flex-1 p-5 md:p-8'>
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4'>
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          
          <div className='relative'>
            <select 
              onChange={(e) => setSortType(e.target.value)}
              className='w-full lg:w-48 px-4 py-3 bg-white border border-purple-300 rounded-lg text-gray-700 appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent pr-10 cursor-pointer'
            >
              <option value="relavent">Sort By: Relevant</option>
              <option value="low-high">Sort By: Low to High</option>
              <option value="high-low">Sort By: High to Low</option>
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-purple-600'>
              <FaChevronDown />
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className='mb-6'>
          <p className='text-purple-700'>
            Showing {filterProduct.length} of {products.length} products
          </p>
        </div>

        {/* Products Grid */}
        {filterProduct.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {filterProduct.map((item, index) => (
              <Card 
                key={index} 
                id={item._id} 
                name={item.name} 
                price={item.price}
                image={item.image1}
              />
            ))}
          </div>
        ) : (
          <div className='flex flex-col items-center justify-center py-20 text-center'>
            <div className='text-6xl text-purple-300 mb-4'>🔍</div>
            <h3 className='text-xl font-semibold text-gray-700 mb-2'>No products found</h3>
            <p className='text-gray-500'>Try adjusting your filters or search term</p>
            <button 
              className='mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors'
              onClick={() => {
                setCategory([])
                setSubCategory([])
              }}
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

     
    </div>
     <div> <Footer/></div>
     </>
    
    
   
  )
}

export default Collections