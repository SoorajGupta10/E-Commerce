import React from 'react'
import Nav from '../component/Nav'
import Sidebar from '../component/Sidebar'
import { useState } from 'react'
import { useContext } from 'react'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'
import { useEffect } from 'react'


function Home() {
  const [totalProducts,setTotalProducts] = useState(0)
  const [totalOrders, setTotalOrders] = useState(0)

  const {serverUrl} = useContext(authDataContext)

  const fetchCounts = async () => {
    try {
      const products = await axios.get(`${serverUrl}/api/product/list`,{},{withCredentials:true})
      setTotalProducts(products.data.length)

       const orders = await axios.post(`${serverUrl}/api/order/list`,{},{withCredentials:true})
      setTotalOrders(orders.data.length)

    } catch (err) {
      console.error("Failed to fetch couts",err)
    }
  }

  useEffect(()=>{
    fetchCounts()
  },[])

  return (
    <>
   
    <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] relative'>
       <Nav/>
       <Sidebar/>

       {/* <div className='w-[70vw] h-[100vh] absolute left-[25%] flex items-start justify-start flex-col gap-[40px] py-[100px]'>
        <h1 className='text-[35px] text-[#afe2f2]'>E-Commercer Admin Panel</h1>
        <div className='flex items-center justify-start gap-[50px] flex-col md:flex-row'>
          <div className='text-[#dcfafd] w-[400px] max-w-[90%] h-[200px] bg-[#0000002e] flex items-center justify-center flex-col gap-[20px] rounded-lg shadow-sm shadow-black backdrop:blue-lg md:text-[25px] text-[20px] border-[1px] border-[#969595]'>Total No. of Products : <span className='px-[20px] py-[10px] bg-[#030e11] rounded-lg flex items-center justify-center border-[1px] border-[#969595]'>{totalProducts}</span></div>

          <div className='text-[#dcfafd] w-[400px] max-w-[90%] h-[200px] bg-[#0000002e] flex items-center justify-center flex-col gap-[20px] rounded-lg shadow-sm shadow-black backdrop:blue-lg md:text-[25px] text-[20px] border-[1px] border-[#969595]'>Total No. of Orders : <span className='px-[20px] py-[10px] bg-[#030e11] rounded-lg flex items-center justify-center border-[1px] border-[#969595]'>{totalOrders}</span></div>
        </div>
       </div> */}

       <div className="w-[82vw] min-h-screen absolute left-[18%] flex flex-col gap-16 py-24 px-6 md:px-12 bg-gradient-to-br from-[#0a0a0a] to-[#1c1c1c]">
  <h1 className="text-[35px]  text-[#afe2f2]">
    E-Commerce Admin Panel
  </h1>

  <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
    {/* Total Products Card */}
    <div className="text-[#dcfafd] w-[420px] max-w-[95%] h-[220px] bg-[#111111a8] flex flex-col items-center justify-center gap-6 rounded-2xl shadow-xl shadow-black/60 backdrop-blur-lg md:text-[28px] text-[22px] border border-[#969595] hover:scale-105 hover:shadow-[#afe2f2]/30 transition-all duration-300">
      Total No. of Products :
      <span className="px-8 py-3 bg-[#030e11] rounded-lg flex items-center justify-center border border-[#969595] text-[26px] font-semibold shadow-inner">
        {totalProducts}
      </span>
    </div>

    {/* Total Orders Card */}
    <div className="text-[#dcfafd] w-[420px] max-w-[95%] h-[220px] bg-[#111111a8] flex flex-col items-center justify-center gap-6 rounded-2xl shadow-xl shadow-black/60 backdrop-blur-lg md:text-[28px] text-[22px] border border-[#969595] hover:scale-105 hover:shadow-[#afe2f2]/30 transition-all duration-300">
      Total No. of Orders :
      <span className="px-8 py-3 bg-[#030e11] rounded-lg flex items-center justify-center border border-[#969595] text-[26px] font-semibold shadow-inner">
        {totalOrders}
      </span>
    </div>
  </div>
</div>

      
    </div>
    </>
  )
}

export default Home



