import { useState } from 'react';
import { ThemeContext } from '../../contexts/theme-context/theme-context';
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
  const [theme, setTheme] = useState("default")
  const initialThemeContext = { theme, setTheme}

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