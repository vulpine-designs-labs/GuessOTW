import React from 'react'

import {
    AppBar as MuiAppBar,
    Toolbar,
    Typography,
    Grid,
    Button,
    Box
} from '@mui/material'; 


export function AppBar() {

    return (
        <MuiAppBar 
            position="static"
        >
            <Toolbar>
                <Grid container>
                    <Grid 
                        item
                        xs={false}
                        sm={1}
                    />
                    <Grid 
                        item 
                        xs={12}
                        sm={10}
                        container
                        justifyContent="space-between"
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 2
                            }}
                        >
                            <Button
                                onClick={() => {}}
                            >
                                <img
                                    alt="Vulpine Designs home"
                                    src="./images/logo.png"
                                    height={47}
                                />
                            </Button>
                            <Box
                                sx={{ 
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <Button
                                    onClick={() => {}}
                                    variant="outlined"
                                    size='small'
                                >
                                    Initiator Set
                                </Button>
                            </Box>
                            <Box
                                sx={{ 
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <Button
                                    onClick={() => {}}
                                    variant="outlined"
                                    size='small'
                                >
                                    Vulpine Home
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid 
                        item
                        xs={false}
                        sm={1}
                    />
                </Grid>
            </Toolbar>
        </MuiAppBar>
    )
}
