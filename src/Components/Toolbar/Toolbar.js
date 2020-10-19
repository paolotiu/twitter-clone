import React from 'react'
import './Toolbar.css'
import Grid from '@material-ui/core/Grid'
import ProfileBar from './ProfileBar/ProfileBar'

export default function Toolbar() {
    return (
        <Grid
            container
            direction="column"
            style={{ height: '100%', marginTop: '20px' }}
        >
            <Grid item style={{ flex: '1' }} xs={10}>
                <ul>
                    <li>Home</li>
                    <li>Search</li>
                    <li>Home</li>
                    <li>Search</li>
                    <li>Home</li>
                    <li>Search</li>
                    <li>Home</li>
                    <li>Search</li>
                </ul>
            </Grid>
            <Grid item xs={1} style={{ maxWidth: '100%' }}>
                <ProfileBar />
            </Grid>
        </Grid>
    )
}
