import React from 'react'
import App from './App'
import LoginPage from './Components/LoginPage/LoginPage'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import firebase from './firebase/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

export default function Routes() {
    const [user, loading, error] = useAuthState(firebase.auth())
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
                <LoginPage user={user} />
            )}
        </>
    )
}
