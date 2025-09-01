import React, { useState, useContext, useEffect } from "react";
import Title from "../component/Title";
import { shopDataContext } from "../context/ShopContext";
import { authDataContext } from "../context/AuthContext";
import axios from "axios";

function Order() {
  let [orderData, setOrderData] = useState([]);
  let { currency } = useContext(shopDataContext);
  let { serverUrl } = useContext(authDataContext);

  const loadOrderData = async () => {
    try {
      const result = await axios.post(
        serverUrl + "/api/order/userorder",
        {},
        { withCredentials: true }
      );
      if (result.data) {
        let allordersItem = [];
        result.data.map((order) => {
          order.items.map((item) => {
            item["status"] = order.status;
            item["payment"] = order.payment;
            item["paymentMethod"] = order.paymentMethod;
            item["date"] = order.date;
            allordersItem.push(item);
          });
        });
        setOrderData(allordersItem.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, []);

  // Function to determine status color
  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'delivered': return 'bg-green-500';
      case 'processing': return 'bg-yellow-500';
      case 'shipped': return 'bg-blue-500';
      case 'cancelled': return 'bg-red-500';
      default: return 'bg-purple-500';
    }
  };

  return (
    <div className="min-h-screen p-6 pb-24 bg-[white]">
      <div className="max-w-6xl mx-auto mt-20 mb-10">
        <div className="text-center mb-12">
          <Title text1={"MY"} text2={"ORDERS"} />
          <p className="text-[#141414] mt-2">View your order history and track shipments</p>
        </div>
        
        {orderData.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-purple-300 text-6xl mb-4">📦</div>
            <h3 className="text-xl text-white font-medium">No orders yet</h3>
            <p className="text-purple-200 mt-2">Your orders will appear here once you make a purchase</p>
          </div>
        ) : (
          <div className="space-y-6">
            {orderData.map((item, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl overflow-hidden border border-purple-800 border-opacity-30 transition-all hover:border-opacity-60">
                <div className="p-6 flex flex-col md:flex-row gap-6">
                  <img
                    src={item.image1}
                    alt={item.name}
                    className="w-full md:w-40 h-40 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                        <div className="flex flex-wrap gap-4 mt-3">
                          <p className="text-purple-300">{currency}{item.price}</p>
                          <p className="text-purple-300">Quantity: {item.quantity}</p>
                          <p className="text-purple-300">Size: {item.size}</p>
                        </div>
                        
                        <div className="mt-4 text-sm text-purple-200">
                          <p>Ordered on: <span className="text-white ml-2">{new Date(item.date).toDateString()}</span></p>
                          <p className="mt-1">Payment Method: <span className="text-white ml-2">{item.paymentMethod}</span></p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end gap-3">
                        <div className={`inline-flex items-center px-3 py-1 rounded-full ${getStatusColor(item.status)} bg-opacity-20`}>
                          <span className={`w-2 h-2 rounded-full ${getStatusColor(item.status)} mr-2`}></span>
                          <span className="text-sm font-medium text-white capitalize">{item.status}</span>
                        </div>
                        
                        <button 
                          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm font-medium"
                          onClick={loadOrderData}
                        >
                          Track Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Order;
