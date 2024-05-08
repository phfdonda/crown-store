import { createContext, useState } from "react";

export const DropdownContext = createContext(
    {
        cartItems: false,
        setDropdownItems: () => { },
    }
)

export const DropdownProvider = ({ children }) => {

    const [isCartOpen, setIsCartOpen] = useState(false)
    const value = { isCartOpen, setIsCartOpen }

    return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>
}
