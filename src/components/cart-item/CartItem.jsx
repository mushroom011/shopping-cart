import CardForm from "../card-form/CardForm";
import styles from "./cart-item.module.css";

const CartItem = ({
  item,
  total,
  quantity,
  removeProductFromCart,
  incQuantity,
  decQuantity,
}) => {

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