import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { shopDataContext } from "../context/ShopContext";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import RelatedProduct from "../component/RelatedProduct";
import { toast } from "react-toastify";

function ProductDetail() {
  let { productId } = useParams();
  let { products, currency, addtoCard} = useContext(shopDataContext);
  let [productData, setProductData] = useState(false);
  let [loading, setLoading] = useState(true);

  const [image, setImage] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    try {
      setLoading(true);
      let found = false;
      
      products.map((item) => {
        if (item._id === productId) {
          setProductData(item);
          setImage1(item.image1);
          setImage2(item.image2);
          setImage3(item.image3);
          setImage4(item.image4);
          setImage(item.image1);
          found = true;
          return null;
        }
      });
      
      if (!found) {
        toast.error("Product not found!");
      }
    } catch (error) {
      toast.error("Failed to load product details");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  const handleAddToCart = () => {
    if (!size) {
      toast.error("Please select a size!");
      return;
    }
    
    try {
      addtoCard(productData._id, size);
      toast.success(`${productData.name} added to cart!`);
    } catch (error) {
      toast.error("Failed to add product to cart");
      console.error(error);
    }
  };

  const handleImageChange = (newImage) => {
    setImage(newImage);
    toast.info("Image changed", { autoClose: 1000 });
  };

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <div className="text-xl">Loading product details...</div>
      </div>
    );
  }

  return productData ? (
    <div>
      <div className="w-[98.9vw] h-[130vh] md:h-[100vh] bg-[white] flex items-center justify-start flex-col lg:flex-row gap-[20px]">
        <div className="lg:w-[50vw] md:w-[90vw] lg:h-[90vh] h-[50vh] mt-[70px] flex items-center justify-center md:gap-[10px] gap-[30px] flex-col-reverse  lg:flex-row">
          <div className="lg:w[20%] md:w-[80%] h-[10%] lg:h-[90%] flex items-center justify-center gap-[50px] lg:gap-[20px] lg:flex-col flex-wrap">
            <div className="md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-purple-500 border-[1px] border-[#8710eff1] rounded-md hover:border-[#8B5CF6] transition-all duration-300">
              <img
                src={image1}
                alt=""
                className="w-[100%] h-[100%] cursor-pointer rounded-md"
                onClick={() => handleImageChange(image1)}
              />
            </div>

            <div className="md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-purple-500 border-[1px] border-[#8710eff1] rounded-md hover:border-[#8B5CF6] transition-all duration-300">
              <img
                src={image2}
                alt=""
                className="w-[100%] h-[100%] cursor-pointer rounded-md"
                onClick={() => handleImageChange(image2)}
              />
            </div>

            <div className="md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-purple-500
             border-[1px] border-[#8710eff1] rounded-md hover:border-[#8B5CF6] transition-all duration-300">
              <img
                src={image3}
                alt=""
                className="w-[100%] h-[100%] cursor-pointer rounded-md"
                onClick={() => handleImageChange(image3)}
              />
            </div>

            <div className="md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-purple-500 border-[1px] border-[#8710eff1] rounded-md hover:border-[#8B5CF6] transition-all duration-300">
              <img
                src={image4}
                alt=""
                className="w-[100%] h-[100%] cursor-pointer rounded-md"
                onClick={() => handleImageChange(image4)}
              />
            </div>
          </div>

          <div className="lg:w-[60%] w-[80%]  lg:h-[78%] h-[70%] border-[1px] border-[#8710eff1] rounded-md overflow-hidden">
            <img
              src={image}
              alt=""
              className="w-[100%] lg:h-[100%] h-[100%] text-[30px] text-black text-center rounded-md object-fill"
            />
          </div>
        </div>

        <div className="lg:w-[50vw] w-[100vw] lg:h-[75vh] h-[40vh] lg:mt-[80px] flex items-start justify-start flex-col py-[20px] px-[30px] md:pb-[20px] md:pl-[20px] lg:pl-[0px] lg:px-[0px] lg:py-[0px] gap-[10px] ">
          <h1 className="text-[40px] font-semibold text-[#0a0a0a]">
            {productData.name.toUpperCase()}
          </h1>
          <div className="flex items-center gap-1">
            <FaStar className="text-[20px] fill-[#FFD700]" />
            <FaStar className="text-[20px] fill-[#FFD700]" />
            <FaStar className="text-[20px] fill-[#FFD700]" />
            <FaStar className="text-[20px] fill-[#FFD700]" />
            <FaStarHalfAlt className="text-[20px] fill-[#FFD700]" />
            <p className="text-[18px] font-semibold pl-[5px] text-[#242323]">
              (124)
            </p>
          </div>
          <p className="text-[30px] font-semibold pl-[5px] text-[#242323]">
            {currency} {productData.price}
          </p>

          <p className="w-[80%] md:w-[60%] text-[20px] font-semibold pl-[5px] text-[#242323]">
            {productData.description}. Easy to Wash, super comfortable, and
            designed for effortless style.
          </p>
          <div className="flex flex-col gap-[10px] my-[10px] ">
            <p className="text-[25px] font-semibold pl-[5px] text-[#242323] ">
              {" "}
              Select Size
            </p>
            <div className="flex gap-2">
              {productData.sizes.map((item,index) => (
                <button 
                  key={index} 
                  className={`border py-2 px-4 rounded-md transition-all duration-300 ${
                    item === size 
                      ? 'bg-[#8B5CF6] text-white border-[#8B5CF6] font-bold' 
                      : 'bg-slate-300 text-black hover:bg-[#7C3AED] hover:text-white'
                  }`} 
                  onClick={() => {
                    setSize(item);
                    toast.info(`Size ${item} selected`, { autoClose: 1500 });
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
            <button 
                className="text-[16px] bg-[#8B5CF6] py-[10px] px-[20px] rounded-2xl mt-[10px] border-[1px] border-[#8B5CF6] text-white shadow-md shadow-black hover:bg-[#7C3AED] transition-all duration-300 font-semibold"
                onClick={handleAddToCart}
            >
              Add To Cart
            </button>
          </div>
          <div className="w-[90%] h-[1px] bg-purple-700 my-4"></div>
         
        </div>
      </div>

      <div className="w-[100%] min-h-[70vh] bg-white flex items-start justify-start flex-col overflow-x-hidden">
        <div className="flex px-[20px] mt-[90px] lg:ml-[80px] ml-[0px] lg:mt-[0px]">
            <p className="border px-5 py-3 text-sm text-[#242323] bg-[#8B5CF6] border-[#242323]">Description</p>
            <p className="border px-5 py-3 text-sm text-[#242323] border-l-0 hover:bg-[#7C3AED] transition-all duration-300 cursor-pointer">Reviews (124)</p>
        </div>
        <div className="w-[80%] md:h-[150px] h-[220px] bg-[white] border border-[#8B5CF6] text-[#242323] text-[13px] md:text-[15px] lg:text-[20px] px-[10px] md:px-[30px] lg:ml-[100px] ml-[20px] mt-5 rounded-md">
            <p className="w-[95%] h-[90%] flex items-center justify-center">Upgrade your wardrobe with this stylish slim-fit cotton shirt, available now on OneCart. Crafted from breathable, high-quality fabric, it offers all-day comfort and effortless style. Easy to maintain and perfect for any setting, this shirt is a must-have essential for those who value both fashion and function.</p>
        </div>
        <RelatedProduct category={productData.category} subCategory={productData.subCategory} currentProductId={productData._id}/>
      </div>
    </div>
  ) : (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="text-xl text-red-500">Product not found</div>
    </div>
  );
}

export default ProductDetail;
