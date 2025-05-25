import styles from "./error.module.css";

interface IErrorViewProps {
  error: string | null;
}

const ErrorView = ({ error }: IErrorViewProps) => {
  console.error("Error with collections loading! ", error);
  return (
    <div className={styles.pageContent}>
      <h1>Something went wrong 🤔</h1>
    </div>
  );
};

export default ErrorView;
