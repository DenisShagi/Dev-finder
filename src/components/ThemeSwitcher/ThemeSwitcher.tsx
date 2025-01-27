import { useState, useEffect } from "react";

import MoonIconSrc from "../../assets/icon-moon.svg";
import SunIconSrc from "../../assets/icon-sun.svg";
import styles from "./ThemeSwitcher.module.scss";
export const ThemeSwitcher = () => {
  const [isDark, setDark] = useState(false);
  const themeText = isDark ? "Dark" : "Light";
  const ThemeIconSrc = isDark ?  MoonIconSrc : SunIconSrc;

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className={styles.switcher} onClick={() => setDark(!isDark)}>
      <span>{themeText}</span>
      <img src={ThemeIconSrc} alt={themeText} className={styles.icon} />
    </div>
  );
};
