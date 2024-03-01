import React, { useState } from 'react';
import Box from '@mui/material/Box'
import { AppBar, Toolbar, Typography } from '@mui/material';
import AuthHandle from './AuthHandle';

const Header = () => {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static'>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Box >
                        <Typography variant='h6'>Posts</Typography>
                    </Box>
                    <AuthHandle />
                </Toolbar>
            </AppBar>
        </Box>
    )

}

export default Header;