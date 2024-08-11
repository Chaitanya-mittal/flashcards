import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import styles from "./AppLayout.module.css";
function AppLayout() {
  return (
    <section className={styles.appLayout}>
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </section>
  );
}

export default AppLayout;
