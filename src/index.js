import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Routes from './Router'
import * as serviceWorker from './serviceWorker'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { UserProvider } from './useAuth'
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#1da1f2',
        },
        secondary: {
            main: '#fffffff',
        },
        typography: {
            fontFamily: 'Helvetica Nueu',
            button: {
                letterSpacing: '1em',
            },
        },
        overrides: {
            containedPrimary: {
                text: {
                    color: 'white',
                },
            },
        },
    },
})

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <UserProvider>
                <Routes />
            </UserProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
