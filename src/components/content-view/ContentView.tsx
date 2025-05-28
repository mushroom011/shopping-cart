import { Outlet } from "react-router-dom";
import { IContext } from "../../types";
import styles from "./content-view.module.css";
import Loader from "../loader/Loader";
import ErrorView from "../error-view/ErrorView";

interface IContentViewProps {
  context: IContext;
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
    return <ErrorView error={error}/>
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
