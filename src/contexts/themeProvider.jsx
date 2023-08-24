import { createContext, useMemo, useState } from 'react';
import { theme as themeDict } from '../themes/Themes';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themeDict);
  const [currTheme, setCurrTheme] = useState(themeDict.currTheme);

  const contextValue = useMemo(
    () => ({
      theme,
      currTheme,
      setTheme,
      setCurrTheme,
    }),
    [theme, currTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
