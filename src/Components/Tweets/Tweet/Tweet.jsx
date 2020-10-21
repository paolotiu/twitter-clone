import React, {useState, useEffect} from 'react'
import Avatar from '@material-ui/core/Avatar'
import firebase from '../../../firebase/firebase'
import {makeStyles} from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart} from '@fortawesome/free-solid-svg-icons'
import { faHeart as outlinedHeart } from '@fortawesome/free-regular-svg-icons';
const useStyles= makeStyles((theme) => ({
    TweetContainer: {
        padding: '10px',
        display: 'flex',
        flexDirection: 'row',
        borderTop: '1px solid grey',
        
    },
    main: {
        marginLeft: "10px",
        display: 'flex',
        flexDirection: 'column',
        whiteSpace: 'normal',
        width: '80%'
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

    },
    text: {
        wordBreak: 'break-all'
    }
    
}))
export default function Tweet({data, userDataRef}) {
    const id = data.id
    const classes = useStyles()
    const [liked, setLiked] = useState(false)
    const {text, profilePicUrl, name, likes, timestamp} = data.data()
    
     function likeTweet() {
        console.log(liked)
         if(liked === false){
            data.ref.update({likes: likes + 1})
         userDataRef.update({likedTweets: firebase.firestore.FieldValue.arrayUnion(id)})
         setLiked(true)
         }else{
            data.ref.update({likes: likes - 1})
            userDataRef.update({likedTweets: firebase.firestore.FieldValue.arrayRemove(id)})
            setLiked(false)
         }
         
     }

     useEffect(() => {
        userDataRef.get().then(doc => {
            
            if(doc.exists){
                let userData = doc.data()
                let likedTweets = userData.likedTweets
                
                let res = likedTweets.indexOf(id)
                console.log(likedTweets, id, res)
                
                if(res === -1){
                    setLiked(false)
                }else if(res !== -1){
                    setLiked(true)
                }
                
                
            }
        })
     }, [id])
    return (
        <div className={classes.TweetContainer}>
            
            <Avatar src={profilePicUrl} className={classes.large} />
            
            
            <article className={classes.main}>
            <section>
        
        
            <span className={classes.headerName}>{name}</span>
            <span className={classes.date}> {timestamp ? timestamp.toDate().toDateString() : null}</span>
            </section>
            
            <p className={classes.text}>{text}</p>
            </article>
            <span>
                {likes}
                &nbsp;
            <FontAwesomeIcon icon={liked ? faHeart : outlinedHeart} onClick={likeTweet}/>

            </span>
        </div>
    )
}
