import { CartContext } from "./themeContext";
import { useState } from "react";

export const Provider = ({children}) => {
    const [cartItems, setCartItems] = useState('');
    const addToCart = (product) => {
        setCartItems()
    }   
    return(
        <>
        <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
        </ThemeContext.Provider>
        </>
    )
}