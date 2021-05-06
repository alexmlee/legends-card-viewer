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
    background: '#FFFFF',
    loader: 'Spin-1s-200px-default.svg',
    "text-color": "black",
    secondary: '#808080',
    tertiary: '#eeeeee',
    quaternary: '#eeeeee',
    quinary: '#eeeeee',
  },
  forest: {
    primary: "#7ea515",
    loader: 'Spin-1s-200px-forest.svg',
    background: "#55470e",
    "text-color": "black",
    secondary: "#7ea515",
    tertiary: "#141304",
    quaternary: "#241804",
    quinary: "#3f3407",
  },
  dark: {
    primary: "#006dc7",
    background: "#171616",
    "text-color": "white",
    loader: 'Spin-1s-200px-default.svg',
    secondary: "#006dc7",
    tertiary: "#141304",
    quaternary: "#241804",
    quinary: "#3f3407",
  },
}

export type ThemeNames = "default" | "forest" | "dark"

export interface ThemeContextInterface {
  theme: ThemeNames;
  setTheme: (newState: ThemeNames) => void;
}

export const ThemeContext = React.createContext<ThemeContextInterface>({
  theme: "default",
  setTheme: (newState: ThemeNames) => {},
});
