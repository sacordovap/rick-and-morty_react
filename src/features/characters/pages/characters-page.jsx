import { SearchBar } from "../../components/search-bar/search-bar";
import { CharacterList } from "../../components/character-list";
import { FilterBar } from "../../components/filter-bar/filter-bar";
import styles from "./characters-page.module.css";

export function CharactersPage() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Explora el Multiverso</h2>
      <div className={styles.controls}>
        <SearchBar />
        <FilterBar />
      </div>
      <CharacterList />
    </div>
  );
}
