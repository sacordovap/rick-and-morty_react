import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "./pagination/pagination";
import { useCharacterStore } from "../characters/store/use-character-store";
import { FavoriteButton } from "../favorites/components/favorite-button/favorite-button";
import { CharacterCard } from "./card/character-card";
import styles from "./character-list.module.css";

export function CharacterList() {
  const { characters, info, isLoading, currentPage, fetchCharacters } =
    useCharacterStore();

  useEffect(() => {
    if (characters.length === 0) fetchCharacters(1);
  }, []);

  if (isLoading) return <p className={styles.noResults}>Cargando...</p>;

  return (
    <>
      {characters.length === 0 ? (
        <div className={styles.noResults}>No se encontraron resultados</div>
      ) : (
        <>
          <div className={styles.grid}>
            {characters.map((char) => (
              <CharacterCard key={char.id} character={char} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            hasNext={!!info?.next}
            hasPrev={!!info?.prev}
            onNext={() => fetchCharacters(currentPage + 1)}
            onPrev={() => fetchCharacters(currentPage - 1)}
          />
        </>
      )}
    </>
  );
}
