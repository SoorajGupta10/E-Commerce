import React, { useState, useContext } from 'react';
import Title from '../component/Title';
import contact from '../assets/contact.avif';
import NewLetterBox from '../component/NewLetterBox';
import Footer from '../component/Footer';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { authDataContext } from '../context/authContext';

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // 🔹 loader state

  const { serverUrl } = useContext(authDataContext);
  let navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // 🔹 start loader
    try {
      const res = await axios.post(`${serverUrl}/api/contact`, {
        userName: form.name,
        userEmail: form.email,
        userMessage: form.message,
      });

      if (res.status === 200) {
        toast.success("✅ Your message has been sent successfully!", {
          position: "top-center",
          autoClose: 3000,
          theme: "colored",
        });
        setForm({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error(err);
      toast.error("❌ Failed to send message. Try again later.", {
        position: "top-center",
        autoClose: 3000,
        theme: "colored",
      });
    } finally {
      setLoading(false); // 🔹 stop loader
    }
  };

  return (
    <div className='w-[98.9vw] min-h-[100vh] flex items-center justify-center flex-col bg-[white] gap-[50px] pt-[80px]'>
      <Title text1={'CONTACT'} text2={'US'} />

      {/* Image + Info Section */}
      <div className='w-full flex items-center justify-center flex-col lg:flex-row'>
        <div className='lg:w-1/2 w-full flex items-center justify-center relative'>
          <img 
            src={contact} 
            alt="contact"  
            className='lg:w-[70%] w-[80%] shadow-lg shadow-black/40 rounded-md'
          />
          <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-[#7C3AED] opacity-80"></div>
          <div className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full bg-[#7C3AED] opacity-80"></div>
        </div>

        <div className='lg:w-1/2 w-[80%] flex items-center justify-center gap-[20px] flex-col mt-[20px] lg:mt-0 text-gray-200'>
          <p className='lg:w-[80%] w-full font-bold lg:text-lg text-[15px] text-[#8B5CF6]'>Our Store</p>
          <p className="lg:w-[80%] w-full text-[#1f1e1e]">12345 Random Station, Random City, India</p>
          <p className="lg:w-[80%] w-full text-[#1f1e1e]">Tel: +91-9771112584</p>
          <p className="lg:w-[80%] w-full text-[#1f1e1e]">Email: admin@ecom.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-4xl mx-auto px-4 py-8">
        <div className="bg-[#1E293B] border border-[#8B5CF6]/30 rounded-lg p-6 shadow-lg">
          <h3 className="text-2xl font-bold text-[#8B5CF6] mb-6 text-center">Send us a Message</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#0F172A] border border-[#8B5CF6]/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-[#0F172A] border border-[#8B5CF6]/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                  placeholder="Your email"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea 
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 bg-[#0F172A] border border-[#8B5CF6]/30 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                placeholder="Your message"
                required
              ></textarea>
            </div>

            {/* 🔹 Button with loader */}
            <button 
              type="submit"
              disabled={loading}
              className={`w-full py-3 text-white font-semibold rounded-md transition-all duration-300 
                ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-[#8B5CF6] hover:bg-[#7C3AED]"}`}
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  <span>Sending...</span>
                </div>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>

      <NewLetterBox />
      <Footer/>
      <ToastContainer />
    </div>
  )
}

export default Contact;
