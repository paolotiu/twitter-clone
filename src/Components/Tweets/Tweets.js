import React, { useEffect, useState } from 'react'
import Tweet from './Tweet/Tweet'

import loadingPng from '../../static/loading.png'
import { db } from '../../firebase/firebase'
import { useAuth } from '../../useAuth'
function findWithAttr(array, attr, value) {
    for (var i = 0; i < array.length; i += 1) {
        if (array[i][attr] === value) {
            return i
        }
    }
    return -1
}
export default function Tweets(props) {
    const [loading, setloading] = useState(true)
    const [tweets, setTweets] = useState([])

    const { user } = useAuth()
    const userDataRef = db.collection('users').doc(user.uid)
    useEffect(() => {
        const unsubscribe = db
            .collection('tweets')
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) => {
                snapshot.docChanges().forEach(function (change) {
                    let message = change.doc
                    if (change.type === 'added') {
                        setTweets((tweets) => [message, ...tweets])
                    } else if (change.type === 'modified') {
                        setTweets((tweets) => {
                            let temp = [...tweets]
                            let i = findWithAttr(tweets, 'id', message.id)
                            temp[i] = message
                            return temp
                        })
                    }
                })
            })

        setloading(false)
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <>
            {tweets.map((v, i) => {
                return <Tweet data={v} key={i} userDataRef={userDataRef} />
            })}
            <div style={{ height: '50px' }}></div>
        </>
    )
}
