import React, { FC }  from "react";
import Css from "./header.module.css"

export const Header: FC = () => {
  return (
    <div className={Css.headerContainer}>
      <h1>
        Elder Scrolls Legends
      </h1>
    </div>
    
  )
}