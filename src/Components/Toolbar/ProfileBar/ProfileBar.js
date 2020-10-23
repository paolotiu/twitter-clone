import React, { useState, useEffect, useRef } from 'react'
import { signOut, changePicUrl } from '../../../firebase/firebase'
import { useAuth } from '../../../useAuth'
import Avatar from '@material-ui/core/Avatar'
import ButtonBase from '@material-ui/core/ButtonBase'
import Button from '@material-ui/core/Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import './ProfileBar.css'

export default function ProfileBar(props) {
    const [show, setShow] = useState(false)
    const { user, loading } = useAuth()
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
                    <Avatar src={loading ? null : user.photoURL} />

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
                    <Button
                        fullWidth={true}
                        onClick={(e) => {
                            e.stopPropagation()
                            document.querySelector('#file').click()
                        }}
                    >
                        <input
                            type="file"
                            name="file"
                            id="file"
                            style={{ position: 'fixed', top: '-100em' }}
                            onChange={(e) => {
                                const file = e.target.files[0]
                                console.log(file instanceof Blob)
                                changePicUrl(file)
                            }}
                            accept="image/*"
                        />
                        Change Photo
                    </Button>
                </div>
            </div>
        </>
    )
}
