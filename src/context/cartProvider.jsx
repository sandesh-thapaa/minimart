import { CartContext } from "./cartContext";
import { useState } from "react";

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart((prev) => [...prev,product])
    }   
    return(
        <>
        <CartContext.Provider value={{cart, addToCart}}>
        {children}
        </CartContext.Provider>
        </>
    )
}