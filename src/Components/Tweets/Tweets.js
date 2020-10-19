import React, { useEffect, useState } from 'react'
import firebase from '../../firebase/firebase'
import loadingPng from '../../static/loading.png'
export default function Tweets() {
    const [loading, setloading] = useState(true)
    useEffect(() => {
        firebase.getTweets()
        setloading(false)
    }, [])
    return (
        <>
            {loading ? (
                <img src={loadingPng} alt="" style={{ height: '20px' }} />
            ) : (
                'hey'
            )}
        </>
    )
}
