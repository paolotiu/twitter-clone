import React, { useState, useEffect } from 'react'
import { useAuth } from '../../useAuth'
import { login } from '../../firebase/firebase'
import { makeStyles } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faTwitter } from '@fortawesome/free-brands-svg-icons'

import Button from '@material-ui/core/Button'

import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles({
    container: {
        marginTop: '50px',
    },
    form: {
        display: 'flex',
        height: '100%',
        width: '40%',
        margin: 'auto',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    question: {
        fontSize: '12px',
    },
    redirect: {
        textDecoration: 'underline',
        color: '#1da1f2',
        cursor: 'pointer',
        '&:hover': {
            color: 'blue',
        },
    },
    submit: {
        fontSize: '16px',
        color: 'white',
        background: '#1da1f2',
        outline: 'none',
        width: '100%',
        fontWeight: 700,
        borderRadius: '1000px',
        height: '40px',
        border: 'none',
        margin: '10px 5px',
    },
    error: {
        fontSize: '13px',
        color: 'red',
    },
})

export default function LoginPage() {
    const [isNewUser, setIsNewUser] = useState(true)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [disabled, setDisabled] = useState(true)
    const [error, setError] = useState('')
    const { emailSignUp } = useAuth()
    const classes = useStyles()

    function handleSubmit(e) {
        e.preventDefault()
        if (password === confirm && password !== '' && password.length >= 8) {
            if (isNewUser) {
                emailSignUp(email, password, username).catch((e) =>
                    setError(e.message)
                )
            } else {
                login(email, password).catch((e) => {
                    setError(e.message)
                })
            }
        } else {
            setError('Passwords must be the same')
        }
    }

    return (
        <div className={classes.container}>
            {isNewUser ? (
                <form className={classes.form} onSubmit={handleSubmit}>
                    <FontAwesomeIcon
                        icon={faTwitter}
                        color="#1da1f2"
                        size="2x"
                    />
                    <span
                        style={{
                            fontWeight: 700,
                            fontSize: '20px',
                            margin: '20px 0',
                        }}
                    >
                        Create An Account
                    </span>
                    <TextField
                        type="name"
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        variant="outlined"
                        margin="normal"
                        fullWidth={true}
                        required
                    />
                    <TextField
                        type="email"
                        label="Email Address"
                        value={email}
                        variant="outlined"
                        margin="normal"
                        fullWidth={true}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <TextField
                        type="password"
                        label="Password"
                        value={password}
                        variant="outlined"
                        margin="normal"
                        fullWidth={true}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <TextField
                        type="password"
                        label="Confirm Password"
                        value={confirm}
                        variant="outlined"
                        margin="normal"
                        fullWidth={true}
                        onChange={(e) => setConfirm(e.target.value)}
                        required
                    />
                    {error !== '' ? (
                        <span className={classes.error}>{error} </span>
                    ) : null}
                    <button type="submit" className={classes.submit}>
                        Signup
                    </button>
                    <span className={classes.question}>
                        Already have an account?{' '}
                        <span
                            className={classes.redirect}
                            onClick={() => {
                                setIsNewUser(false)
                                setError('')
                            }}
                        >
                            Log In
                        </span>
                    </span>
                </form>
            ) : (
                <form className={classes.form} onSubmit={handleSubmit}>
                    <FontAwesomeIcon
                        icon={faTwitter}
                        color="#1da1f2"
                        size="2x"
                    />
                    <span
                        style={{
                            fontWeight: 700,
                            fontSize: '20px',
                            margin: '20px 0',
                        }}
                    >
                        Log In
                    </span>
                    <TextField
                        fullWidth={true}
                        type="email"
                        label="Email Address"
                        value={email}
                        variant="outlined"
                        margin="normal"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <TextField
                        type="password"
                        label="Password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                            setConfirm(e.target.value)
                        }}
                        variant="outlined"
                        margin="normal"
                        fullWidth={true}
                        required
                    />
                    {error !== '' ? (
                        <span className={classes.error}> {error}</span>
                    ) : null}
                    <button type="submit" className={classes.submit}>
                        Log In
                    </button>
                    <span className={classes.question}>
                        Dont have an account?{' '}
                        <span
                            className={classes.redirect}
                            onClick={() => {
                                setIsNewUser(true)
                                setError('')
                            }}
                        >
                            Sign Up
                        </span>
                    </span>
                </form>
            )}
        </div>
    )
}
