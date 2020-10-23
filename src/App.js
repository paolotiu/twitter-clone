import React, { useState } from 'react'
import './App.css'
import { signOut, changePicUrl } from './firebase/firebase'
// COMPONENTS
import Grid from '@material-ui/core/Grid'
import Compose from './Components/Compose/Compose'
import Tweets from './Components/Tweets/Tweets'
import Toolbar from './Components/Toolbar/Toolbar'
import SmallToolbar from './Components/smallToolbar/SmallToolbbar'
// Material UI
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import CircularProgress from '@material-ui/core/CircularProgress'

//FA
import { faHouseUser, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        [theme.breakpoints.down('md')]: {
            justifyContent: 'center',
        },
    },
    trendingBar: {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    optionsBar: {
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    smallDisplayOptions: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    makeTweetsContainer: {
        background: '',
    },
    border: {
        border: '1px solid #eceff2',
    },
    mobileNavBarContainer: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
        height: '50px',
        position: 'fixed',
        bottom: '0%',
        width: '100%',
        backgroundColor: 'white',

        opacity: 1,
    },
    mobileNavBar: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    spinner: {
        position: 'relative',
        top: '50%',
        left: '50%',
        '&:focus': {
            outline: 'transparent auto 0',
        },
    },
}))

function App() {
    const classes = useStyles()
    const [show, setShow] = useState(false)
    const [loading, setLoading] = useState(false)
    return (
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="stretch"
            className={classes.mainGrid}
        >
            <LoadingModal loading={loading} spinnerClass={classes.spinner} />
            <Grid
                item
                container
                xs={false}
                sm={4}
                justify="flex-end"
                direction="row"
                alignItems="stretch"
                style={{ height: '100vh' }}
                className={classes.optionsBar}
            >
                <Grid item sm={7} style={{ position: 'fixed', height: '100%' }}>
                    <Toolbar />
                </Grid>
            </Grid>
            <Grid
                item
                container
                xs={false}
                sm={4}
                md={false}
                className={classes.smallDisplayOptions}
                justify="flex-end"
            >
                <SmallToolbar />
            </Grid>
            <Grid
                item
                container
                direction="column"
                xs={12}
                sm={8}
                md={4}
                spacing={3}
                alignItems="stretch"
                className={classes.border}
                style={{ height: '100%' }}
            >
                <Grid
                    item
                    container
                    sm={12}
                    direction="column"
                    alignItems="stretch"
                    style={{ borderBottom: '1px solid #eceff2' }}
                >
                    <div
                        style={{
                            fontWeight: 'bold',
                            fontSize: '1.5em',
                            paddingTop: '34px',
                        }}
                    >
                        Home
                    </div>
                </Grid>
                <Grid
                    item
                    container
                    sm={12}
                    direction="column"
                    alignItems="stretch"
                >
                    <Compose />
                </Grid>
                <Grid item sm={12} style={{ padding: 0 }}>
                    <Tweets />
                </Grid>
                <Grid
                    item
                    container
                    justify="center"
                    alignItems="center"
                    xs={12}
                    className={classes.mobileNavBarContainer}
                    style={show ? { bottom: '4%' } : { display: 'none' }}
                    onClick={signOut}
                >
                    Sign out
                </Grid>
                <Grid
                    item
                    container
                    justify="center"
                    alignItems="center"
                    xs={12}
                    className={classes.mobileNavBarContainer}
                    style={show ? { bottom: '8%' } : { display: 'none' }}
                    onClick={() => {
                        document.querySelector('#file').click()
                    }}
                >
                    Change Photo
                </Grid>
                <Grid
                    xs={12}
                    item
                    container
                    alignItems="center"
                    className={classes.mobileNavBarContainer}
                >
                    <Grid
                        item
                        container
                        xs={6}
                        justify="center"
                        onClick={topFunction}
                    >
                        <FontAwesomeIcon icon={faHouseUser} size="lg" />
                    </Grid>
                    <Grid
                        item
                        container
                        xs={6}
                        justify="center"
                        onClick={() => {
                            setShow(!show)
                        }}
                    >
                        <FontAwesomeIcon icon={faUser} size="lg" />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={false} sm={3} className={classes.trendingBar}>
                <div style={{ position: 'fixed' }}></div>
            </Grid>
            <span
                id="loading-handler"
                onClick={() => {
                    setLoading(!loading)
                }}
            ></span>
        </Grid>
    )
}

function LoadingModal({ loading, spinnerClass }) {
    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={loading}
        >
            <CircularProgress className={spinnerClass} />
        </Modal>
    )
}
function topFunction() {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}
export default App
