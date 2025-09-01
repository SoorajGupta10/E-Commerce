import React from 'react'
import logo from "../assets/logo.png"
import { useNavigate } from "react-router-dom";

function Footer() {

  let navigate = useNavigate();

  return (
    <footer className="w-full bg-gradient-to-b from-gray-50 to-purple-50 pt-12 pb-6 mt-5">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          
          {/* Brand section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="E-Commerce Logo" className="w-10 h-10" />
              <p className="text-2xl font-bold text-gray-800">E-Commerce</p>
            </div>
            <p className="text-gray-600 text-center md:text-left mb-4 hidden md:block">
              E-Commerce is your all-in-one online shopping destination, offering top-quality products, 
              unbeatable deals, and fast delivery—all backed by trusted service designed to make your life easier every day.
            </p>
            <p className="text-gray-600 text-center md:text-left md:hidden">
              Fast. Easy. Reliable. E-Commerce Shopping
            </p>
            
            {/* Social media icons */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center transition-colors hover:bg-purple-200">
                <span className="text-purple-600">📱</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center transition-colors hover:bg-purple-200">
                <span className="text-purple-600">💬</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center transition-colors hover:bg-purple-200">
                <span className="text-purple-600">📸</span>
              </a>
            </div>
          </div>
          
          {/* Company links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <span className="w-2 h-2 rounded-full bg-purple-600 mr-2"></span>
              COMPANY
            </h3>
            <ul className="space-y-2 text-center md:text-left">
              <li  className="text-gray-600 hover:text-purple-600 transition-colors" onClick={() => {navigate("/")}}>Home</li>
              <li  className="text-gray-600 hover:text-purple-600 transition-colors" onClick={() => {navigate("/about")}}>About Us</li>
              <li  className="text-gray-600 hover:text-purple-600 transition-colors" onClick={() => {navigate("/collection")}}>Collection</li>
              <li  className="text-gray-600 hover:text-purple-600 transition-colors" onClick={() => {navigate("/contact")}}>Contact Us</li>
            </ul>
          </div>
          
          {/* Contact information */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
              <span className="w-2 h-2 rounded-full bg-purple-600 mr-2"></span>
              GET IN TOUCH
            </h3>
            <ul className="space-y-2 text-center md:text-left">
              <li className="hidden md:block">
                <a href="tel:+919771112584" className="text-gray-600 hover:text-purple-600 transition-colors">+91-9771112584</a>
              </li>
              <li>
                <a href="mailto:contact@ecom.com" className="text-gray-600 hover:text-purple-600 transition-colors">contact@ecom.com</a>
              </li>
              <li className="hidden md:block">
                <a href="tel:+11234567890" className="text-gray-600 hover:text-purple-600 transition-colors">+1-123-456-7890</a>
              </li>
              <li>
                <a href="mailto:admin@ecom.com" className="text-gray-600 hover:text-purple-600 transition-colors">admin@ecom.com</a>
              </li>
            </ul>
            
           
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent my-6"></div>
        
        {/* Copyright */}
        <div className="text-center text-gray-600 text-sm">
          <p>© 2025 E-Commerce. All Rights Reserved.</p>
          <div className="flex justify-center gap-6 mt-2">
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer