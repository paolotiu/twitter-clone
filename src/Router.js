import React from 'react'
import App from './App'
import LoginPage from './Components/LoginPage/LoginPage'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import firebase from './firebase/firebase'
import { useAuth } from './useAuth'

export default function Routes() {
    const { user, loading } = useAuth()

    return (
        <>
            {loading ? (
                'Loading'
            ) : user ? (
                <Router>
                    <Switch>
                        <Route path="/">
                            <App />
                        </Route>
                    </Switch>
                </Router>
            ) : (
                <LoginPage />
            )}
        </>
    )
}
