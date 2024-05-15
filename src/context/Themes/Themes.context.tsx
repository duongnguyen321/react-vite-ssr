import { defaultTheme } from '@config/themes.config.ts';
import type ThemeContextType from '@context/Themes/interface/ThemeContextType.ts';
import { createContext } from 'react';


const defaultValue: ThemeContextType = {
  theme: defaultTheme,
  setTheme: () => {
  }
};
const ThemesContext = createContext<ThemeContextType>(defaultValue);

export default ThemesContext;
