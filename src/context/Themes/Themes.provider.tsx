import { defaultTheme, ThemeType } from '@config/themes.config.ts';
import ThemeContext from '@context/Themes/Themes.context.tsx';
import { ReactNode, useEffect, useState } from 'react';

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemesProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>(defaultTheme);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        setTheme(storedTheme as ThemeType);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemesProvider;
