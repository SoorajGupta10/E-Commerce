import React from "react";
import logo from "../assets/logo.png";
import { IoSearchCircleOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { IoSearchCircle } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { useState } from "react";
import { useContext } from "react";
import { userDataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { authDataContext } from "../context/authContext";
import { HiOutlineCollection } from "react-icons/hi";
import { MdContacts } from "react-icons/md";
import { shopDataContext } from "../context/ShopContext";

function Nav() {
  let {getCurrentUser, userData } = useContext(userDataContext);
  let {serverUrl} = useContext(authDataContext)
  let {showSearch, setShowSearch,search,setSearch,getCartCount} = useContext(shopDataContext)
  let [showProfile, setShowProfile] = useState(false);
  let navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const result = await axios.get(serverUrl + "/api/auth/logout" , {withCredentials:true})
      console.log(result.data)
      getCurrentUser()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full h-[70px] bg-white z-50 fixed top-0 flex items-center justify-between px-6 md:px-8 shadow-sm border-b border-gray-100">
      {/* Logo Section */}
      <div className="flex items-center justify-start gap-3 cursor-pointer" onClick={() => navigate("/")}>
        <img src={logo} alt="E-Commerce Logo" className="w-8 h-8" />
        <h1 className="text-xl font-bold text-gray-900 font-sans">E-Commerce</h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-1 max-w-xl mx-8">
        <ul className="flex items-center justify-center gap-6 text-gray-700">
          {[
            { name: "HOME", path: "/" },
            { name: "COLLECTION", path: "/collection" },
            { name: "ABOUT", path: "/about" },
            { name: "CONTACT", path: "/contact" }
          ].map((item) => (
            <li 
              key={item.name}
              className="text-sm font-medium hover:text-violet-600 transition-colors cursor-pointer py-2 px-3 rounded-md hover:bg-gray-50"
              onClick={() => navigate(item.path)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Action Icons */}
      <div className="flex items-center justify-end gap-5">
        {!showSearch ? (
          <IoSearchCircleOutline
            className="w-7 h-7 text-gray-600 cursor-pointer hover:text-violet-600 transition-colors"
            onClick={() => {setShowSearch(prev => !prev); navigate("/collection")}}
          />
        ) : (
          <IoSearchCircle
            className="w-7 h-7 text-violet-600 cursor-pointer transition-colors"
            onClick={() => setShowSearch(prev => !prev)}
          />
        )}
        
        {/* User Icon */}
        {!userData ? (
          <FaRegCircleUser 
            className="w-6 h-6 text-gray-600 cursor-pointer hover:text-violet-600 transition-colors" 
            onClick={() => setShowProfile(prev => !prev)}
          />
        ) : (
          <div
            className="w-7 h-7 bg-violet-600 text-white rounded-full flex items-center justify-center cursor-pointer font-medium shadow-sm hover:bg-violet-700 transition-colors"
            onClick={() => setShowProfile(prev => !prev)}
          >
            {/* {userData?.name.slice(0, 1).toUpperCase()} */}
            {userData && userData.name ? userData.name.slice(0, 1).toUpperCase() : ""}

          </div>
        )}

        {/* Cart Icon */}
        <div className="relative hidden md:block">
          <IoCartOutline 
            className="w-6 h-6 text-gray-600 cursor-pointer hover:text-violet-600 transition-colors" 
            onClick={() => navigate("/cart")}
          />
          <span className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-violet-600 text-xs text-white rounded-full shadow-sm">
            {getCartCount()}
          </span>
        </div>
      </div>

      {/* Search Bar */}
      {showSearch && (
        <div className="w-full h-16 bg-white absolute top-full left-0 right-0 flex items-center justify-center shadow-md border-b border-gray-100">
          <input
            type="text"
            className="w-full max-w-xl h-10 bg-gray-50 rounded-lg px-4 text-gray-900 text-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent"
            placeholder="Search products..."  
            onChange={(e) => setSearch(e.target.value)} 
            value={search}
            autoFocus
          />
        </div>
      )}

      {/* Profile Dropdown */}
      {showProfile && 
        <div className="absolute w-48 bg-white top-full right-4 mt-2 rounded-lg shadow-lg border border-gray-200 z-50 overflow-hidden">
          <ul className="py-1 text-sm text-gray-700">
            {!userData ? (
              <li 
                className="px-4 py-2 hover:bg-violet-50 cursor-pointer transition-colors"
                onClick={() => {navigate("/login"); setShowProfile(false)}}
              >
                Login
              </li>
            ) : (
              <li 
                className="px-4 py-2 hover:bg-violet-50 cursor-pointer transition-colors"
                onClick={() => {handleLogout(); setShowProfile(false)}}
              >
                Logout
              </li>
            )}
            <li 
              className="px-4 py-2 hover:bg-violet-50 cursor-pointer transition-colors"
              onClick={() => {navigate('/order'); setShowProfile(false)}}
            >
              Orders
            </li>
            <li 
              className="px-4 py-2 hover:bg-violet-50 cursor-pointer transition-colors"
              onClick={() => {navigate('/about'); setShowProfile(false)}}
            >
              About
            </li>
          </ul>
        </div>
      }
      
      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 flex items-center justify-between px-6 md:hidden">
        {[
          { icon: <IoMdHome className="w-6 h-6" />, label: "Home", path: "/" },
          { icon: <HiOutlineCollection className="w-6 h-6" />, label: "Collections", path: "/collection" },
          { icon: <MdContacts className="w-6 h-6" />, label: "Contact", path: "/contact" },
          { icon: (
            <div className="relative">
              <IoCartOutline className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 w-4 h-4 flex items-center justify-center bg-violet-600 text-xs text-white rounded-full">
                {getCartCount()}
              </span>
            </div>
          ), label: "Cart", path: "/cart" }
        ].map((item, index) => (
          <button 
            key={index}
            className="flex flex-col items-center justify-center gap-1 text-xs text-gray-600 hover:text-violet-600 transition-colors"
            onClick={() => navigate(item.path)}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Nav;