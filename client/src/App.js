import './App.css';
import ProductsPage from "../src/components/products.js"
import ProductDetailView from './components/productView.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
