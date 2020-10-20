import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles({
    styledButton:{
        fontSize: '16px',
        color: 'white',
        background: '#1da1f2',
        outline: 'none',
        width: '70px',
        fontWeight: 700,
        borderRadius: '1000px',
        height: '40px',
        border: 'none',
        margin: '10px 5px',
        letterSpacing: '0.03em',
        '&:disabled': {opacity : 0.4},
    }
})
export default function StylesButton({children, float = false, disabled}) {
    
    const classes = useStyles()
    return (
        <button className={classes.styledButton} type="submit" style={float ? {float: 'right'} : null } disabled={disabled ? true : false} >
        {children}
        </button>
    )
}
