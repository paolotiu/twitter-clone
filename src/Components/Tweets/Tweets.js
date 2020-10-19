import React, { useEffect, useState } from 'react'
import { getTweets } from '../../firebase/firebase'
import loadingPng from '../../static/loading.png'
export default function Tweets() {
    const [loading, setloading] = useState(true)
    const [tweets, setTweets] = useState([])
    useEffect(() => {
        let tweetsPromise = getTweets()
        tweetsPromise.then((tweets) => {
            setTweets(tweets)
        })
        setloading(false)
        return () => {}
    }, [])
    return (
        <>
            {loading ? (
                <img src={loadingPng} alt="" style={{ height: '20px' }} />
            ) : (
                tweets.map((v) => {
                    return <p>{v.text}</p>
                })
            )}
        </>
    )
}
