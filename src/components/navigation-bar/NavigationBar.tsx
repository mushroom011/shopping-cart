import { Link } from "react-router-dom";
import styles from "./navigation-bar.module.css";

interface NavigationBarProps {
  cartItemsCount: number
}

const NavigationBar = ({ cartItemsCount }: NavigationBarProps) => {
  return (
    <nav className={styles.navBar}>
      <Link to="/">
        <span className={styles.logo}>Awesom Store</span>
      </Link>
      <ul className={styles.navigation}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart" className={styles.cartLink}>
            <svg
              fill="#377789"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.cartIcon}
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M8,3V7H21l-2,7H8v2H18a1,1,0,0,1,0,2H7a1,1,0,0,1-1-1V4H4A1,1,0,0,1,4,2H7A1,1,0,0,1,8,3ZM6,20.5A1.5,1.5,0,1,0,7.5,19,1.5,1.5,0,0,0,6,20.5Zm9,0A1.5,1.5,0,1,0,16.5,19,1.5,1.5,0,0,0,15,20.5Z"></path>
              </g>
            </svg>
            {cartItemsCount > 0 && (
              <span className={styles.cartCounter}>{cartItemsCount}</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
