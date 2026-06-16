import { useCharacterStore } from "../../characters/store/use-character-store";
import { CustomSelect } from "./custom-select";
import styles from "./filter-bar.module.css";
export function FilterBar() {
  const { setFilters, filters } = useCharacterStore();

  return (
    <div className={styles.filterBar}>
      <CustomSelect
        value={filters.status}
        onChange={(val) => setFilters({ status: val })}
        placeholder="Cualquier estado"
        options={[
          { value: "alive", label: "Alive" },
          { value: "dead", label: "Dead" },
          { value: "unknown", label: "Unknown" },
        ]}
      />

      <CustomSelect
        value={filters.gender}
        onChange={(val) => setFilters({ gender: val })}
        placeholder="Cualquier género"
        options={[
          { value: "female", label: "Female" },
          { value: "male", label: "Male" },
          { value: "genderless", label: "Genderless" },
          { value: "unknown", label: "Unknown" },
        ]}
      />
    </div>
  );
}
