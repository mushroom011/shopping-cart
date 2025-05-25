import { useState } from "react";
import NavigationBar from "../navigation-bar/NavigationBar";
import { useData } from "../../hooks/useData";
import { PRODUCTS_URL } from "../../constants";
import { ICartItem, IDataProducts } from "../../types";
import ContentView from "../content-view/ContentView";
import styles from "./app.module.css";

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
      <header className={styles.pageHeader}>
        <NavigationBar cartItemsCount={cartItemsCount} />
      </header>
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
      <footer className={styles.pageFooter}>
        <p>Copyright © Mushroom011</p>
      </footer>
    </>
  );
};

export default App;
