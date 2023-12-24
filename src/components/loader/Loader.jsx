import "./Loader.css";
import { Oval } from "react-loader-spinner";
const Loader = () => (
  <div className="loader_container">
    <Oval
      visible={true}
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  </div>
);
export default Loader;
