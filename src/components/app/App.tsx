import { useState } from "react";
import { useData } from "../../hooks/useData";
import { PRODUCTS_URL } from "../../constants";
import { ICartItem, IDataProducts } from "../../types";
import Header from "../header/Header";
import ContentView from "../content-view/ContentView";
import Footer from "../footer/Footer";

const App = () => {
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  const cartItemsCount = cartItems.reduce(
    (prev, curr) => prev + curr.quantity,
    0
  );

  const { data, error, loading } = useData<IDataProducts>(PRODUCTS_URL);

  const addProductToCart = (id: string, quantity: number) => () => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.id === id);
      if (itemIndex !== -1) {
        return [
          ...prevItems.slice(0, itemIndex),
          {
            ...prevItems[itemIndex],
            quantity: prevItems[itemIndex].quantity + quantity,
          },
          ...prevItems.slice(itemIndex + 1),
        ];
      }
      return [...prevItems, { id, quantity }];
    });
  };

  const decQuantity = (id: string, prevQuantity: number) => {
    if (prevQuantity === 1) {
      return removeProductFromCart(id);
    }
    return addProductToCart(id, -1);
  };

  const incQuantity = (id: string) => addProductToCart(id, 1);

  const removeProductFromCart = (id: string) => () => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header cartItemsCount={cartItemsCount}/>
      <ContentView
        error={error}
        loading={loading}
        context={{
          products: data?.products.edges,
          cartItems,
          addProductToCart,
          removeProductFromCart,
          incQuantity,
          decQuantity,
        }}
      />
      <Footer/>
    </>
  );
};

export default App;
