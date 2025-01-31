import { useEffect, useState } from 'react';

export default function useDarkSide() {
  const localSetTheme = typeof window !== 'undefined' && window.localStorage && localStorage.theme
  const [theme, setTheme] = useState(localSetTheme);
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    if (typeof window !== 'undefined' && window.localStorage) { 
    // save theme to local storage
    localStorage.setItem('theme', theme);
    }
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
};
