import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../navigation-bar/NavigationBar";
import { useData } from "../../hooks/useData";
import { PRODUCTS_URL } from "../../constants";
import styles from "./app.module.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const cartItemsCount = cartItems.reduce(
    (prev, curr) => prev + curr.quantity,
    0
  );

  const { data, error, loading } = useData(PRODUCTS_URL);

  const addProductToCart = (id, quantity) => () => {
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

  const decQuantity = (id, prevQuantity) => {
    if (prevQuantity === 1) return;
    return addProductToCart(id, -1);
  };

  const incQuantity = (id) => addProductToCart(id, 1);

  const removeProductFromCart = (id) => () => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  let content = null;

  if (loading) {
    content = <div>Loading...</div>;
  } else if (error) {
    content = <div>Something went wrong 🤔</div>;
    console.error("Error with products loading! ", error);
  } else {
    content = (
      <Outlet
        context={{
          products: data.products.edges,
          cartItems,
          addProductToCart,
          removeProductFromCart,
          incQuantity,
          decQuantity,
        }}
      />
    );
  }

  return (
    <>
      <header className={styles.pageHeader}>
        <NavigationBar cartItemsCount={cartItemsCount} />
      </header>
      <div className={styles.pageContent}>{content}</div>
      <footer className={styles.pageFooter}>
        <p>Copyright © Mushroom011</p>
      </footer>
    </>
  );
};

export default App;
