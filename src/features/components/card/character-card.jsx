import { Link } from "react-router-dom";
import { FavoriteButton } from "../../favorites/components/favorite-button/favorite-button";
import styles from "./character-card.module.css";

export function CharacterCard({ character }) {
  return (
    <div className={styles.card}>
      <Link to={`/character/${character.id}`} className={styles.cardLink}>
        <img
          src={character.image}
          alt={character.name}
          className={styles.image}
        />
        <h3 className={styles.name}>{character.name}</h3>
        <div className={styles.details}>
          <span>{character.status}</span>
          <span>•</span>
          <span>{character.gender}</span>
        </div>
      </Link>
      <div className={styles.buttonContainer}>
        <FavoriteButton character={character} />
      </div>
    </div>
  );
}
