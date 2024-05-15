export const themes = ['light', 'dark', 'red', 'blue', 'green'] as const;
export type ThemeType = typeof themes[number];
export const defaultTheme: ThemeType = 'light';
