import { ThemeSwitcher } from "../ThemeSwitcher";
import styles from "./TheHeader.module.scss";

export const TheHeader = () => (
  <div className={styles.header}>
    <div className={styles.logo}>Developer Search</div>
    <ThemeSwitcher />
  </div>
);
