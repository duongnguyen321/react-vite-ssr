//Import all translation files
import English from '@assets/translation/en.json';
import VietNam from '@assets/translation/vi.json';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: English
  },
  vi: {
    translation: VietNam
  }
};
export const defaultLanguage = 'vi';

i18next.use(initReactI18next)
  .init({
    resources,
    lng:defaultLanguage
  });

export default i18next;
