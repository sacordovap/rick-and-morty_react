import { Link } from "react-router-dom";
import { useFavoriteStore } from "../store/use-favorite-store";
import { FavoriteButton } from "../components/favorite-button/favorite-button";
import { BackButton } from "../../../common/components/button/back-button";
import { CharacterCard } from "../../components/card/character-card";
import styles from "./favorites-page.module.css";

export function FavoritesPage() {
  const { favorites } = useFavoriteStore();

  return (
    <div className={styles.container}>
      <BackButton />
      <h1>Mis Favoritos</h1>
      {favorites.length === 0 ? (
        <p>No tienes favoritos todavía.</p>
      ) : (
        <div className={styles.grid}>
          {favorites.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))}
        </div>
      )}
    </div>
  );
}
