import { Outlet } from "react-router-dom";
import { IContextType } from "../../types";
import styles from "./content-loader.module.css";

interface IContentLoaderProps {
  context: IContextType;
  loading: boolean;
  error: string | null;
}

const ContentLoader = ({
  loading,
  error,
  context,
}: IContentLoaderProps) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.error("Error with products loading! ", error);
    return <div>Something went wrong 🤔</div>;
  }

  return (
    <div className={styles.pageContent}>
      <Outlet
        context={context}
      />
    </div>
  )
};

export default ContentLoader;
