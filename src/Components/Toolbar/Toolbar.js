import React from 'react'
import './Toolbar.css'
import Grid from '@material-ui/core/Grid'
import ProfileBar from './ProfileBar/ProfileBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHouseUser,
    faHashtag,
    faBell,
    faEnvelope,
    faBookmark,
    faList,
    faUser,
} from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    item: {
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
        marginTop: '20px',
        padding: ' 10px 5px 10px 10px',
        borderRadius: '1000px',
        '&:hover': {
            background: 'rgb(164,217,249, 0.3)',
            color: '#1da1f2',
        },
    },
})

export default function Toolbar() {
    const classes = useStyles()
    return (
        <Grid
            container
            direction="column"
            style={{
                height: '100%',
                marginTop: '20px',
                paddingBottom: '20px',
            }}
            justify="space-between"
        >
            <ul>
                <FontAwesomeIcon
                    icon={faTwitter}
                    size="2x"
                    style={{
                        display: 'block',
                        color: '#1da1f2',
                        paddingLeft: '10px',
                    }}
                />
                <Option classes={classes.item} icon={faHouseUser} name="Home" />
                <Option
                    classes={classes.item}
                    icon={faHashtag}
                    name="Explore"
                />
                <Option
                    classes={classes.item}
                    icon={faBell}
                    name="Notifications"
                />
                <Option
                    classes={classes.item}
                    icon={faEnvelope}
                    name="Messages"
                />
                <Option
                    classes={classes.item}
                    icon={faBookmark}
                    name="Bookmarks"
                />
                <Option classes={classes.item} icon={faList} name="Lists" />
                <Option classes={classes.item} icon={faUser} name="Profile" />
            </ul>
            <ProfileBar />
        </Grid>
    )
}

function Option({ classes, icon, style, name }) {
    return (
        <section className={classes}>
            <FontAwesomeIcon icon={icon} size="2x" />{' '}
            <span
                style={{
                    marginTop: '8px',
                    marginLeft: '10px',
                    userSelect: 'none',
                }}
            >
                {name}
            </span>
        </section>
    )
}
