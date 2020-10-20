import React from 'react'
import Avatar from '@material-ui/core/Avatar'

import {makeStyles} from '@material-ui/core/styles'
const useStyles= makeStyles((theme) => ({
    TweetContainer: {
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'row',
        borderTop: '1px solid grey',
    },
    main: {
        marginLeft: "10px",
        display: 'flex',
        flexDirection: 'column',

    },
    headerName: {
        
        fontSize: "16px",
        fontWeight: 'bold'
    },
    large: {
        width: theme.spacing(5),
        height: theme.spacing(5),
      },
    date: {
        fontSize: '10px',

    }
}))
export default function Tweet({data}) {
    const classes = useStyles()
    const {text, profilePicUrl, name, likes, timestamp} = data
    console.log()
    return (
        <div className={classes.TweetContainer}>
            
            <Avatar src={profilePicUrl} className={classes.large} />
            
            
            <article className={classes.main}>
            <section>
        
        
            <span className={classes.headerName}>{name}</span>
            <span className={classes.date}> {timestamp ? timestamp.toDate().toDateString() : null}</span>
            </section>
            
            <p>{text}</p>
            </article>
        </div>
    )
}
