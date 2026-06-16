import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCharacterStore } from "../store/use-character-store";
import { BackButton } from "../../../common/components/button/back-button";
import { FavoriteButton } from "../../favorites/components/favorite-button/favorite-button";
import styles from "./character-detail-page.module.css";

export function CharacterDetailPage() {
  const { id } = useParams();

  // Selectores atómicos
  const selectedCharacter = useCharacterStore(
    (state) => state.selectedCharacter,
  );
  const isLoading = useCharacterStore((state) => state.isLoading);
  const fetchCharacterById = useCharacterStore(
    (state) => state.fetchCharacterById,
  );

  useEffect(() => {
    fetchCharacterById(id);
  }, [id, fetchCharacterById]);

  if (isLoading) return <div className={styles.loader}>Cargando...</div>;
  if (!selectedCharacter)
    return <div className={styles.loader}>No encontrado</div>;

  return (
    <div className={styles.wrapper}>
      <BackButton />

      <article className={styles.card}>
        <img
          src={selectedCharacter.image}
          alt={selectedCharacter.name}
          className={styles.image}
        />
        <div className={styles.favContainer}>
          <FavoriteButton character={selectedCharacter} />
        </div>
        <div className={styles.info}>
          <div className={styles.header}>
            <h1>{selectedCharacter.name}</h1>
            <div className={styles.favContainer}>
              <FavoriteButton character={selectedCharacter} />
            </div>
          </div>

          <div className={styles.detailsGrid}>
            <p>
              <strong>Estado:</strong> {selectedCharacter.status}
            </p>
            <p>
              <strong>Especie:</strong> {selectedCharacter.species}
            </p>
            <p>
              <strong>Origen:</strong>{" "}
              {selectedCharacter.origin?.name || "Desconocido"}
            </p>
            <p>
              <strong>Género:</strong> {selectedCharacter.gender}
            </p>
             <p>
              <strong>Ult. Ubicación:</strong> {selectedCharacter.location?.name  || "Desconocido"}
            </p>
          </div>

          <div className={styles.detailsGrid}>
            <strong>Episodios:</strong>
            <div className={styles.episodeList}>
              <ul>
                {selectedCharacter.episode.map((url) => (
                  <li key={url} className={styles.badge}>
                    Ep {url.split("/").pop()}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
