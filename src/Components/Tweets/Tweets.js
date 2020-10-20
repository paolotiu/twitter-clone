import React, { useEffect, useState } from 'react'
import Tweet from './Tweet/Tweet'
import { db } from '../../firebase/firebase'

import loadingPng from '../../static/loading.png'
export default function Tweets() {
    const [loading, setloading] = useState(true)
    const [tweets, setTweets] = useState([])

    useEffect(() => {
        db.collection('tweets')
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) => {
                console.log('called')
                snapshot.docChanges().forEach(function (change) {
                    let message = change.doc.data()
                    if (change.type === 'added') {
                        setTweets((tweets) => [message, ...tweets])
                    }
                })
            })

        setloading(false)
        return () => {}
    }, [])

    return (
        <>
            {tweets.map((v, i) => {
                return <Tweet data={v} key={i} />
            })}
        </>
    )
}
