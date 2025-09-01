import React from 'react'
import Title from '../component/Title'
import { useContext } from 'react'
import { shopDataContext } from '../context/ShopContext'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { RiDeleteBin6Line } from "react-icons/ri";
import CartTotal from '../component/CartTotal'
import { toast } from "react-toastify";

function Cart() {
    const {products, currency, cartItem, updateQuantity} = useContext(shopDataContext)
    const [cartData,setCartData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const tempData = [];
        for(const items in cartItem){
            for(const item in cartItem[items]){
                if(cartItem[items][item] > 0){
                    tempData.push({
                        _id:items,
                        size:item,
                        quantity:cartItem[items][item],
                    });
                }
            }
        }
        setCartData(tempData)
    },[cartItem])

  return (
    <div className='w-[98.9vw] min-h-[100vh] p-[20px] overflow-hidden bg-[white]'>
      <div className='h-[8%] w-[100%] text-center mt-[80px]'>
        <Title text1={'YOUR'} text2={'CART'}/>
      </div>

      <div className='w-[100%] h-[92%] flex flex-wrap gap-[10px]'>
        {
            cartData.map((item,index)=>{
                const productData = products.find((product)=>product._id === item._id);
                
  if (!productData) {
    return null; // or render a placeholder
  }
               return (
  <div 
    key={index} 
    className="w-full "
  >
    <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-4 bg-purple-900/30 p-4 rounded-2xl relative">
      
      {/* Product Image */}
      <img 
        className="w-20 h-20 md:w-24 md:h-24 rounded-md object-cover" 
        src={productData.image1} 
        alt={productData.name} 
      />

      {/* Product Info */}
      <div className="flex flex-col gap-2 flex-grow">
        <p className="text-lg md:text-2xl text-[#0a0a0a]">{productData.name}</p>
        
        <div className="flex flex-wrap items-center gap-4">
          <p className="text-lg md:text-xl text-[#0f0f0f]">
            {currency} {productData.price}
          </p>
          <p className="w-10 h-10 text-sm md:text-base text-[#0e0e0e] bg-purple-900/30 rounded-md flex items-center justify-center border border-[white]">
            {item.size}
          </p>
        </div>
      </div>

      {/* Quantity Input */}
      {/* <input
        type="number"
        min={1}
        defaultValue={item.quantity}
        className="max-w-16 md:max-w-20 px-2 py-1 md:px-2 md:py-2 text-[#0c0c0c] text-base md:text-lg font-semibold bg-purple-900/30 border border-[#9ff9f9] rounded-md"
        onChange={(e) =>
          e.target.value === '' || e.target.value === '0'
            ? null
            : updateQuantity(item._id, item.size, Number(e.target.value))
        }

      /> */}
      <div className="flex items-center space-x-2">
  {/* Decrease button */}
  <button
    type="button"
    className="px-3 py-1 bg-[white] rounded-md text-[#f00c0c] text-[20px] hover:bg-purple-900/20"
    onClick={() => {
      const newValue = Math.max(1, Number(item.quantity) - 1);
      updateQuantity(item._id, item.size, newValue);
    }}
  >
    -
  </button>

  {/* Input field */}
  <input
    type="tel"
    min={1}
    value={item.quantity}
    className="max-w-16 md:max-w-20 px-2 py-1 md:px-2 md:py-2 text-[#0c0c0c] text-base md:text-lg font-semibold bg-purple-900/30 border border-[white] rounded-md text-center"
    onChange={(e) =>
      e.target.value === '' || e.target.value === '0'
        ? null
        : updateQuantity(item._id, item.size, Number(e.target.value))
    }
  />

  {/* Increase button */}
  <button
    type="button"
    className="px-3 py-1 bg-[white] rounded-md text-[#2be941] text-[20px] hover:bg-purple-900/20"
    onClick={() => {
      const newValue = Number(item.quantity) + 1;
      updateQuantity(item._id, item.size, newValue);
    }}
  >
    +
  </button>
</div>


      {/* Delete Button */}
      <RiDeleteBin6Line 
       className="text-[#f60606] w-6 h-6 md:w-[25px] md:h-[25px] cursor-pointer"
onClick={() => {
  updateQuantity(item._id, item.size, 0);
  toast.info(" removed from cart");
}}
      />
    </div>
  </div>
)

            })
        }
      </div>
      <div className='flex justify-start items-end my-20'>
        <div className='w-full sm:w-[450px]'>
            <CartTotal/>
            <button className='text-[18px] hover:bg-purple-900/30 cursor-pointer bg-[#b50af848] py-[10px] px-[50px] rounded-2xl text-[black] flex items-center justify-center gap-[20px] border-[1px] border-[#9200f3] ml-[30px] mt-[20px]'
             onClick={()=>{
                if(cartData.length > 0){
                    navigate("/placeorder")
                }else{
                    console.log("Your cart is empty!")
                }
             }}>
                PROCEED TO CHECKOUT
            </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
