import React, {useContext, useState, useEffect}from 'react'
import {  } from './firebase/firebase';
import { useAuth  } from 'react-firebase-hooks';
const useUser = React.createContext('')

export  function UserProvider() {
    const [user, loading, error] = useAuth()
    const userContext = useContext()
    
    return (
        <div>
            
        </div>
    )
}
