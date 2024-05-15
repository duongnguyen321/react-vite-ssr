import { i18n, type TFunction } from 'i18next';
import type { ChangeEvent } from 'react';

type LanguageContextType = {
  t: TFunction<'translation'>;
  i18n: i18n;
  // eslint-disable-next-line no-unused-vars
  onClickLanguageChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  languages: {
    en: { nativeName: string };
    vi: { nativeName: string };
  };
  lang: string;
};

export default  LanguageContextType;
