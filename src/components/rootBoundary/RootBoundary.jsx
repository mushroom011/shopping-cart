import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import styles from "./root-boundary.module.css";

const RootBoundary = () => {
  const error = useRouteError();
  let text = null;

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        text = "This page doesn't exist!";
        break;
      case 401:
        text = "You aren't authorized to see this";
        break;
      case 503:
        text = "Looks like our API is down";
        break;
      case 418:
        text = "🫖";
        break;
      default:
        text = "Something went wrong";
    }
  }

  return (
    <div className={styles.content}>
      <p>
        {text} <Link to="/">Home Page</Link> 🙂
      </p>
    </div>
  );
};

export default RootBoundary;
