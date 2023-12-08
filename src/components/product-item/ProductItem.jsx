import { useOutletContext } from "react-router-dom";
import CardForm from "../card-form/CardForm";
import styles from "./product-item.module.css";

const ProductItem = ({ product, addProductToCart }) => {
  const { cartItems, removeProductFromCart, incQuantity, decQuantity } = useOutletContext();
  const item = cartItems.find((item) => item.id === product.node.id);
  const quantity = item ? item.quantity : 0;

  return (
    <div key={product.node.id} className={styles.card}>
      <img
        className={styles.cardImg}
        src={product.node.featuredImage.url}
        alt={product.node.title}
      />
      <div className={styles.cardText}>
        <span>{product.node.title}</span>
        <span className={styles.cardPrice}>
          <span className={styles.priceAmount}>
            {product.node.variants.edges[0].node.price.amount.replace(
              /\.0+$/,
              ""
            )}
          </span>{" "}
          {product.node.variants.edges[0].node.price.currencyCode}
        </span>
      </div>
      <footer className={styles.cardFooter}>
        {quantity > 0 ? (
          <CardForm
            quantity={quantity}
            removeProductFromCart={removeProductFromCart(product.node.id)}
            incQuantity={incQuantity(product.node.id)}
            decQuantity={decQuantity(product.node.id, quantity)}
          />
        ) : (
          <button onClick={addProductToCart} className={styles.btn}>
            Add to Cart
          </button>
        )}
      </footer>
    </div>
  );
};

export default ProductItem;
