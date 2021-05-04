import React, { FC, useContext }  from "react";
import { ThemeContext } from "../../contexts/theme-context/theme-context";
import Css from "./header.module.css"

export const Header: FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  
  return (
    <div className={Css.headerContainer}>
      <h1>
        Elder Scrolls Legends {theme}
      </h1>
      <button onClick={() => setTheme( theme === "default" ? "forest" : "default")} />
    </div>
    
  )
}