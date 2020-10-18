import React from 'react'
import './App.css'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles({
    container: {
        flex: '1',
    },
})
function App() {
    const classes = useStyles()

    return (
        <Grid container spacing={2} direction="row">
            <Grid item sm={4}>
                hey
            </Grid>

            <Grid item container direction="column" xs={4} alignItems="center">
                <Grid item container sm={4} justify="flex-end"></Grid>
                <Grid item sm={4}>
                    Nostrud reprehenderit labore sint velit exercitation officia
                    et adipisicing. Eu voluptate minim dolor laboris consectetur
                    sunt deserunt et excepteur mollit. Sit et reprehenderit
                    dolore voluptate ipsum culpa Lorem amet
                </Grid>
            </Grid>

            <Grid item xs={4}>
                hey
            </Grid>
        </Grid>
    )
}

export default App
