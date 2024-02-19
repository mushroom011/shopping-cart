import CardForm from "../card-form/CardForm";
import { IProduct } from "../../types";
import styles from "./cart-item.module.css";


interface CartItemProps {
  product: IProduct;
  total: number;
  quantity: number;
  removeProductFromCart: (id: string) => () => void;
  incQuantity: (id: string) => () => void;
  decQuantity: (id: string, quantity: number) => (() => void) | undefined;
}

const CartItem = ({
  product,
  total,
  quantity,
  removeProductFromCart,
  incQuantity,
  decQuantity,
}: CartItemProps) => {
  return (
    <div key={product.node.id} className={styles.cardHorizontal}>
      <img
        className={styles.cardImg}
        src={product.node.featuredImage.url}
        alt={product.node.title}
      />
      <div className={styles.cardText}>
        <span>{product.node.title} </span>
        <span className={styles.cardPrice}>
          <span className={styles.priceAmount}>{total}</span>{" "}
          {product.node.variants.edges[0].node.price.currencyCode}
        </span>
      </div>

      <CardForm
        quantity={quantity}
        removeProductFromCart={removeProductFromCart(product.node.id)}
        incQuantity={incQuantity(product.node.id)}
        decQuantity={decQuantity(product.node.id, quantity)}
      />
    </div>
  );
};

export default CartItem;
