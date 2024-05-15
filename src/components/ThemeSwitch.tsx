import useTheme from '@hooks/useTheme.tsx';
import { themes } from '@config/themes.config.ts';
import { ChangeEvent } from 'react';

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as any);
  };

  return (
    <select value={theme} onChange={handleChange}>
      {themes.map((themeOption) => (
        <option key={themeOption} value={themeOption}>
          {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
        </option>
      ))}
    </select>
  );
};

export default ThemeSwitch;
