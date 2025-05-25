import { useData } from "../../hooks/useData";
import { COLLECTIONS_URL } from "../../constants";
import { Link } from "react-router-dom";
import { IDataCollections } from "../../types";
import styles from "./collections.module.css";
import Loader from "../loader/Loader";
import ErrorView from "../error-view/ErrorView";

const Collections = () => {
  const { data, error, loading } = useData<IDataCollections>(COLLECTIONS_URL);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorView error={error}/>
  }

  return data?.collections.edges.map((collection) => {
    return (
      <div key={collection.node.id} className={styles.collectionCard}>
        <Link to="/products" key={collection.node.id}>
          <img src={collection.node.image.url} alt={collection.node.title} />
          <p className={styles.cardText}>{collection.node.title}</p>
        </Link>
      </div>
    );
  });
};

export default Collections;
