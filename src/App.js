import React from 'react'
import './App.css'

// COMPONENTS
import Grid from '@material-ui/core/Grid'
import Compose from './Components/Compose/Compose'
import Tweets from './Components/Tweets/Tweets'
import Toolbar from './Components/Toolbar/Toolbar'

// Material UI
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { makeStyles } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    trendingBar: {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    makeTweetsContainer: {
        background: '',
    },
}))

function App() {
    const classes = useStyles()
    return (
        <Grid container spacing={0} direction="row" alignItems="stretch">
            <Grid
                item
                container
                sm={3}
                justify="flex-end"
                direction="row"
                alignItems="stretch"
            >
                <Grid item sm={7} style={{ position: 'fixed', height: '100%' }}>
                    <Toolbar />
                </Grid>
            </Grid>

            <Grid
                item
                container
                direction="column"
                xs={4}
                spacing={3}
                alignItems="stretch"
                style={{ height: '100%' }}
            >
                <Grid
                    item
                    container
                    sm={12}
                    direction="column"
                    alignItems="stretch"
                >
                    <div>Hello There!</div>
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
                <Grid item sm={12}>
                    <Tweets />
                </Grid>
            </Grid>

            <Grid item xs={false} sm={3}>
                <div
                    style={{ position: 'fixed' }}
                    className={classes.trendingBar}
                >
                    hey
                </div>
            </Grid>
        </Grid>
    )
}

export default App
