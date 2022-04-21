import React from 'react'

import {
    AppBar as MuiAppBar,
    Toolbar,
    Typography,
    Grid
} from '@mui/material';

export function AppBar() {

    return (
        <MuiAppBar 
            position="static"
            color="primary" 
            enableColorOnDark
        >
            <Toolbar>
                <Grid container>
                    <Grid item sm={1} />
                    <Grid 
                        item 
                        sm={10}
                        container
                    >
                        <Grid item xs={2}>
                            <Typography variant="h6" noWrap component="div">Hello world</Typography>
                        </Grid>
                    </Grid>
                    <Grid item sm={1} />
                </Grid>
            </Toolbar>
        </MuiAppBar>
    )
}
