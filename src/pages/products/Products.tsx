import { useOutletContext } from "react-router-dom";
import ProductItem from "../../components/product-item/ProductItem";
import { IContext } from "../../types";
import styles from "./products.module.css";

const Products = () => {
  const { products, addProductToCart } = useOutletContext<IContext>();

  return (
    <>
      <h1>Products</h1>
      <div className={styles.cards}>
        {products?.map((product) => (
          <ProductItem
            key={product.node.id}
            product={product}
            addProductToCart={addProductToCart(product.node.id, 1)}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
