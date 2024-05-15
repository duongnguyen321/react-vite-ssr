import useLanguage from '@hooks/useLanguage.tsx';
import { ChangeEvent } from 'react';

const LangSwitch = () => {
  const { languages, onClickLanguageChange, lang } = useLanguage();
  return (
    <select
      style={{
        width: 200,
        height: '40px'
      }}
      value={lang}
      onChange={(e: ChangeEvent<HTMLSelectElement>) => onClickLanguageChange(e)}
    >
      {Object.keys(languages).map((lng) => (
        <option key={languages[lng as keyof typeof languages].nativeName} value={lng}>
          {languages[lng as keyof typeof languages].nativeName}
        </option>
      ))}
    </select>
  );
};

export default LangSwitch;
