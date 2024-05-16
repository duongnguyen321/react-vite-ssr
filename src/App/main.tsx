import LangSwitch from '@components/LangSwitch.tsx';
import ThemeSwitch from '@components/ThemeSwitch.tsx';
import ThemesProvider from '@context/Themes/Themes.provider.tsx';
import LanguageProvider from '@context/Translation/Translation.provider.tsx';
import { MainRouters } from '@router/routers.tsx';
import { StrictMode } from 'react';


function Main(): JSX.Element {

  return (
    <StrictMode>
      <LanguageProvider>
        <ThemesProvider>
          <LangSwitch />
          <ThemeSwitch />
          <MainRouters />
        </ThemesProvider>
      </LanguageProvider>
    </StrictMode>
  );
}

export default Main;
