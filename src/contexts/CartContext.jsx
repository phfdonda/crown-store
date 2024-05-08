import { createContext, useState } from "react";

export const CartContext = createContext(
    {
        cartItems: {},
        setCartItems: () => { },
    }
)

export const CartProvider = ({ children }) => {
    const mockCartItems = {
        1: 2,
        4: 1
    }
    // cartItems is an object that connects the product ID do the number of items added, like so: {id: number}
    const [cartItems, setCartItems] = useState(mockCartItems)
    const value = { cartItems, setCartItems }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}