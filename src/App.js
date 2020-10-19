import React from 'react'
import './App.css'

// COMPONENTS
import Grid from '@material-ui/core/Grid'

import Tweets from './Components/Tweets/Tweets'
import Toolbar from './Components/Toolbar/Toolbar'

// Material UI
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    trendingBar: {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
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

            <Grid item container direction="column" xs={6} alignItems="center">
                <Grid item container sm={4} justify="flex-end"></Grid>
                <Grid item sm={8}>
                    <div>
                        Nostrud reprehenderit labore sint velit exercitation
                        officia et adipisicing. Eu voluptate minim dolor laboris
                        consectetur sunt deserunt et excepteur mollit. Sit et
                        reprehenderit dolore voluptate ipsum culpa Lorem amet
                        Nostrud reprehenderit labore sint velit exercitation
                        officia et adipisicing. Eu voluptate minim dolor laboris
                        consectetur sunt deserunt et excepteur mollit. Sit et
                        reprehenderit dolore voluptate ipsum culpa Lorem amet
                        Nostrud reprehenderit labore sint velit exercitation
                        officia et adipisicing. Eu voluptate minim dolor laboris
                        consectetur sunt deserunt et excepteur mollit. Sit et
                        reprehenderit dolore voluptate ipsum culpa Lorem amet
                        Nostrud reprehenderit labore sint velit exercitation
                        officia et adipisicing. Eu voluptate minim dolor laboris
                        consectetur sunt deserunt et excepteur mollit. Sit et
                        reprehenderit dolore voluptate ipsum culpa Lorem amet
                        Nostrud reprehenderit labore sint velit exercitation
                        officia et adipisicing. Eu voluptate minim dolor laboris
                        consectetur sunt deserunt et excepteur mollit. Sit et
                        reprehenderit dolore voluptate ipsum culpa Lorem amet
                        Nostrud reprehenderit labore sint velit exercitation
                        officia et adipisicing. Eu voluptate minim dolor laboris
                        consectetur sunt deserunt et excepteur mollit. Sit et
                        reprehenderit dolore voluptate ipsum culpa Lorem amet
                        Nostrud reprehenderit labore sint velit exercitation
                        officia et adipisicing. Eu voluptate minim dolor laboris
                        consectetur sunt deserunt et excepteur mollit. Sit et
                        reprehenderit dolore voluptate ipsum culpa Lorem amet
                        Nostrud reprehenderit labore sint velit exercitation
                        officia et adipisicing. Eu voluptate minim dolor laboris
                        consectetur sunt deserunt et excepteur mollit. Sit et
                        reprehenderit dolore voluptate ipsum culpa Lorem amet
                        Nostrud reprehenderit labore sint velit exercitation
                        officia et adipisicing. Eu voluptate minim dolor laboris
                        consectetur sunt deserunt et excepteur mollit. Sit et
                        reprehenderit dolore voluptate ipsum culpa Lorem amet
                        Nostrud reprehenderit labore sint velit exercitation
                        officia et adipisicing. Eu voluptate minim dolor laboris
                        consectetur sunt deserunt et excepteur mollit. Sit et
                        reprehenderit dolore voluptate ipsum culpa Lorem amet
                        Nostrud reprehenderit labore sint velit exercitation
                        officia et adipisicing. Eu voluptate minim dolor laboris
                        consectetur sunt deserunt et excepteur mollit. Sit et
                        reprehenderit dolore voluptate ipsum culpa Lorem amet
                        Nostrud reprehenderit labore sint velit exercitation
                        officia et adipisicing. Eu voluptate minim dolor laboris
                        consectetur sunt deserunt et excepteur mollit. Sit et
                        reprehenderit dolore voluptate ipsum culpa Lorem amet
                        Nostrud reprehenderit labore sint velit exercitation
                        officia et adipisicing. Eu voluptate minim dolor laboris
                        consectetur sunt deserunt et excepteur mollit. Sit et
                        reprehenderit dolore voluptate ipsum culpa Lorem amet
                        Nostrud reprehenderit labore sint velit exercitation
                        officia et adipisicing. Eu voluptate minim dolor laboris
                        consectetur sunt deserunt et excepteur mollit. Sit et
                        reprehenderit dolore voluptate ipsum culpa Lorem amet
                        Nostrud reprehenderit labore sint velit exercitation
                        officia et adipisicing. Eu voluptate minim dolor laboris
                        consectetur sunt deserunt et excepteur mollit. Sit et
                        reprehenderit dolore voluptate ipsum culpa Lorem amet
                        Nostrud reprehenderit labore sint velit exercitation
                        officia et adipisicing. Eu voluptate minim dolor laboris
                        consectetur sunt deserunt et excepteur mollit. Sit et
                        reprehenderit dolore voluptate ipsum culpa Lorem amet
                        Nostrud reprehenderit labore sint velit exercitation
                        officia et adipisicing. Eu voluptate minim dolor laboris
                        consectetur sunt deserunt et excepteur mollit. Sit et
                        reprehenderit dolore voluptate ipsum culpa Lorem amet
                        Nostrud reprehenderit labore sint velit exercitation
                        officia et adipisicing. Eu voluptate minim dolor laboris
                        consectetur sunt deserunt et excepteur mollit. Sit et
                        reprehenderit dolore voluptate ipsum culpa Lorem amet
                        Nostrud reprehenderit labore sint velit exercitation
                        officia et adipisicing. Eu voluptate minim dolor laboris
                        consectetur sunt deserunt et excepteur mollit. Sit et
                        reprehenderit dolore voluptate ipsum culpa Lorem amet
                        Nostrud reprehenderit labore sint velit exercitation
                        officia et adipisicing. Eu voluptate minim dolor laboris
                        consectetur sunt deserunt et excepteur mollit. Sit et
                        reprehenderit dolore voluptate ipsum culpa Lorem amet
                        Nostrud reprehenderit labore sint velit exercitation
                        officia et adipisicing. Eu voluptate minim dolor laboris
                        consectetur sunt deserunt et excepteur mollit. Sit et
                        reprehenderit dolore voluptate ipsum culpa Lorem amet
                        Nostrud reprehenderit labore sint velit exercitation
                        officia et adipisicing. Eu voluptate minim dolor laboris
                        consectetur sunt deserunt et excepteur mollit. Sit et
                        reprehenderit dolore voluptate ipsum culpa Lorem amet
                        Nostrud reprehenderit labore sint velit exercitation
                        officia et adipisicing. Eu voluptate minim dolor laboris
                        consectetur sunt deserunt et excepteur mollit. Sit et
                        reprehenderit dolore voluptate ipsum culpa Lorem amet
                        Nostrud reprehenderit labore sint velit exercitation
                        officia et adipisicing. Eu voluptate minim dolor laboris
                        consectetur sunt deserunt et excepteur mollit. Sit et
                        reprehenderit dolore voluptate ipsum culpa Lorem amet
                    </div>
                    {/* <Tweets /> */}
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
