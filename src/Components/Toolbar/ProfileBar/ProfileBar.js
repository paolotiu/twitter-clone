import React, { useState, useEffect, useRef } from 'react'
import { signOut, auth } from '../../../firebase/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Avatar from '@material-ui/core/Avatar'
import ButtonBase from '@material-ui/core/ButtonBase'
import Button from '@material-ui/core/Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import './ProfileBar.css'

export default function ProfileBar(props) {
    const [show, setShow] = useState(false)
    const [user, loading, error] = useAuthState(auth)
    const profile = useRef()
    useEffect(() => {
        if (show) {
            profile.current.classList.add('show')
        } else {
            profile.current.classList.remove('show')
        }
    }, [show])
    return (
        <>
            <div
                style={{ borderRadius: '50px', width: '100%' }}
                onClick={() => setShow(!show)}
            >
                <div className="bar-container">
                    <Avatar src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?cs=srgb&dl=pexels-chevanon-photography-1108099.jpg&fm=jpg" />

                    <div className="name-container">
                        <span>{loading ? null : user.displayName}</span>
                    </div>

                    <ExpandMoreIcon />
                </div>
                <div ref={profile} className="dropup">
                    <Button
                        fullWidth={true}
                        onClick={(e) => {
                            e.stopPropagation()
                            signOut()
                        }}
                    >
                        Sign Out
                    </Button>
                </div>
            </div>
        </>
    )
}
