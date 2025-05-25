import { Outlet } from "react-router-dom";
import { IContextType } from "../../types";
import styles from "./content-view.module.css";
import Loader from "../loader/Loader";

interface IContentViewProps {
  context: IContextType;
  loading: boolean;
  error: string | null;
}

const ContentView = ({
  loading,
  error,
  context,
}: IContentViewProps) => {
  if (loading) {
    return <Loader/>;
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

export default ContentView;
