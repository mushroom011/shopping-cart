import { useOutletContext } from "react-router-dom";
import CartItem from "../../components/cart-item/CartItem";
import { type ContextType } from '../../types'
import styles from "./cart.module.css";

const Cart = () => {
  const {
    cartItems,
    products,
    removeProductFromCart,
    incQuantity,
    decQuantity,
  } = useOutletContext<ContextType>();

  let totalPriceForCart = 0;
  let content = (
    <div className={styles.emptyCart}>There&apos;s nothing here yet 👻</div>
  );

  if (cartItems.length !== 0) {
    const items = cartItems.map((item) => {
      const productItem = products?.find((product) => product.node.id === item.id);

      if (!productItem) return null;

      const total = parseInt(productItem.node.variants.edges[0].node.price.amount) * item.quantity;

      totalPriceForCart += total;
      
      return (
        <CartItem
          key={item.id}
          product={productItem}
          total={total}
          quantity={item.quantity}
          removeProductFromCart={removeProductFromCart}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      );
    });

    content = (
      <>
        {items}
        <div className={styles.totalPrice}>Total Price: {totalPriceForCart} CAD</div>
        <button className={styles.btn}>Proceed to Checkout</button>
      </>
    );
  }

  return <div className={styles.cards}>{content}</div>;
};

export default Cart;
