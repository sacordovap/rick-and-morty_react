import { useNavigate } from "react-router-dom";
import styles from "./back-button.module.css";

export function BackButton() {
  const navigate = useNavigate();

  return (
    <button className={styles.backButton} onClick={() => navigate(-1)}>
      ← Volver
    </button>
  );
}