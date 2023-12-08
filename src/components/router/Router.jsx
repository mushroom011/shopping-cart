import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from '../app/App.jsx'
import Products from '../../pages/products/Products.jsx';
import Cart from '../../pages/cart/Cart.jsx';
import Home from '../../pages/home/Home.jsx';
import RootBoundary from '../rootBoundary/RootBoundary.jsx';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <RootBoundary />,
      children: [
        { index: true, element: <Home /> },
        { path: "products", element: <Products /> },
        { path: "cart", element: <Cart /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
