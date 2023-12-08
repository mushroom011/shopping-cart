import styles from "./card-form.module.css";

const CardForm = ({
  quantity,
  removeProductFromCart,
  incQuantity,
  decQuantity
}) => {
  return (
    <div className={styles.cardForm}>
      <button className={styles.btn} onClick={decQuantity}>
        -
      </button>
      <span className={styles.quantity}>{quantity}</span>
      <button className={styles.btn} onClick={incQuantity}>
        +
      </button>
      <button onClick={removeProductFromCart} className={`${styles.btn} ${styles.btnRemove}`}>
        x
      </button>
    </div>
  );
};

export default CardForm;
