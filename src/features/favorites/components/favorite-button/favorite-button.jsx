import { useFavoriteStore } from "../../store/use-favorite-store";
import styles from "./favorite-button.module.css";

export function FavoriteButton({ character }) {
  const { favorites, toggleFavorite } = useFavoriteStore();
  const isFavorite = favorites.some((fav) => fav.id === character.id);

  return (
    <button
      className={`${styles.button} ${isFavorite ? styles.active : ""}`}
      onClick={(e) => {
        e.preventDefault();
        toggleFavorite(character);
      }}
    >
      {isFavorite ? "★" : "☆"}
    </button>
  );
}
