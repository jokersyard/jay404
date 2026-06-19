'use client';

import React, { createContext, useContext } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, toggleDarkMode, mounted] = useDarkMode();

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
