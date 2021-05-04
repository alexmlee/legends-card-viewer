import React from "react";

export interface SiteTheme {
  primary: string;
  secondary: string;
  tertiary: string;
  quaternary: string;
  quinary: string;
}

export interface SiteThemes {
  [x: string]: SiteTheme
}

export const themes: SiteThemes = {
  default: {
    primary: '#000000',
    secondary: '#eeeeee',
    tertiary: '#eeeeee',
    quaternary: '#eeeeee',
    quinary: '#eeeeee',
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

export enum ThemeNames { "default", "forest", "dark"}

export const ThemeContext = React.createContext({
  theme: "default",
  setTheme: (newState: "string") => {},
});
