import React, { useState, useEffect } from 'react'

import { signInWithGoogle, register, login } from '../../firebase/firebase'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Input from '@material-ui/core/Input'

import VpnKey from '@material-ui/icons/VpnKey'

const useStyles = makeStyles({
    container: {
        position: 'absolute',
        margin: 'auto',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: '400px',
        height: '400px',
    },
    form: {
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    question: {
        fontSize: '12px',
    },
    redirect: {
        textDecoration: 'underline',
        color: 'lightblue',
        cursor: 'pointer',
        '&:hover': {
            color: 'blue',
        },
    },
})

export default function LoginPage() {
    const [isNewUser, setIsNewUser] = useState(true)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [disabled, setDisabled] = useState(true)
    const classes = useStyles()

    useEffect(() => {
        if (password === confirm && password !== '' && password.length >= 8) {
            setDisabled(false)
        }
    }, [password, confirm])

    function handleSubmit(e) {
        e.preventDefault()
        if (isNewUser) {
            register(username, email, password)
                .then((x) => {
                    console.log(x.user.displayName)
                })
                .catch(console.log)
        } else {
            login(email, password)
        }
    }

    return (
        <div className={classes.container}>
            {isNewUser ? (
                <form className={classes.form} onSubmit={handleSubmit}>
                    Sign In
                    <TextField
                        type="name"
                        label="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <TextField
                        type="email"
                        label="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <TextField
                        type="password"
                        label="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <TextField
                        type="password"
                        label="Confirm Password"
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                        required
                    />
                    <Button type="submit" disabled={disabled}>
                        Submit
                    </Button>
                    <span className={classes.question}>
                        Already have an account?{' '}
                        <span
                            className={classes.redirect}
                            onClick={() => setIsNewUser(false)}
                        >
                            Sign In
                        </span>
                    </span>
                </form>
            ) : (
                <form className={classes.form} onSubmit={handleSubmit}>
                    Sign Up
                    <TextField
                        type="email"
                        label="Email Address"
                        value={email}
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
                        required
                    />
                    <Button type="submit" disabled={disabled}>
                        Submit
                    </Button>
                    <span className={classes.question}>
                        Dont have an account?{' '}
                        <span
                            className={classes.redirect}
                            onClick={() => setIsNewUser(true)}
                        >
                            Sign Up
                        </span>
                    </span>
                </form>
            )}
        </div>
    )
}
