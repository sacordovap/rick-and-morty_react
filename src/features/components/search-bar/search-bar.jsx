import { useEffect, useState } from "react";
import { useCharacterStore } from "../../characters/store/use-character-store";
import styles from "./search-bar.module.css";

export function SearchBar() {
  const setFilters = useCharacterStore((state) => state.setFilters);
  const currentName = useCharacterStore((state) => state.filters.name);
  const [term, setTerm] = useState(currentName);

  useEffect(() => {
    const delay = setTimeout(() => setFilters({ name: term }), 500);
    return () => clearTimeout(delay);
  }, [term]);

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Buscar personaje..."
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
    </div>
  );
}
