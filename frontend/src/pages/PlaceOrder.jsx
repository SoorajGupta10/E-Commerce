import React from 'react'
import Title from '../component/Title'
import { useState } from 'react'
import CartTotal from '../component/CartTotal'
import razorpay from '../assets/Razorpay-Logo.jpg'
import { useContext } from 'react'
import { shopDataContext } from '../context/ShopContext'
import { authDataContext } from '../context/AuthContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function PlaceOrder() {
    let [method,setMethod] = useState('cod');
    let navigate = useNavigate()
    const {cartItem, setCartItem, getCartAmount, delivery_fee, products}= useContext(shopDataContext)
    let {serverUrl} = useContext(authDataContext)

    let [formData,setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        street:'',
        city:'',
        state:'',
        pinCode:'',
        country:'',
        phone:''
    })

    const onChangeHandler = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setFormData(data => ({...data,[name]:value}))
    }

   const initPay = (order) => {
    const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, // ⚠️ must use VITE_ prefix in Vite
        amount: order.amount,
        currency: order.currency,
        name: 'Order Payment',
        description: 'Order Payment',
        order_id: order.id,
        receipt: order.receipt,
        handler: async (response) => {
            console.log(response)
        
        const {data} = await axios.post(serverUrl + '/api/order/verifyrazorpay',response,{withCredentials:true})    
          if(data){
            
            navigate("/order")
            setCartItem({})
          }
        }
    }

    const rzp = new window.Razorpay(options)
    rzp.open()
}

    

    const onSubmitHandler = async (e) =>{
            e.preventDefault()
            try {
                let orderItems = []
                for(const items in cartItem){
                    for(const item in cartItem[items]){
                        if(cartItem[items][item] > 0){
                            const itemInfo = structuredClone(products.find(product => product._id === items))
                            if(itemInfo){
                                itemInfo.size = item
                                itemInfo.quantity = cartItem[items][item]
                                orderItems.push(itemInfo)
                            }
                        }
                    }
                }
                let orderData = {
                    address:formData,
                    items:orderItems,
                    amount:getCartAmount() + delivery_fee
                }
                switch (method) {
                    case 'cod':
                        const result = await axios.post(serverUrl + "/api/order/placeorder", orderData, {withCredentials:true})
                        console.log(result)
                        if(result.data){
                            setCartItem({})
                            navigate("/order")
                        }
                        else{
                            console.log(result.data.message)
                        }

                        break;
                
                        case 'razorpay':
                            const resultRazorpay = await axios.post(serverUrl + "/api/order/razorpay", orderData, {withCredentials:true})
                            if(resultRazorpay.data){
                                initPay(resultRazorpay.data)
                                
                            }
                            break;

                    default:
                        break;
                }

            } catch (error) {
                console.log(error)
                
                
            }
        }
  return (
    <div className='w-[98.9vw] min-h-[100vh] bg-white flex items-center justify-center flex-col md:flex-row gap-[50px] relative'>

        <div className='lg:w-[50%] w-[100%] h-[100%] flex items-center justify-center lg:mt-[0px] mt-[90px]'>
            <form action="" onSubmit={onSubmitHandler} className='lg:w-[70%] w-[95%] lg:h-[70%] h-[100%] '>
                <div className='py-[10px] '>
                    <Title text1={'DELIVERY'} text2={'INFOR'}/>
                </div>
                <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'> 
                    <input type="text" placeholder='First Name' className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] shadow-sm shadow-[#343434]' required onChange={onChangeHandler} name='firstName' value={formData.firstName} />
                    
                    <input type="text" placeholder='Last Name' className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] shadow-sm shadow-[#343434]' required onChange={onChangeHandler} name='lastName' value={formData.lastName}/>
                </div>    

                <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>   
                    <input type="email" placeholder='Email address' className='w-[100%] h-[50px] rounded-md bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] shadow-sm shadow-[#343434]' required onChange={onChangeHandler} name='email' value={formData.email}/>
                </div>

                <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>   
                    <input type="text" placeholder='Street' className='w-[100%] h-[50px] rounded-md bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] shadow-sm shadow-[#343434]' required onChange={onChangeHandler} name='street' value={formData.street}/>
                </div>

                <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'> 
                    <input type="text" placeholder='City' className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] shadow-sm shadow-[#343434]' required onChange={onChangeHandler} name='city' value={formData.city}/>
                    
                    <input type="text" placeholder='State' className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] shadow-sm shadow-[#343434]' required onChange={onChangeHandler} name='state' value={formData.state}/>
                </div> 

                <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'> 
                    <input type="number" placeholder='Pincode' className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] shadow-sm shadow-[#343434]' required onChange={onChangeHandler} name='pinCode' value={formData.pinCode}/>
                    
                    <input type="text" placeholder='Country' className='w-[48%] h-[50px] rounded-md bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] shadow-sm shadow-[#343434]' required onChange={onChangeHandler} name='country' value={formData.country}/>
                </div>

                 <div className='w-[100%] h-[70px] flex items-center justify-between px-[10px]'>   
                    <input type="tel" placeholder='Phone' maxLength={10} className='w-[100%] h-[50px] rounded-md bg-slate-700 placeholder:text-[white] text-[18px] px-[20px] shadow-sm shadow-[#343434]' required onChange={onChangeHandler} name='phone' value={formData.phone}/>
                </div>

                <div>
                    <button type='submit' className='text-[18px] active:bg-slate-500 cursor-pointer bg-[#7c07f048] py-[10px] px-[50px] rounded-2xl text-[#393636] flex items-center justify-center gap-[20px] absolute lg:right-[20%] bottom-[4%] right-[35%] border-[1px] border-[#eb11ff49] ml-[30px] mt-[20px] '>PLACE ORDER</button>
                </div>
            </form>
        </div>
        <div className='lg:w-[50%] w-[100%] min-h-[100%] flex items-center justify-center gap-[30px]'>
                <div className='lg:w-[70%] w-[90%] lg:h-[70%] h-[100%] flex items-center justify-center gap-[10px] flex-col'>
                    <CartTotal/>
                    <div className='py-[10px] mt-[-25px]'>
                    <Title text1={'PAYMENT'} text2={'METHOD'}/>
                </div>
                <div className='w-[100%] h-[30vh] lg:h-[100px] flex items-start mb-[30px] lg:mt-[0px] justify-center gap-[50px]'>
                    <button onClick={()=>setMethod('razorpay')} className={`w-[150px] h-[50px] rounded-sm ${method === 'razorpay' ? 'border-[5px] border-blue-900 rounded-sm' : '' }`}><img src={razorpay} className='w-[100%] h-[100%] object-fill rounded-sm' alt="" /></button>

                    <button onClick={()=>setMethod('cod')} className={`w-[200px] h-[50px] bg-gradient-to-l from-[#95b3f8] to-[white] text-[14px] px-[20px] rounded-sm text-[#332f6f] font-bold ${method === 'cod' ? 'border-[5px] border-blue-900 rounded-sm' : ' '}`}>CASH ON DELIVERY</button>
                </div>
                </div>
                
             </div>
      
    </div>
  )
}

export default PlaceOrder
