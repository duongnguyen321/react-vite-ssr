import type LanguageContextType from '@context/Translation/interface/LanguageContextType.ts';
import { defaultLanguage } from '@i18n';
import { i18n } from 'i18next';
import { createContext } from 'react';

const defaultValue: LanguageContextType = {
  // @ts-expect-error @ts-ignore
  t: () => '',
  i18n: {} as i18n,
  onClickLanguageChange: () => {
  },
  languages: {
    en: { nativeName: 'English' },
    vi: { nativeName: 'VietNam' }
  },
  lang: defaultLanguage

};

export const LanguageContext = createContext<LanguageContextType>(defaultValue);

