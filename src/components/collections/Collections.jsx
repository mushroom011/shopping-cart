import { useData } from "../../hooks/useData";
import { COLLECTIONS_URL } from "../../constants";
import styles from "./collections.module.css";

const Collections = () => {
  const { data, error, loading } = useData(COLLECTIONS_URL);

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    console.error("Error with collections loading! ", error);
    return <div>Something went wrong 🤔</div>;
  } else {
    return data.collections.edges.map((collection) => {
      return (
        <div key={collection.node.id} className={styles.collectionCard}>
          <img
            src={collection.node.image.url}
            alt={collection.node.title}
          />
          <p className={styles.cardText}>{collection.node.title}</p>
        </div>
      );
    });
  }
};

export default Collections;
