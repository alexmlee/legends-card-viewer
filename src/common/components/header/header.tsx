import React, { FC, useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context/theme-context";
import Css from "./header.module.css";

export const Header: FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={Css.headerContainer}>
      <div className={Css.headerFill}></div>
      <h1 className={Css.header}>Elder Scrolls Legends</h1>
      <div className={Css.themeContainer}>
        <div className={Css.themeLabel}>Themes</div>
        <button
          className={theme === "default" ? `${Css.active}` : ""}
          onClick={() => setTheme("default")}
        >
          Default
        </button>
        <button
          className={theme === "forest" ? `${Css.active}` : ""}
          onClick={() => setTheme("forest")}
        >
          Forest
        </button>
        <button
          className={theme === "dark" ? `${Css.active}` : ""}
          onClick={() => setTheme("dark")}
        >
          Dark
        </button>
      </div>
    </div>
  );
};
