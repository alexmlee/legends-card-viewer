import { useEffect, useState } from "react";
import {
  ThemeContext,
  ThemeNames,
  THEMES,
} from "../../contexts/theme-context/theme-context";
import { Footer } from "../footer/footer";
import { Header } from "../header/header";
import { PageMetaData } from "../page-metadata/page-metadata";

export interface BaseLayoutProps {
  pageInfo: PageInfo;
  children: React.ReactNode;
  socialMetaData: SocialMetaData;
}

export interface PageInfo {
  title: string;
  description: string;
  canonicalUrl: string;
}

export interface SocialMetaData {
  type: string;
  imageUrl: string;
  twitterCard: "summary" | "summary_large_image" | undefined;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({
  pageInfo,
  socialMetaData,
  children,
}: BaseLayoutProps): JSX.Element => {
  const [theme, setTheme] = useState<ThemeNames>("default");
  const initialThemeContext = { theme, setTheme };

  const setCSSVariables = (theme: ThemeNames) => {
    for (const value in THEMES[theme]) {
      document.documentElement.style.setProperty(
        `--${value}`,
        THEMES[theme][value]
      );
    }
  };
  useEffect(() => {
    setCSSVariables(theme);
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={initialThemeContext}>
        <PageMetaData pageInfo={pageInfo} socialMetaData={socialMetaData} />
        <Header />
        {children}
        <Footer />
      </ThemeContext.Provider>
    </>
  );
};
