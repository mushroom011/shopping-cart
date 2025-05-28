import NavigationBar from "../navigation-bar/NavigationBar";
import styles from "./header.module.css";

interface IHeaderProps {
  cartItemsCount: number;
}

const Header = ({ cartItemsCount }: IHeaderProps) => {
  return (
    <header className={styles.pageHeader}>
      <NavigationBar cartItemsCount={cartItemsCount} />
    </header>
  );
};

export default Header;
