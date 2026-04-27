import { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    const darkThemeVars = {
        '--primary-color': '#e0e0e0',
        '--secondary-color': '#64b5f6',
        '--accent-color': '#ffb74d',
        '--bg-color': '#121212',
        '--text-color': '#e0e0e0',
        '--header-footer-bg': '#1e1e1e',
        '--border-color': '#333',
        '--card-bg': '#2a2a2a'
    };

    const appStyle = isDarkMode ? { ...darkThemeVars } : {};

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme, appStyle }}>
            {children}
        </ThemeContext.Provider>
    );
}
