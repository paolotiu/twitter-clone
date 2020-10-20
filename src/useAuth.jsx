import React, { useState, createContext, useEffect, useContext } from 'react'
import { auth } from './firebase/firebase'
import { register} from './firebase/firebase'

const UserContext = createContext({ user: '' })

function UserProvider({ children }) {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                if (user.displayName) {
                    
                    setUser(user)
                    setLoading(false)
                } else {
                }
            } 
        })

        return unsubscribe
    }, [])

    async function emailSignUp(email, password, username) {
        let returnVal;
        await register(email, password, username).then((user) => {
            
            setUser(user)
            setLoading(false)
            returnVal = user
        }).catch(e => {returnVal = e})
        return Promise.reject(returnVal)
    }

    const value = {
        user,
        setUser,
        emailSignUp,
        loading
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useAuth() {
    return useContext(UserContext)
}

export {
    UserProvider
}
