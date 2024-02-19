import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../app/App";
import Products from "../../pages/products/Products";
import Cart from "../../pages/cart/Cart";
import Home from "../../pages/home/Home";
import RootBoundary from "../rootBoundary/RootBoundary";

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
