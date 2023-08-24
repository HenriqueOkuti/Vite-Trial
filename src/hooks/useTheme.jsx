import { useContext } from 'react';
import { themeInverter } from '@utils/themeInverter';
import { ThemeContext } from '@contexts/themeProvider';

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export function useSetTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeSwitcher must be used within a ThemeProvider');
  }

  const toggleTheme = () => {
    context.setTheme(themeInverter(context.theme));
    context.setCurrTheme(context.theme.altTheme);
  };

  return { toggleTheme };
}
