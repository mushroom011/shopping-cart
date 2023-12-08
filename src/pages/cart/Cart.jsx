import { useOutletContext } from "react-router-dom";
import CartItem from "../../components/cart-item/CartItem";
import styles from "./cart.module.css";

const Cart = () => {
  const {cartItems} = useOutletContext();

  return (
    <div className={styles.cards}>
      {cartItems.length === 0 ? (
        <div className={styles.emptyCart}>There&apos;s nothing here yet 👻</div>
      ) : (
        cartItems.map((item) => <CartItem key={item.id} {...item} />)
      )}
    </div>
  );
};

export default Cart;
