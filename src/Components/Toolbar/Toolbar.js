import React from 'react'
import './Toolbar.css'
import Grid from '@material-ui/core/Grid'
import ProfileBar from './ProfileBar/ProfileBar'

export default function Toolbar() {
    return (
        <Grid
            container
            direction="column"
            style={{
                height: '100%',
                marginTop: '20px',
                paddingBottom: '20px',
            }}
            justify="space-between"
        >
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
            <ProfileBar />
        </Grid>
    )
}
