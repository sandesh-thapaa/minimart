import { ThemeContext } from "./themeContext";
import { useState } from "react";

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
        setTheme(theme == 'light'? 'dark': 'light');
    }   
    return(
        <>
        <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
        </ThemeContext.Provider>
        </>
    )
}