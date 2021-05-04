import React from "react";

export interface SiteTheme {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
  quinary: string;
  [x: string]: string;
}

export type SiteThemes = {
  [x in ThemeNames]: SiteTheme;
};

export const THEMES: SiteThemes = {
  default: {
    primary: '#006dc7',
    secondary: '#eeeeee',
    tertiary: '#eeeeee',
    quaternary: '#eeeeee',
    quinary: '#eeeeee',
    // textColor
    // separatorColor
    // backgroundColor
  },
  forest: {
    primary: "#7ea515",
    secondary: "#55470e",
    tertiary: "#141304",
    quaternary: "#241804",
    quinary: "#3f3407",
  },
  dark: {
    primary: "#7ea515",
    secondary: "#55470e",
    tertiary: "#141304",
    quaternary: "#241804",
    quinary: "#3f3407",
  },
}

export type ThemeNames = "default" | "forest" | "dark"

export const ThemeContext = React.createContext({
  theme: "default",
  setTheme: (newState: ThemeNames) => {},
});
