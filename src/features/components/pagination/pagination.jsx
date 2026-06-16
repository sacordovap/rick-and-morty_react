import { useCharacterStore } from "../../characters/store/use-character-store";
import styles from "./pagination.module.css";

export function Pagination({ currentPage, onNext, onPrev, hasNext, hasPrev }) {
  return (
    <div className={styles.pagination}>
      <button className={styles.button} disabled={!hasPrev} onClick={onPrev}>
        Anterior
      </button>
      <span className={styles.pageInfo}>Página {currentPage}</span>
      <button className={styles.button} disabled={!hasNext} onClick={onNext}>
        Siguiente
      </button>
    </div>
  );
}
