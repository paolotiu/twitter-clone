import React from 'react'
import App from './App'
import LoginPage from './Components/LoginPage/LoginPage'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import firebase from './firebase/firebase'
import { useAuth } from './useAuth'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Routes() {
    const { user, loading } = useAuth()

    return (
        <>
            {loading ? (
                <FontAwesomeIcon
                    icon={faTwitter}
                    color="#1da1f2"
                    size="6x"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                />
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
