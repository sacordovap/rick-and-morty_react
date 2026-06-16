import { Outlet } from "react-router-dom";
import { Navbar } from "../components/navbar/navbar";
import styles from "./layout.module.css";

export function Layout() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.mainContent}>
        <Outlet />
      </main>
    </div>
  );
}