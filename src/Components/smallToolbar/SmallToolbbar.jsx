import React, {useRef, useState, useEffect} from 'react'
import { signOut } from '../../firebase/firebase';
import {useAuth} from '../../useAuth'
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
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
    container: {
        
        marginRight: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'fixed',
        height: '100%'
    },
    listContainer: {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 10px',
    },
    item: {
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
        marginTop: '40px',
        borderRadius: '1000px',
        '&:hover': {
            background: 'rgb(164,217,249, 0.3)',
            color: '#1da1f2',
        },
    },
})

export default function SmallToolbbar() {
    const { user, loading } = useAuth()
    const profile = useRef()
    const classes = useStyles()
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (show) {
            profile.current.classList.add('show')
        } else {
            profile.current.classList.remove('show')
        }
    }, [show])
    return (
        <div className={classes.container}>
            <ul className={classes.listContainer}>
                <li>
                    <FontAwesomeIcon icon={faTwitter}size='2x' style={{color: '#1da1f2',marginTop: '20px',}} />
                </li>
                <Option icon={faHouseUser} classes={classes.item} />
                <Option icon={faHashtag} classes={classes.item} />
                <Option icon={faBell} classes={classes.item} />
                <Option icon={faEnvelope} classes={classes.item} />
                <Option icon={faBookmark} classes={classes.item} />
                <Option icon={faList} classes={classes.item} />
                <Option icon={faUser} classes={classes.item} />

                
            </ul>

            <Avatar src={loading ? null : user.photoURL} onClick={() => { setShow(!show)}} style={{marginBottom: '10px'}}/>
            <div ref={profile} className="dropup">
                    <Button
                        fullWidth={true}
                        onClick={(e) => {
                            e.stopPropagation()
                            console.log('hey')
                            signOut()
                        }}
                    >
                        <FontAwesomeIcon icon={faSignOutAlt} />
                    </Button>
                </div>
        </div>
    )
}

function Option({icon, classes}){
    return(
        <li>
                    <FontAwesomeIcon icon={icon} size='2x' className={classes} />
                </li>
    )
}