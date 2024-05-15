import { LanguageContext } from '@context/Translation/Translation.context.tsx';
import { useContext } from 'react';

const useLanguage = () => useContext(LanguageContext);


export default useLanguage;
