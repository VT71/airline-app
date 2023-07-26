import React from 'react';
import { AppBar, Container, Toolbar, Typography, Box } from '@mui/material';

function Header() {
    return (
        <AppBar>
            <Container>
                <Toolbar
                    disableGutters
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography>{`VT-AIR`}</Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            columnGap: '1rem',
                        }}
                    >
                        <Typography>{`Help`}</Typography>
                        <Typography>{`Sign Up`}</Typography>
                        <Typography>{`Login`}</Typography>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
