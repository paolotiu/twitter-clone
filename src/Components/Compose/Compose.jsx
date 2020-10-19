import React from 'react'
import firebase from '../../firebase/firebase'
import {useAuthState} from 'react-firebase-hooks/auth';
import Avatar from '@material-ui/core/Avatar'
import InputBase from '@material-ui/core/InputBase'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    composeContainer: {
        display: 'flex'
    },
    textarea: {
        marginLeft: '10px',
        width: '80%',
        border: 'none',
        outline: 'none'
    },
     form: {
         width: '100%',
         
     }
})

export default function Compose() {


    const classes = useStyles()
    const [user, loading, error] = useAuthState(firebase.auth())
    return (
        <div className={classes.composeContainer}>
            <Avatar src={loading ? null : user.photoURL} />
        <form action="" className={classes.form}>
        <textarea
        className={classes.textarea}
        placeholder="What's on your mind?"
        cols={25}
        maxLength
        wrap="soft"
        
      />
      <Button type="submit">Compose Tweet</Button>
        </form>
            
    
        </div>
    )
}
