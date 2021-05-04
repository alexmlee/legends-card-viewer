import React, { FC, useContext }  from "react";
import { ThemeContext } from "../../contexts/theme-context/theme-context";
import Css from "./header.module.css"

export const Header: FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  
  return (
    <div className={Css.headerContainer}>
      <h1 className={Css.header}>
        Elder Scrolls Legends {theme}
      </h1>
      <button onClick={() => setTheme( "default")} > Default</button>
      <button onClick={() => setTheme( "forest")} > Forest</button>
      <button onClick={() => setTheme( "dark")} > Dark</button>
    </div>
    
  )
}