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
    primary: '#006dc7',// good
    background: '#FFFFF',
    loader: 'Spin-1s-200px-default.svg',
    "text-color": "black",
    secondary: '#eeeeee',
    tertiary: '#eeeeee',
    quaternary: '#eeeeee',
    quinary: '#eeeeee',
    // textColor
    // separatorColor
    // backgroundColor
  },
  forest: {
    primary: "#7ea515",// good
    loader: 'Spin-1s-200px-forest.svg',
    background: "#55470e",
    "text-color": "black",
    secondary: "#3f3407",
    tertiary: "#141304",
    quaternary: "#241804",
    quinary: "#3f3407",
  },
  dark: {
    primary: "#006dc7", // good
    background: "#171616", // good
    "text-color": "white",
    loader: 'Spin-1s-200px-default.svg',
    secondary: "#55470e",
    tertiary: "#141304",
    quaternary: "#241804",
    quinary: "#3f3407",
  },
}

export type ThemeNames = "default" | "forest" | "dark"

export interface ThemeContextInterface {
  theme: ThemeNames;
  // activeTheme: SiteTheme;
  setTheme: (newState: ThemeNames) => void;
}

export const ThemeContext = React.createContext<ThemeContextInterface>({
  theme: "default",
  setTheme: (newState: ThemeNames) => {},
});
