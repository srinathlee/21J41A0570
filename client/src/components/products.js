import {React,useEffect,useState} from 'react';
import ProductCard from './product';
import axios from "axios"

// Example product data
const products = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is a great product.',
    price: '$29.99',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is another great product.',
    price: '$39.99',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Product 3',
    description: 'You will love this product.',
    price: '$49.99',
    image: 'https://via.placeholder.com/150'
  },
];


const ProductPage = async() => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/');
        // setData(response); 
        // setLoading(false); 
        console.log(response)
      } catch (err) {
        // console.log(err)
        // setLoading(false); 
        console.log(err)
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))} */}
      </div>
    </div>
  );
};

export default ProductPage;
