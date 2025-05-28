import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import styles from "./root-boundary.module.css";

const getErrorText = (error: unknown) => {
  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        return "This page doesn't exist!";
      case 401:
        return "You aren't authorized to see this";
      case 503:
        return "Looks like our API is down";
      case 418:
        return "🫖";
      default:
        return "Something went wrong";
    }
  }
}

const RootBoundary = () => {
  const error = useRouteError();

  return (
    <div className={styles.content}>
      <p>
        {getErrorText(error)} <Link to="/">Home Page</Link> 🙂
      </p>
    </div>
  );
};

export default RootBoundary;
