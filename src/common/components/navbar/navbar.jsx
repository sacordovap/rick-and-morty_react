import { Link } from "react-router-dom";
import { useFavoriteStore } from "../../../features/favorites/store/use-favorite-store";
import styles from "./navbar.module.css";

export function Navbar() {
  const { favorites } = useFavoriteStore();
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>RICK AND MORTY</div>
      <div className={styles.links}>
        <Link className={styles.link} to="/">
          Home
        </Link>
        <Link className={styles.link} to="/">
          Personajes
        </Link>
        <Link className={styles.link} to="/favorites">
          Favoritos
          {favorites.length > 0 && (
            <span className={styles.badge}>{favorites.length}</span>
          )}
        </Link>
      </div>
    </nav>
  );
}
