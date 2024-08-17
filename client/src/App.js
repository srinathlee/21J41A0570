import './App.css';
import ProductsPage from "../src/components/products.js"
import ProductDetailView from './components/productView.js';
import Context from './context/context.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { useState } from 'react';


const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductsPage/>
  },
  {
    path: "/product/:id",
    element: <ProductDetailView/>
  },
]);

function App() {
  const [data,setData]=useState()
  return (
    <div>
      <Context.Provider value={{data,setData}}>
      <RouterProvider  router={router} />
      </Context.Provider>
    </div>
  );
}

export default App;
