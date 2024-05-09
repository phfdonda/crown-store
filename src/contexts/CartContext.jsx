import { createContext, useState } from "react";

export const CartContext = createContext(
    {
        cartItems: {},
        setCartItems: () => { },
    }
)

export const CartProvider = ({ children }) => {

    // cartItems is an object that connects the product ID do the number of items added, like so: {id: number}
    const [cartItems, setCartItems] = useState({})

    const addItem = (id) => {
        let quantity = 0
        if (cartItems[id]) quantity = cartItems[id]
        quantity += 1
        setCartItems({ ...cartItems, [id]: quantity })
    }


    const value = { cartItems, setCartItems, addItem }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
