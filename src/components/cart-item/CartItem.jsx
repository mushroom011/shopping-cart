import { useOutletContext } from "react-router-dom";
import CardForm from "../card-form/CardForm";
import styles from "./cart-item.module.css";

const CartItem = ({ id, quantity }) => {
  const { products, removeProductFromCart, incQuantity, decQuantity } =
    useOutletContext();
  const item = products.find((product) => product.node.id === id);

  if (!item) return null;

  const total =
    parseInt(item.node.variants.edges[0].node.price.amount) * quantity;

  return (
    <div key={item.node.id} className={styles.cardHorizontal}>
      <img
        className={styles.cardImg}
        src={item.node.featuredImage.url}
        alt={item.node.title}
      />
      <div className={styles.cardText}>
        <span>{item.node.title} </span>
        <span className={styles.cardPrice}>
          <span className={styles.priceAmount}>{total}</span>{" "}
          {item.node.variants.edges[0].node.price.currencyCode}
        </span>
      </div>

      <CardForm
        quantity={quantity}
        removeProductFromCart={removeProductFromCart(item.node.id)}
        incQuantity={incQuantity(item.node.id)}
        decQuantity={decQuantity(item.node.id, quantity)}
      />
    </div>
  );
};

export default CartItem;
