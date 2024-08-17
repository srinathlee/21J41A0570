const ProductCard = ({ product }) => {
    return (
      <div className="bg-white border rounded-lg shadow-md overflow-hidden">
        <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">{product.price}</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  };
  

  export default ProductCard