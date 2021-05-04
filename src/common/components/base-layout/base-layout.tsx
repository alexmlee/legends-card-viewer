import { useEffect, useState } from 'react';
import { SiteTheme, ThemeContext, ThemeNames, THEMES } from '../../contexts/theme-context/theme-context';
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
// import { themes } from '../../contexts/theme-context/theme-context';

export interface BaseLayoutProps {
  // pageInfo: PageInfo;
  children: React.ReactNode;
  // socialMetaData: SocialMetaData;
}

// export interface PageInfo {
//   title: string;
//   description: string;
// }

// export interface SocialMetaData {
//   type: string;
//   imageUrl: string;
//   twitterCard: "summary" | "summary_large_image" | undefined
// }

export const BaseLayout: React.FC<BaseLayoutProps> = ({
  // pageInfo,
  children
}: BaseLayoutProps): JSX.Element => {
  const [theme, setTheme] = useState<ThemeNames>("default")
  const initialThemeContext = { theme, setTheme}

  const setCSSVariables = (theme: ThemeNames) => {
    console.log("Flag 2    " + THEMES[theme])
    for (const value in THEMES[theme]) {
      console.log("Flag 2.1    " + value)
      console.log("Flag 2.2    " + THEMES[theme][value])
      document.documentElement.style.setProperty(`--${value}`, THEMES[theme][value])
    }
  }
  useEffect(() => {
    console.log("FLag 3     " + theme)
    setCSSVariables(theme);
  }, [theme]);

  return (
    <>
      <ThemeContext.Provider value={initialThemeContext}>
        <Header/>
        {children}
        <Footer/>
      </ThemeContext.Provider>
    </>

    
  )
}