import { createContext, useState, useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null

})

export function UserProvider({ children }) {

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user);
            console.log(user)
        })
        return unsubscribe
    }, [])

    const [currentUser, setCurrentUser] = useState(null)
    const value = { currentUser, setCurrentUser }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}