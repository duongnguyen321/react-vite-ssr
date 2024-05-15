import { LanguageContext } from '@context/Translation/Translation.context.tsx';
import { defaultLanguage } from '@i18n';
import { type ChangeEvent, ReactNode, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type LanguageProviderProps = {
  children: ReactNode;
};
const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(defaultLanguage);

  useEffect(() => {
    const storedLang = localStorage.getItem('language');
    if (storedLang) {
      i18n.changeLanguage(storedLang);
      setLang(storedLang);
    }
  }, [i18n]);

  const languages = {
    en: { nativeName: 'English' },
    vi: { nativeName: 'Việt Nam' }
  };

  const onClickLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.currentTarget.value;
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
    setLang(newLang);
  };

  return (
    <LanguageContext.Provider
      value={{ t, i18n, onClickLanguageChange, languages, lang }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
