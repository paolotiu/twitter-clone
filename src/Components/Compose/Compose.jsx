import React, {useState, useEffect} from 'react'
import StylesButton from '../Button/StylesButton';
import Avatar from '@material-ui/core/Avatar'
import TextField from '@material-ui/core/TextField'
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Slide from '@material-ui/core/Slide';

import { makeStyles } from '@material-ui/core/styles'
import {  useAuth} from '../../useAuth';
import {makeTweet} from '../../firebase/firebase'
const useStyles = makeStyles({
    composeContainer: {
        display: 'flex',
    },
    textarea: {
        marginLeft: '10px',
        width: '80%',
        border: 'none',
        outline: 'none'
    },
     form: {
         width: '100%',
         
     },
     writeTweet: {
         display: 'flex',
         alignItems: 'center'
     },
     SnackbarContent:{
        background: 'transparent', outline: 'none', boxShadow: 'none', color: 'black'
     }
})

function SlideTransition(props) {
    return <Slide {...props} direction="down" />;
  }
  

export default function Compose() {


    const classes = useStyles()
    const [disabled, setDisabled] = useState(true)
    const [text, setText] = useState('')
    const {user, loading} = useAuth()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if(text !== ''){
            setDisabled(false)
        }else{
            setDisabled(true)
        }
    }, [text])

    function submitTweet(e){
        e.preventDefault()
        makeTweet(text)
        setText('')
        setOpen(true)
    }

    function closeSnackBar(){
        setOpen(false)
    }
    return (
        <div className={classes.composeContainer}>
            
        <form action="" className={classes.form} onSubmit={submitTweet}>
            <section className={classes.writeTweet}>
        
        
            <Avatar src={loading ? null : user.photoURL} />
        <TextField
          id="standard-textarea"
          InputProps={{ disableUnderline: true }}
          placeholder="Whats Happening?"
          margin="none"
          fullWidth={true}
          style={{marginLeft: '10px'}}
          multiline
          value={text} onChange={(e) => setText(e.target.value)}
        />
            </section>
        
      <StylesButton float={true}  style={{float: 'right'}} disabled={disabled}>Tweet</StylesButton>
      <Snackbar 
      anchorOrigin={{vertical: 'top', horizontal: 'center'}}
      open={open}
      TransitionComponent={SlideTransition}
      autoHideDuration={2500}
        
      onClose={closeSnackBar}
      transitionDuration={{enter: 900, exit: 700}}
     
      >
           <SnackbarContent
            className={classes.SnackbarContent}
          message={ "Tweet sent succesfully ✔"}
        />
      </Snackbar>
      
        </form>
            
    
        </div>
    )
}
