import React, { useState, createContext, useEffect, useContext } from 'react'
import { auth } from './firebase/firebase'
import { register} from './firebase/firebase'

const UserContext = createContext({ user: '' })

function UserProvider({ children }) {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setLoading(true)
            if (user) {
                if (user.displayName) {
                    
                    setUser(user)
                    setLoading(false)
                } else {
                }
            } else{
                setUser(user)
                setLoading(false)
            }
        })
        
        return unsubscribe
    }, [])

    function emailSignUp(email, password, username) {
    
        return register(email, password, username).then((user) => {
            setUser(user)
            setLoading(false)
            return null
        }).catch(e => e)
        
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
