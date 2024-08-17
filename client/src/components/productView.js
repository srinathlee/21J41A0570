import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import laptop from "../assets/laptop.jpg"

import Context from '../context/context';

const ProductDetailView=()=>{
    const {data}=useContext(Context)
    console.log(data)
    return(
        <div className="bg-white border rounded-lg shadow-md overflow-hidden">
        <img className="w-full h-[70vh] object-cover" src={laptop} alt={data.name} />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{data.productName}</h2>
          <div className=" grid grid-cols-2">
          <p className="text-gray-600 mb-4"><span className="font-bold">Price : </span>{data.product.price}</p>
          <p className="text-gray-600 mb-4"><span className="font-bold">Rating : </span>{data.product.rating}</p>
          <p className="text-gray-600 mb-4"><span  className="font-bold">Discount : </span>{data.product.discount}</p>
          <p className="text-gray-600 mb-4"><span  className="font-bold">Availability : </span>{data.product.availability}</p>
          </div>
         
        </div>
      </div>
    )
}
export default ProductDetailView