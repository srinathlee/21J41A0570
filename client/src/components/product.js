import laptop from "../assets/laptop.jpg"
import {Link} from"react-router-dom"
import { useContext } from "react";
import Context from "../context/context";
import { useNavigate } from "react-router-dom";


const ProductCard = ({ product }) => {
  const navigate=useNavigate()
  const {setData}=useContext(Context)
    return (
     <div onClick={()=>{setData({product});navigate(`/product/${product.productName}`)}} >
      <div className="bg-white border rounded-lg shadow-md overflow-hidden">
        <img className="w-full h-48 object-cover" src={laptop} alt={product.name} />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{product.productName}</h2>
          <div className=" grid grid-cols-2">
          <p className="text-gray-600 mb-4"><span className="font-bold">Price : </span>{product.price}</p>
          <p className="text-gray-600 mb-4"><span className="font-bold">Rating : </span>{product.rating}</p>
          <p className="text-gray-600 mb-4"><span  className="font-bold">Discount : </span>{product.discount}</p>
          <p className="text-gray-600 mb-4"><span  className="font-bold">Availability : </span>{product.availability}</p>
          </div>
         
        </div>
      </div>
   </div>
    );
  };
  

  export default ProductCard