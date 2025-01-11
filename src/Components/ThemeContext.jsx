
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const setModeDark = () => {
        document.body.classList.add('dark');
        setDarkMode(true);
        localStorage.theme = 'dark';
    };

    const setModeLight = () => {
        document.body.classList.remove('dark');
        setDarkMode(false);
        localStorage.theme = 'light';
    };

    useEffect(() => {
        if (localStorage.theme === 'dark') {
            setModeDark();
        } else {
            setModeLight();
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ darkMode, setModeDark, setModeLight }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

