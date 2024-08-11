import styles from "./Landing.module.css";
import { Link } from "react-router-dom";
function Landing() {
  return (
    <div className={styles.box}>
      <h1>Sign In As</h1>
      <div className="buttonBox">
        <Link to="/user" className="btn2">
          User
        </Link>
        <Link to="/admin" className="btn">
          Admin
        </Link>
      </div>
    </div>
  );
}

export default Landing;
