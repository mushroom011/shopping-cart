import Collections from "../../components/collections/Collections";
import styles from "./home.module.css";

const Home = () => {
  return (
    <>
      <div className={styles.textBlock}>
        <h1>Awesom Collections</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sequi
          expedita molestias aliquid consectetur? Tenetur nisi voluptatum
          accusantium asperiores nesciunt porro, non corporis tempore, cumque
          fuga saepe modi iste voluptas.
        </p>
      </div>
      <div className={styles.content}>
        <Collections />
      </div>
    </>
  );
};

export default Home;
